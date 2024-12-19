export default function SearchBar() {
  return (
    <div className="flex overflow-hidden gap-1 items-center px-3.5 py-2.5 mt-4 max-w-full text-base leading-none text-gray-700 bg-white rounded-lg border border-solid shadow-sm border-zinc-300 w-[366px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/e4b1b07ae2c2bc7ead970984ace0e3fdc94a1efe3d2f7b455b486121e4c86e71?apiKey=abd0b886fd954ea3a158a45ec55f184b&"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <input
        type="search"
        placeholder="Search Repositories"
        aria-label="Search Repositories"
        className="self-stretch px-0.5 my-auto w-full bg-transparent border-none outline-none placeholder-gray-500"
      />
    </div>
  );
}
