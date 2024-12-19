import { useState } from "react";
import { repositories } from "./data/RepositoryData";
import Sidebar from "./layout/Sidebar";
import SearchBar from "./ui/SearchBar";
import ActionButton from "./ui/ActionButton";
import RepositoryCard from "./ui/RepositoryCard";

  function RepositoryView() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex overflow-hidden flex-wrap items-center bg-white min-h-screen">
      {isMobileMenuOpen && <Sidebar />}

      <button
        className="md:hidden fixed top-4 left-4 z-40 p-2 bg-white rounded-lg shadow-lg"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="hidden md:flex">
        <Sidebar />
      </div>

      <main className="flex flex-col flex-1 shrink justify-center self-stretch p-4 md:p-6 my-auto basis-0 bg-neutral-50 min-h-screen min-w-[240px]">
        <div className="flex overflow-hidden flex-col flex-1 w-full bg-white rounded-xl border border-gray-200 shadow-sm">
          <header className="flex flex-col w-full bg-white border-b border-gray-200">
            <div className="flex flex-col px-4 md:px-6 py-5 w-full">
              <div className="flex flex-wrap justify-between items-center gap-4 w-full">
                <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
                  <h1 className="text-2xl font-semibold leading-none text-gray-900">
                    Repositories
                  </h1>
                  <p className="mt-1 text-sm leading-none text-gray-700">
                    33 total repositories
                  </p>
                </div>
                <div className="flex gap-3 items-center self-stretch my-auto text-sm leading-none min-w-[240px] flex-wrap">
                  <ActionButton
                    icon="https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/a8bcc0d7f220a77bea9c3ed56bfb915ac13e836359b468cdfba6e82902f6b5b9?apiKey=abd0b886fd954ea3a158a45ec55f184b&"
                    label="Refresh All"
                  />
                  <ActionButton
                    icon="https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/1229585b39434356c145e4a484dbabf3ec334454f8f3f73e8f6539a7d12e903b?apiKey=abd0b886fd954ea3a158a45ec55f184b&"
                    label="Add Repository"
                    variant="primary"
                  />
                </div>
              </div>
              <SearchBar />
            </div>
          </header>

          <section className="flex flex-1 items-start size-full">
            <div className="flex flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px]">
              {repositories.map((repo, index) => (
                <RepositoryCard
                  key={repo.name}
                  {...repo}
                  isHighlighted={index === 1}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RepositoryView;