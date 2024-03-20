type Props = {
  thumbnail: string;
  title: string;
  abstract: string;
  link: string;
};

export default function PortfolioItem({
  thumbnail,
  title,
  abstract,
  link,
}: Props) {
  return (
    <div className="w-[320px] bg-slate-50 m-2 rounded shadow hover:opacity-50">
      <a href={link}>
        <div className="w-[320px] h-[180px]">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div>
          <h1 className="font-bold text-xl text-gray-900 mx-2 my-3 ">
            {title}
          </h1>
          <p className="text-gray-900 mx-2 my-3">{abstract}</p>
        </div>
      </a>
    </div>
  );
}
