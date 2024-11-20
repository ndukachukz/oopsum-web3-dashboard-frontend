import tether from "@/assets/images/Tether.png";
import uniswap from "@/assets/images/Uniswap.png";
import wazirx from "@/assets/images/WazirX.png";

import { CryptoDashboard } from "@/types";

export const APP = {
  name: "ooPsum",
};

export const dashboard_data: CryptoDashboard = {
  trending: {
    title: "Trending",
    coins: [
      {
        rank: 1,
        name: "Tether",
        symbol: "USDT",
        priceChange: 0.4,
        direction: "up",
        image: tether,
      },
      {
        rank: 2,
        name: "Uniswap",
        symbol: "UNI",
        priceChange: 2.3,
        direction: "up",
        image: uniswap,
      },
      {
        rank: 3,
        name: "Wazirx",
        symbol: "WRX",
        priceChange: 0.06,
        direction: "down",
        image: wazirx,
      },
    ],
  },
  recentlyAdded: {
    title: "Recently added",
    coins: [
      {
        rank: 1,
        name: "Pinoxa",
        symbol: "PINO",
        price: 0.000314,
        image: "https://assets.coingecko.com/coins/images/new/pinoxa.png",
      },
      {
        rank: 2,
        name: "Stacks",
        symbol: "STX",
        price: 0.0008765,
        image:
          "https://assets.coingecko.com/coins/images/2121/small/stacks.png",
      },
      {
        rank: 3,
        name: "Symbol",
        symbol: "SYB",
        price: 0.000000001239,
        image: "https://assets.coingecko.com/coins/images/symbol.png",
      },
    ],
  },
  topCoins: {
    title: "Top coins",
    coins: [
      {
        name: "Compound",
        symbol: "COMP",
        price: 27308.0,
        priceChange: 8250,
        timeFrame: "All time",
        direction: "up",
        image:
          "https://assets.coingecko.com/coins/images/10775/small/compound.png",
      },
      {
        name: "Shibainu",
        symbol: "SHIB",
        price: 0.0008827,
        priceChange: 660910,
        timeFrame: "All time",
        direction: "up",
        image:
          "https://assets.coingecko.com/coins/images/11939/small/shiba.png",
      },
      {
        name: "ThetaFuel",
        symbol: "TFUEL",
        price: 0.04276,
        priceChange: 151,
        timeFrame: "All time",
        direction: "down",
        image: "https://assets.coingecko.com/coins/images/8029/small/tfuel.png",
      },
    ],
  },
};
