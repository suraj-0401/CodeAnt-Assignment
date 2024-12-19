export default function UserProfile({ username }) {
  return (
    <button className="flex gap-2 items-center px-3 py-2 w-full bg-white rounded-lg border border-solid shadow-sm border-zinc-300 hover:bg-gray-50 transition-colors duration-200">
      <span className="flex-1 shrink gap-2 self-stretch my-auto text-left">
        {username}
      </span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/769c88639eabdc956d7d857bcf37573700c279f13600c220a0dc4ba526652af6?apiKey=abd0b886fd954ea3a158a45ec55f184b&"
        alt="Toggle menu"
        className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-[1.75]"
      />
    </button>
  );
}
