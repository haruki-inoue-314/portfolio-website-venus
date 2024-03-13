import SelfIntroduction from "@/components/SelfIntroduction";

export default function Home() {
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
          <p className="mt-1 mb-4">
            iOSアプリエンジニア ときどき Webフロントエンジニア
          </p>
        </div>

        <SelfIntroduction />
      </main>
    </div>
  );
}
