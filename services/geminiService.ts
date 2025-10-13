
import { GoogleGenAI, Type } from "@google/genai";
import { Selections, P2PListing, ArbitrageOpportunity } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        exchange: { type: Type.STRING, description: "Exchange name, e.g., 'Binance P2P'" },
        asset: { type: Type.STRING, description: "Crypto asset ticker, e.g., 'USDT'" },
        fiat: { type: Type.STRING, description: "Fiat currency ticker, e.g., 'ARS'" },
        type: { type: Type.STRING, description: "'BUY' (user wants to buy crypto) or 'SELL' (user wants to sell crypto)" },
        price: { type: Type.NUMBER, description: "Price in the specified fiat currency" },
        availableAmount: { type: Type.NUMBER, description: "Total crypto amount available for the trade" },
        user: { type: Type.STRING, description: "Anonymized username of the advertiser" },
        minLimit: { type: Type.NUMBER, description: "Minimum trade amount in fiat" },
        maxLimit: { type: Type.NUMBER, description: "Maximum trade amount in fiat" },
      },
      required: ["exchange", "asset", "fiat", "type", "price", "availableAmount", "user", "minLimit", "maxLimit"],
    },
};

const calculateArbitrage = (listings: P2PListing[]): ArbitrageOpportunity[] => {
    const opportunities: ArbitrageOpportunity[] = [];
    const assets = [...new Set(listings.map(l => l.asset))];

    for (const asset of assets) {
        const assetListings = listings.filter(l => l.asset === asset);
        
        // From an arbitrageur's perspective:
        // 'BUY' listings are where you can SELL your crypto.
        // 'SELL' listings are where you can BUY crypto.
        const buyListings = assetListings.filter(l => l.type === 'SELL').sort((a, b) => a.price - b.price);
        const sellListings = assetListings.filter(l => l.type === 'BUY').sort((a, b) => b.price - a.price);

        if (buyListings.length > 0 && sellListings.length > 0) {
            const bestBuy = buyListings[0];
            
            for(const bestSell of sellListings) {
                // Arbitrage requires buying and selling on different exchanges
                if (bestBuy.exchange !== bestSell.exchange && bestSell.price > bestBuy.price) {
                    const priceDifference = bestSell.price - bestBuy.price;
                    const profitPercentage = (priceDifference / bestBuy.price) * 100;

                    opportunities.push({
                        asset,
                        fiat: bestBuy.fiat,
                        buyFrom: bestBuy,
                        sellTo: bestSell,
                        profitPercentage,
                        priceDifference
                    });
                }
            }
        }
    }
    
    // Sort by highest profit percentage
    return opportunities.sort((a,b) => b.profitPercentage - a.profitPercentage);
};


export const findArbitrageOpportunities = async (selections: Selections): Promise<ArbitrageOpportunity[]> => {
    const { exchanges, assets, fiat } = selections;
    
    const prompt = `
      Simulate a realistic list of P2P cryptocurrency trade listings.
      I am looking for arbitrage opportunities for the following assets: ${assets.join(', ')}.
      The fiat currency is ${fiat}.
      The exchanges to simulate are: ${exchanges.join(', ')}.
      Generate a diverse list of both 'BUY' (people wanting to buy crypto with fiat) and 'SELL' (people wanting to sell crypto for fiat) advertisements.
      Prices should be realistic for the ${fiat} market, with slight variations between exchanges to allow for potential arbitrage.
      Include varied available amounts and trade limits.
      Generate about 5-10 listings for each asset on each exchange.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.7
            },
        });
        
        const jsonText = response.text.trim();
        const listings: P2PListing[] = JSON.parse(jsonText);
        return calculateArbitrage(listings);

    } catch (error) {
        console.error("Error fetching or processing Gemini data:", error);
        throw new Error("Failed to generate or analyze market data. Please try again.");
    }
};
