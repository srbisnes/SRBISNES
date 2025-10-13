
import React, { useState, useCallback } from 'react';
import { Selections } from '../types';
import { EXCHANGES, CRYPTO_ASSETS, FIAT_CURRENCIES } from '../constants';

interface ArbitrageControlsProps {
  onAnalyze: (selections: Selections) => void;
  isLoading: boolean;
}

const ArbitrageControls: React.FC<ArbitrageControlsProps> = ({ onAnalyze, isLoading }) => {
  const [selections, setSelections] = useState<Selections>({
    exchanges: [EXCHANGES[0], EXCHANGES[1]],
    assets: [CRYPTO_ASSETS[0]],
    fiat: FIAT_CURRENCIES[0],
  });

  const handleCheckboxChange = (category: 'exchanges' | 'assets', value: string) => {
    setSelections(prev => {
      const currentValues = prev[category];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
      return { ...prev, [category]: newValues };
    });
  };
  
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (selections.exchanges.length < 2 || selections.assets.length < 1) {
        alert("Please select at least two exchanges and one asset.");
        return;
    }
    onAnalyze(selections);
  }, [onAnalyze, selections]);


  return (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-lg mb-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Exchanges */}
          <div>
            <h3 className="text-lg font-bold text-brand-light mb-3">Exchanges</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
              {EXCHANGES.map(exchange => (
                <label key={exchange} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selections.exchanges.includes(exchange)}
                    onChange={() => handleCheckboxChange('exchanges', exchange)}
                    className="h-4 w-4 rounded bg-brand-primary border-brand-subtle text-brand-accent focus:ring-brand-accent"
                  />
                  <span className="text-brand-subtle">{exchange}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Crypto Assets */}
          <div>
            <h3 className="text-lg font-bold text-brand-light mb-3">Crypto Assets</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
              {CRYPTO_ASSETS.map(asset => (
                <label key={asset} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selections.assets.includes(asset)}
                    onChange={() => handleCheckboxChange('assets', asset)}
                    className="h-4 w-4 rounded bg-brand-primary border-brand-subtle text-brand-accent focus:ring-brand-accent"
                  />
                  <span className="text-brand-subtle">{asset}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Fiat Currency */}
          <div>
            <h3 className="text-lg font-bold text-brand-light mb-3">Fiat Currency</h3>
            <select
              value={selections.fiat}
              onChange={e => setSelections(prev => ({ ...prev, fiat: e.target.value }))}
              className="w-full bg-brand-primary border border-brand-subtle text-brand-light p-2 rounded focus:ring-brand-accent focus:border-brand-accent"
            >
              {FIAT_CURRENCIES.map(fiat => (
                <option key={fiat} value={fiat}>{fiat}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-brand-accent text-brand-primary font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 disabled:bg-brand-subtle disabled:cursor-not-allowed flex items-center justify-center mx-auto"
          >
            {isLoading ? 'Analyzing...' : 'Find Arbitrage'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArbitrageControls;
