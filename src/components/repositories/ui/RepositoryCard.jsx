export default function RepositoryCard({
  name,
  visibility,
  language,
  size,
  lastUpdate,
  isHighlighted,
}) {
  return (
    <div
      className={`flex flex-col justify-center items-start py-6 w-full border-b border-zinc-300 transition-colors duration-200 ${
        isHighlighted ? "bg-neutral-100" : "hover:bg-gray-50"
      }`}
    >
      <div className="flex flex-col px-6 w-full">
        <div className="flex flex-wrap gap-2 justify-start items-center">
          <h3 className="text-xl font-medium leading-tight text-gray-900">
            {name}
          </h3>
          <span className="inline-flex px-2.5 py-0.5 text-sm leading-none text-blue-700 bg-sky-50 rounded-full border border-sky-200">
            {visibility}
          </span>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-10 items-start mt-3 text-base text-gray-900">
          <div className="flex gap-2 items-center whitespace-nowrap">
            <span>{language}</span>
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
          </div>
          <div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/93173ae13f6fd4d3ac7d1c084719020b99ca7ff71b107ad7729045de14858aff?apiKey=abd0b886fd954ea3a158a45ec55f184b&"
              alt=""
              className="w-[11px] aspect-[0.92]"
            />
            <span>{size}</span>
          </div>
          <div>Updated {lastUpdate}</div>
        </div>
      </div>
    </div>
  );
}
