import * as React from "react";

function VersionToggle({ activeTab, onTabChange }) {
  return (
    <div
      className="flex flex-wrap gap-0.5 items-center mt-5 w-full text-xl font-semibold leading-snug rounded-lg border border-gray-200 border-solid bg-neutral-50"
      role="tablist"
      aria-label="Authentication options"
    >
      {/* SAAS Button */}
      <button
        role="tab"
        aria-selected={activeTab === "saas"}
        aria-controls="saas-panel"
        className={`overflow-hidden flex-1 shrink gap-2 self-stretch px-3 py-4 my-auto whitespace-nowrap rounded-lg min-w-[240px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
          activeTab === "saas"
            ? "text-white bg-blue-600 shadow-[0px_1px_2px_rgba(10,13,18,0.05)]"
            : "text-gray-700 hover:bg-gray-50"
        }`}
        onClick={() => onTabChange("saas")}
      >
        SAAS
      </button>

      {/* Self Hosted Button */}
      <button
        role="tab"
        aria-selected={activeTab === "self-hosted"}
        aria-controls="self-hosted-panel"
        className={`overflow-hidden flex-1 shrink gap-1 self-stretch px-3.5 py-4 my-auto whitespace-nowrap rounded-lg min-w-[240px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
          activeTab === "self-hosted"
            ? "text-white bg-blue-600 shadow-[0px_1px_2px_rgba(10,13,18,0.05)]"
            : "text-gray-700 hover:bg-gray-50"
        }`}
        onClick={() => onTabChange("self-hosted")}
      >
        Self Hosted
      </button>
    </div>
  );
}

export default VersionToggle;
