
export interface Selections {
  exchanges: string[];
  assets: string[];
  fiat: string;
}

export interface P2PListing {
  exchange: string;
  asset: string;
  fiat: string;
  type: 'BUY' | 'SELL';
  price: number;
  availableAmount: number;
  user: string;
  minLimit: number;
  maxLimit: number;
}

export interface ArbitrageOpportunity {
  asset: string;
  fiat: string;
  buyFrom: P2PListing;
  sellTo: P2PListing;
  profitPercentage: number;
  priceDifference: number;
}
