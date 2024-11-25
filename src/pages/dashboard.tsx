import { ArrowDown2 } from "iconsax-react";

import { Area, AreaChart } from "recharts";
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";
import { dashboard_data } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { RecentlyAddedCoin, TrendingCoin } from "@/types";
import { chartConfig } from "@/lib/config";
import { useSidebar } from "@/components/ui/sidebar";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const TrendingSectionCard = ({
  title,
  emoji,
  seeMoreLink,
  trendingCoinData,
  recentlyAddedCoinData,
}: {
  title: string;
  emoji: string;
  seeMoreLink: string;
  trendingCoinData: TrendingCoin[];
  recentlyAddedCoinData: RecentlyAddedCoin[];
}) => {
  return (
    <div className="rounded-[34px] max-md:max-w-xl  max-lg:mx-auto bg-muted p-4 space-y-[20px]">
      <div className="flex items-center justify-between bg-muted">
        <h2 className="md:text-xl text-[22px] lg:text-[22px]">
          <span className="md:mr-1 lg:mr-3">{emoji}</span> {title}
        </h2>
        <a href={seeMoreLink} className="text-light-green font-medium text-sm">
          See all
        </a>
      </div>

      <ol className="list-inside space-y-2">
        {trendingCoinData.length > 0 &&
          trendingCoinData.map((coin, index) => (
            <li
              key={index}
              className="bg-[#212325] rounded-[30px] px-[14px] py-4"
            >
              <a href="" target="" className="text-base capitalize">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-[14px]">
                    {coin.rank}{" "}
                    <span>
                      <img src={coin.image} alt="" className="size-6" />
                    </span>{" "}
                    <span className="space-x-1">
                      {coin.name}{" "}
                      <span className="text-muted-foreground uppercase">
                        {coin.symbol}
                      </span>
                    </span>
                  </div>

                  <p
                    className={cn(
                      coin.direction === "up" && "text-price-positive",
                      coin.direction === "down" && "text-price-negetive"
                    )}
                  >
                    {coin.direction === "down" && "-"} {coin.priceChange}
                    &percnt;
                  </p>
                </div>
              </a>
            </li>
          ))}
        {recentlyAddedCoinData.length > 0 &&
          recentlyAddedCoinData.map((coin, index) => (
            <li
              key={index}
              className="bg-[#212325] rounded-[30px] px-[14px] py-4"
            >
              <a href="" target="" className="text-base capitalize">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-[14px]">
                    {coin.rank}{" "}
                    <span>
                      <img src={coin.image} alt="" className="size-6" />
                    </span>{" "}
                    <span className="space-x-1">
                      {coin.name}{" "}
                      <span className="text-muted-foreground uppercase">
                        {coin.symbol}
                      </span>
                    </span>
                  </div>

                  <p className={cn()}>{coin.price}</p>
                </div>
              </a>
            </li>
          ))}
      </ol>
    </div>
  );
};

function Dashboard() {
  const { state } = useSidebar();

  return (
    <div className="flex flex-1 flex-col gap-x-[18px] p-4 space-y-9">
      <section className="space-y-5 ">
        <h1 className="italic font-thin text-base text-muted-foreground">
          Todays prices by marketcap
        </h1>

        <div className="max-lg:space-y-4 lg:grid lg:gap-x-4 lg:grid-cols-2">
          <TrendingSectionCard
            emoji="🔥"
            title={"Trending"}
            seeMoreLink=""
            trendingCoinData={dashboard_data.trending.coins}
            recentlyAddedCoinData={[]}
          />

          <TrendingSectionCard
            emoji="⏳"
            title={"Recently added"}
            seeMoreLink=""
            recentlyAddedCoinData={dashboard_data.recentlyAdded.coins}
            trendingCoinData={[]}
          />
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex p-4 justify-between items-center">
          <h1 className="text-[26px] leading-10">Top coins</h1>
          <Button
            variant={"outline"}
            className="border-white rounded-[25px] px-4 py-[14px]"
          >
            All time
            <ArrowDown2 size="14" color="#FFF" />
          </Button>
        </div>

        <div
          className={cn(
            "flex space-x-[10px] snap-x overflow-x-scroll no-scrollbar",
            state === "collapsed"
              ? "max-w-[calc(100% - var(--sidebar-width-icon))]"
              : " max-w-[calc(100% - var(--sidebar-width))]"
          )}
        >
          {dashboard_data.topCoins.coins.map((coin) => (
            <div
              key={coin.symbol}
              className="relative overflow-hidden bg-muted snap-center rounded-[34px] min-w-full lg:min-w-[366.67px] h-[298px] "
            >
              <div className="p-4 space-y-4 ">
                <div className="flex">
                  <img src={coin.image} alt="" className="size-12" />
                </div>

                <div className="space-y-2">
                  <p className="text-base text-muted-foreground">{coin.name}</p>
                  <p className="font-medium text-[28px] leading-[38px]">
                    {coin.price}
                  </p>
                </div>
              </div>

              <div className="absolute space-x-2 bottom-4 left-4 flex items-baseline ">
                <p
                  className={cn(
                    coin.direction === "up"
                      ? "text-price-positive"
                      : coin.direction === "down" && "text-price-negetive"
                  )}
                >
                  % {coin.priceChange}
                </p>
                <p className="text-xs font-thin">All time</p>
              </div>

              <ChartContainer
                className="absolute bottom-0 right-0 left-0"
                config={chartConfig}
              >
                <AreaChart
                  margin={{
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  accessibilityLayer
                  data={chartData}
                >
                  <Area
                    dataKey="desktop"
                    type="linear"
                    fill="var(--color-desktop)"
                    fillOpacity={0.1}
                    stroke="var(--color-desktop)"
                    strokeOpacity={0.3}
                    className=""
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
