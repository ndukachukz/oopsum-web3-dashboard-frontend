import { dashboard_data } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { RecentlyAddedCoin, TrendingCoin } from "@/types";

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
    <div className="rounded-[34px] max-w-xl mx-auto bg-muted p-4 space-y-[20px]">
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
                      coin.direction === "up" && "text-[#2DC24E]",
                      coin.direction === "down" && "text-[#F92C2C]"
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
  return (
    <div className="flex flex-1 flex-col gap-x-[18px] p-4">
      <section className="space-y-5 ">
        <h1 className="italic font-thin text-base text-muted-foreground">
          Todays prices by marketcap
        </h1>

        <div className="space-y-4 lg:grid lg:gap-4 lg:grid-cols-2">
          <TrendingSectionCard
            emoji="🔥"
            title={"Trending"}
            seeMoreLink=""
            trendingCoinData={dashboard_data.trending.coins}
            recentlyAddedCoinData={[]}
          />

          <TrendingSectionCard
            emoji="⏳"
            title={"Recent added"}
            seeMoreLink=""
            recentlyAddedCoinData={dashboard_data.recentlyAdded.coins}
            trendingCoinData={[]}
          />
        </div>
      </section>

      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
}

export default Dashboard;
