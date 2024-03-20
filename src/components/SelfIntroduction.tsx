import fs from "fs";
import remarkGfm from "remark-gfm";
import ReactMarkdwon from "react-markdown";

export default function SelfIntroduction() {
  const profile = fs.readFileSync(
    process.cwd() + "/src/docs/profile.md",
    "utf8"
  );

  return (
    <div className="max-w-[960px] px-4 py-2 m-auto bg-gray-100 rounded-xl">
      <div className="mx-4">
        <ReactMarkdwon
          remarkPlugins={[remarkGfm]}
          skipHtml={true}
          className="markdown"
        >
          {profile}
        </ReactMarkdwon>
      </div>
    </div>
  );
}
