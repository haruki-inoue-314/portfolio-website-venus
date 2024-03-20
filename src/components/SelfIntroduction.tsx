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

  const skillset: Skill[] = [
    { title: "Swift", bgColor: "bg-amber-800", fontCcolor: "text-white" },
    { title: "SwiftUI", bgColor: "bg-amber-800", fontCcolor: "text-white" },
    { title: "UIKit", bgColor: "bg-amber-800", fontCcolor: "text-white" },
    { title: "TypeScript", bgColor: "bg-slate-800", fontCcolor: "text-white" },
    { title: "Vue.js", bgColor: "bg-slate-800", fontCcolor: "text-white" },
    { title: "React", bgColor: "bg-slate-800", fontCcolor: "text-white" },
    { title: "Kotlin", bgColor: "bg-slate-800", fontCcolor: "text-white" },
    { title: "Android", bgColor: "bg-slate-800", fontCcolor: "text-white" },
  ];

  return (
    <div className="max-w-[720px] p-4 m-auto bg-gray-100 rounded-xl">
      <div className="mx-4">
        <div className="my-2">
          <h3 className="my-1 text-gray-900 font-bold">すまい</h3>
          <p className="text-gray-900">愛知県豊橋市→千葉県流山市</p>
        </div>

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
      </div>
    </div>
  );
}
