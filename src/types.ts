export interface Coin {
  name: string;
  symbol: string;
  image: string;
}

export interface TrendingCoin extends Coin {
  rank: number;
  priceChange: number;
  direction: "up" | "down";
}

export interface RecentlyAddedCoin extends Coin {
  rank: number;
  price: number;
}

export interface TopCoin extends Coin {
  price: number;
  priceChange: number;
  timeFrame: string;
  direction: "up" | "down";
}

export interface TrendingSection {
  title: string;
  coins: TrendingCoin[];
}

export interface RecentlyAddedSection {
  title: string;
  coins: RecentlyAddedCoin[];
}

export interface TopCoinsSection {
  title: string;
  coins: TopCoin[];
}

export interface CryptoDashboard {
  trending: TrendingSection;
  recentlyAdded: RecentlyAddedSection;
  topCoins: TopCoinsSection;
}
