import Link from "next/link";

export default function SelfIntroduction() {
  type Profile = {
    title: string;
    paragraph: string;
  };

  type Skill = {
    title: string;
    bgColor: string;
    fontCcolor: string;
  };

  type Account = {
    title: string;
    to: string;
    bgColor: string;
    fontCcolor: string;
  };

  const profiles: Profile[] = [
    {
      title: "すまい",
      paragraph: "愛知県豊橋市 → 千葉県流山市",
    },
  ];

  const skillset: Skill[] = [
    { title: "Swift", bgColor: "bg-orange-500", fontCcolor: "text-white" },
    { title: "SwiftUI", bgColor: "bg-orange-500", fontCcolor: "text-white" },
    { title: "UIKit", bgColor: "bg-orange-500", fontCcolor: "text-white" },
    { title: "TypeScript", bgColor: "bg-blue-500", fontCcolor: "text-white" },
    { title: "Vue.js", bgColor: "bg-green-500", fontCcolor: "text-white" },
    { title: "React", bgColor: "bg-slate-700", fontCcolor: "text-white" },
    { title: "Kotlin", bgColor: "bg-orange-500", fontCcolor: "text-white" },
    { title: "Android", bgColor: "bg-green-500", fontCcolor: "text-white" },
  ];

  const acounts: Account[] = [
    {
      title: "Twitter",
      to: "https://twitter.com/kyotonagoya1476",
      bgColor: "bg-[#1DA1F2]",
      fontCcolor: "text-white",
    },
    {
      title: "Qiita",
      to: "https://qiita.com/kyotonagoya",
      bgColor: "bg-[#55c550]",
      fontCcolor: "text-white",
    },
    {
      title: "GitHub",
      to: "https://github.com/k15015kk",
      bgColor: "bg-[#171515]",
      fontCcolor: "text-white",
    },
    {
      title: "Wantedly",
      to: "https://www.wantedly.com/id/kyotonagoya",
      bgColor: "bg-[#f0f0f0]",
      fontCcolor: "text-black",
    },
  ];

  return (
    <div className="max-w-[720px] p-4 m-auto bg-gray-100 rounded-xl">
      <div className="mx-4">
        {profiles.map((content) => (
          <div className="my-2" key={content.title}>
            <h3 className="my-1 text-gray-900 font-bold">{content.title}</h3>
            <p className="text-gray-900">{content.paragraph}</p>
          </div>
        ))}

        <div className="my-2">
          <h3 className="my-1 text-gray-900 font-bold">スキル</h3>
          <div className="flex flex-wrap">
            {skillset.map((skill) => (
              <span
                className={`block ${skill.bgColor} ${skill.fontCcolor} py-1 px-2 m-1 text-sm rounded`}
                key={skill.title}
              >
                {skill.title}
              </span>
            ))}
          </div>
        </div>

        <div className="my-2">
          <h3 className="my-1 text-gray-900 font-bold">アカウント</h3>
          <div className="flex my-1 flex-wrap">
            {acounts.map((acount) => (
              <Link
                href={acount.to}
                className={`${acount.bgColor} ${acount.fontCcolor} mx-1 my-1 px-3 py-1 font-bold shadow rounded hover:opacity-50`}
                key={acount.title}
              >
                {acount.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
