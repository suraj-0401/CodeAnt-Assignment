import * as React from "react";
import SignInButton from "./SignInButton";
import VersionToggle from "./VersionToggle";

function SignInCard({ buttons, activeTab, isMobile, onTabChange, onSignIn }) {
  return (
    <div className="flex overflow-hidden flex-col w-full bg-white rounded-xl border border-gray-200 border-solid shadow-sm">
      <div
        className={`flex flex-col ${
          isMobile ? "px-4" : "pl-6"
        } py-9 w-full border-b border-zinc-300`}
      >
        <div className="flex flex-col justify-center items-center w-full text-gray-900">
          <div className="flex gap-3.5 items-center text-3xl leading-none">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/0f15c6857425cc8df30c22ee2e2a86ad4ad8ff73d5a168a06ac65ce3682893ac?apiKey=abd0b886fd954ea3a158a45ec55f184b&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-9 aspect-[0.9]"
              aria-hidden="true"
            />
            <div className="self-stretch my-auto">CodeAnt AI</div>
          </div>
          <h1
            className={`mt-${isMobile ? "6" : "9"} text-${
              isMobile ? "2xl" : "3xl"
            } font-semibold ${isMobile ? "leading-10" : ""}`}
          >
            Welcome to CodeAnt AI
          </h1>
        </div>
        <VersionToggle activeTab={activeTab} onTabChange={onTabChange} />
      </div>
      <div
        role="tabpanel"
        id={`${activeTab}-panel`}
        aria-labelledby={`${activeTab}-tab`}
        className="flex items-start w-full text-base font-semibold bg-white text-neutral-900"
      >
        <div
          className={`flex flex-col flex-1 shrink justify-center ${
            !isMobile ? "items-center" : ""
          } py-6 w-full basis-0 min-w-[240px]`}
        >
          {buttons.map((button, index) => (
            <div key={index} className={index > 0 ? "mt-4" : ""}>
              <SignInButton
                icon={button.icon}
                text={button.text}
                onClick={() => onSignIn(button.provider)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SignInCard;
