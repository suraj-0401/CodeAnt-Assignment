import { useState } from "react";
import { menuItems, footerItems } from "../data/RepositoryData";
import MenuItem from "../ui/MenuItem";
import UserProfile from "../ui/UserProfile";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className={`${
        isMobileMenuOpen ? "fixed inset-0 z-50 bg-white" : "hidden md:flex"
      } self-stretch my-auto bg-white border-r border-gray-200 min-h-[960px] min-w-[240px] w-[242px]`}
    >
      <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px]">
        <div className="flex flex-col pt-6 w-full">
          <div className="flex justify-between items-center px-5">
            <div className="flex gap-3 items-center self-start text-2xl leading-none text-gray-900">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/79d4891dfdd616dafb2053d14f46382dc859349911973c60dacc81f8db0601e8?apiKey=abd0b886fd954ea3a158a45ec55f184b&"
                alt="CodeAnt AI Logo"
                className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[0.87]"
              />
              <div className="self-stretch my-auto">CodeAnt AI</div>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col px-5 mt-5">
            <UserProfile username="UtkarshDhairyaPanwar" />
          </div>

          <nav className="flex flex-col px-4 mt-4 w-full text-base font-semibold leading-6 text-gray-700">
            {menuItems.map((item) => (
              <MenuItem key={item.label} {...item} />
            ))}
          </nav>
        </div>

        <div className="flex flex-col px-4 pb-6 w-full text-base font-semibold leading-6 text-gray-700 whitespace-nowrap mt-[492px] max-md:mt-10">
          {footerItems.map((item) => (
            <MenuItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
