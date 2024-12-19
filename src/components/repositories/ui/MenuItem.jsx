export default function MenuItem({ icon, label, isActive }) {
  return (
    <button
      className={`flex overflow-hidden items-center py-0.5 w-full transition-colors duration-200 ease-in-out ${
        isActive ? "text-white" : "hover:bg-gray-50"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <div
        className={`flex flex-1 shrink gap-3 items-center self-stretch px-3 py-2 my-auto w-full rounded-md basis-0 ${
          isActive ? "bg-blue-600" : "bg-white"
        }`}
      >
        <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0">
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto">{label}</span>
        </div>
      </div>
    </button>
  );
}
