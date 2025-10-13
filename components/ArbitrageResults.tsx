
import React from 'react';
import { ArbitrageOpportunity } from '../types';
import Spinner from './Spinner';

interface ArbitrageResultsProps {
  opportunities: ArbitrageOpportunity[];
  isLoading: boolean;
  error: string | null;
  fiat: string;
}

const OpportunityCard: React.FC<{ op: ArbitrageOpportunity }> = ({ op }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: op.fiat,
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
    });
    
    return (
        <div className="bg-brand-secondary rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-bold text-brand-light">{op.asset} / {op.fiat}</span>
                <span className="bg-green-500 text-white text-lg font-bold py-1 px-3 rounded-full">
                    +{op.profitPercentage.toFixed(2)}%
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-brand-subtle">
                {/* Buy Section */}
                <div className="bg-brand-primary p-3 rounded">
                    <h4 className="font-bold text-brand-light mb-1">Buy From</h4>
                    <p className="font-semibold text-red-400">{op.buyFrom.exchange}</p>
                    <p className="text-lg">{formatter.format(op.buyFrom.price)}</p>
                    <p className="text-sm">Trader: {op.buyFrom.user}</p>
                </div>
                {/* Sell Section */}
                <div className="bg-brand-primary p-3 rounded">
                    <h4 className="font-bold text-brand-light mb-1">Sell To</h4>
                    <p className="font-semibold text-green-400">{op.sellTo.exchange}</p>
                    <p className="text-lg">{formatter.format(op.sellTo.price)}</p>
                    <p className="text-sm">Trader: {op.sellTo.user}</p>
                </div>
            </div>
            <div className="mt-3 text-center text-brand-light">
                Profit per unit: <span className="font-bold">{formatter.format(op.priceDifference)}</span>
            </div>
        </div>
    );
};

const ArbitrageResults: React.FC<ArbitrageResultsProps> = ({ opportunities, isLoading, error, fiat }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-center p-8 bg-red-900/50 text-red-300 rounded-lg">{error}</div>;
  }
  
  if (opportunities.length === 0) {
    return <div className="text-center p-8 bg-brand-secondary text-brand-subtle rounded-lg">No arbitrage opportunities found for the selected criteria. Try different options.</div>;
  }

  return (
    <div>
        <h2 className="text-2xl font-bold text-brand-accent mb-4 text-center">Top Opportunities</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {opportunities.map((op, index) => (
                <OpportunityCard key={`${op.asset}-${op.buyFrom.exchange}-${op.sellTo.exchange}-${index}`} op={op} />
            ))}
        </div>
    </div>
  );
};

export default ArbitrageResults;
