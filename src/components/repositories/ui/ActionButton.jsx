export default function ActionButton({ icon, label, variant = "secondary" }) {
  return (
    <button
      className={`
        flex overflow-hidden gap-1 justify-center items-center self-stretch px-3.5 py-2.5 my-auto rounded-lg border border-solid shadow-sm transition-colors duration-200
        ${
          variant === "primary"
            ? "text-white bg-blue-600 hover:bg-blue-700 border-white border-opacity-10"
            : "text-gray-700 bg-white hover:bg-gray-50 border-zinc-300"
        }
      `}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <span className="self-stretch px-0.5 my-auto">{label}</span>
    </button>
  );
}
