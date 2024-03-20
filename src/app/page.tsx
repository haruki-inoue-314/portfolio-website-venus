import SelfIntroduction from "@/components/SelfIntroduction";
import PortfolioItem from "@/components/PortfolioItem";
import Link from "next/link";
import { fetchPortfolio } from "@/libs/client";

export default async function Home() {
  const { contents } = await fetchPortfolio();

  console.log(contents);

  type Account = {
    title: string;
    to: string;
    bgColor: string;
    fontColor: string;
  };

  const acounts: Account[] = [
    {
      title: "Twitter",
      to: "https://twitter.com/kyotonagoya1476",
      bgColor: "bg-[#1DA1F2]",
      fontColor: "text-white",
    },
    {
      title: "Qiita",
      to: "https://qiita.com/kyotonagoya",
      bgColor: "bg-[#55c550]",
      fontColor: "text-white",
    },
    {
      title: "GitHub",
      to: "https://github.com/k15015kk",
      bgColor: "bg-[#171515]",
      fontColor: "text-white",
    },
    {
      title: "Wantedly",
      to: "https://www.wantedly.com/id/kyotonagoya",
      bgColor: "bg-[#f0f0f0]",
      fontColor: "text-black",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <main>
        <div className="flex flex-col items-center">
          <div className="mt-8 mb-2 w-[96px] h-[96px]">
            <img
              src="identity_icon.png"
              alt="さんてんいちよんのアイデンティティアイコン"
              className="w-auto h-auto border rounded-full shadow"
            />
          </div>
          <h1 className="mt-2 mb-1 text-2xl font-bold">さんてんいちよん</h1>
          <p className="my-2">
            iOSアプリエンジニア ときどき Webフロントエンジニア
          </p>
          <div className="mt-2 mb-4">
            <div className="flex flex-wrap">
              {acounts.map((acount) => (
                <Link
                  href={acount.to}
                  className={`${acount.bgColor} ${acount.fontColor} mx-1 my-1 px-3 py-1 font-bold shadow rounded hover:opacity-50`}
                  key={acount.title}
                >
                  {acount.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <SelfIntroduction />

        <div className="relative max-w-[960px] m-auto p-4">
          <h2 className="text-2xl text-gray-900 font-bold my-2 mx-2">
            Portfolio
          </h2>
          <div className="flex flex-wrap">
            {contents.map(
              (contents: {
                id: string;
                thumbnail: { url: string };
                title: string;
                abstract: string;
                link: string;
              }) => {
                return (
                  <PortfolioItem
                    thumbnail={contents.thumbnail.url}
                    title={contents.title}
                    abstract={contents.abstract}
                    link={contents.link}
                  />
                );
              }
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
