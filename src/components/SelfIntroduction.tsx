export default function SelfIntroduction() {
  const profiles: [
    {
      title: string;
      paragraph: string;
    }
  ] = [
    {
      title: "居住地",
      paragraph: "千葉県流山市",
    },
    {
      title: "出身",
      paragraph: "愛知県豊橋市",
    },
    {
      title: "職業",
      paragraph: "iOSアプリエンジニア 時々 Webフロントエンジニア",
    },
  ];

  return (
    <div className="max-w-[640px] m-auto bg-gray-50 shadow rounded p-4">
      <div className="flex">
        <div className="py-2 px-4 basis-24">
          <img
            src="identity_icon.png"
            alt="さんてんいちよんのアイデンティティアイコン"
            className="w-auto h-auto border rounded-full shadow"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold pt-2 pb-4">さんてんいちよん</h2>
          {profiles.map((content) => (
            <div className="flex py-1 px-2" key={content.title}>
              <h3 className="font-bold w-16 pe-2">{content.title}</h3>
              <p>{content.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
