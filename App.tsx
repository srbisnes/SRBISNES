
import React, { useState, useCallback } from 'react';
import ArbitrageControls from './components/ArbitrageControls';
import ArbitrageResults from './components/ArbitrageResults';
import { ArbitrageOpportunity, Selections } from './types';
import { findArbitrageOpportunities } from './services/geminiService';
import { FIAT_CURRENCIES } from './constants';

const App: React.FC = () => {
  const [opportunities, setOpportunities] = useState<ArbitrageOpportunity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [currentFiat, setCurrentFiat] = useState<string>(FIAT_CURRENCIES[0]);

  const handleAnalyze = useCallback(async (selections: Selections) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setOpportunities([]);
    setCurrentFiat(selections.fiat);

    try {
      const result = await findArbitrageOpportunities(selections);
      setOpportunities(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-primary text-brand-light font-sans">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-accent tracking-tight">
            P2P Crypto Arbitrage Analyzer
          </h1>
          <p className="mt-2 text-lg text-brand-subtle max-w-2xl mx-auto">
            Find profitable trading opportunities across P2P platforms. Powered by Gemini AI.
          </p>
        </header>
        
        <main>
          <ArbitrageControls onAnalyze={handleAnalyze} isLoading={isLoading} />
          {hasSearched && (
            <ArbitrageResults 
              opportunities={opportunities} 
              isLoading={isLoading} 
              error={error} 
              fiat={currentFiat}
            />
          )}
          {!hasSearched && (
            <div className="text-center p-8 bg-brand-secondary text-brand-subtle rounded-lg">
              <h2 className="text-2xl font-bold text-brand-light mb-2">Ready to find opportunities?</h2>
              <p>Select your desired exchanges, assets, and fiat currency above and click "Find Arbitrage" to begin.</p>
            </div>
          )}
        </main>
        
        <footer className="text-center mt-12 text-brand-subtle text-sm">
            <p>Disclaimer: This tool uses AI-generated data for simulation purposes only. It is not financial advice. Always do your own research before making any trades.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
