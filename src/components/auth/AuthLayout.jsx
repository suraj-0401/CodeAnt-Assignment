import * as React from "react";
import SignInCard from "./SignInCard";

function AuthLayout() {
  const [activeDesktopTab, setActiveDesktopTab] = React.useState("self-hosted");
  const [activeMobileTab, setActiveMobileTab] = React.useState("saas");

  const desktopButtons = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/f60880cf8249b0a829cc15ac5ec4bba36aea5462033e4331248eab37a93e5d35?apiKey=abd0b886fd954ea3a158a45ec55f184b&",
      text: "Self Hosted GitLab",
      provider: "gitlab-self",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/e02b2b49feb4018157c950f24efac0d2a075d8862308c7a238960c3cd1ace332?apiKey=abd0b886fd954ea3a158a45ec55f184b&",
      text: "Sign in with SSO",
      provider: "sso",
    },
  ];

  const mobileButtons = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/d75d836c0755ee30eadc038bba0b90be2c42e7194a54fc9b3c78cd36736c3e4d?apiKey=abd0b886fd954ea3a158a45ec55f184b&",
      text: "Sign in with Github",
      provider: "github",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/a73e7b0075d42ce81f92907c46d482044c647ff4e9883bbeee3afc76515bd724?apiKey=abd0b886fd954ea3a158a45ec55f184b&",
      text: "Sign in with Bitbucket",
      provider: "bitbucket",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/e47c4224c5c0bf7ef8854b60ba578e49ab3aef80959feddd53747c3e2b8e9fde?apiKey=abd0b886fd954ea3a158a45ec55f184b&",
      text: "Sign in with Azure Devops",
      provider: "azure",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/ac5d46a1036b5fe764e68a78dc9c2b24e5016fc0375d04d97423829e657ad3a0?apiKey=abd0b886fd954ea3a158a45ec55f184b&",
      text: "Sign in with GitLab",
      provider: "gitlab",
    },
  ];

  const handleSignIn = (provider) => {
    console.log(`Signing in with ${provider}`);
  };

  return (
    <div className="flex flex-wrap gap-10">
      {/* Desktop Version */}
      <div className="w-full lg:block hidden">
        <div className="text-6xl font-semibold text-white leading-[88px] max-md:text-4xl max-md:leading-[61px]">
          Desktop Version
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-wrap w-full bg-white h-[865px] max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/abd0b886fd954ea3a158a45ec55f184b/056fcea3f63486f5f33a513193b8d77e4016ae425988243421f922a7b164df1f?apiKey=abd0b886fd954ea3a158a45ec55f184b&"
                alt="Desktop version illustration"
                className="object-contain aspect-[0.83] min-w-[240px] w-[720px] max-md:max-w-full"
              />
              <div className="flex flex-col flex-1 shrink justify-center px-6 py-24 my-auto basis-0 bg-neutral-50 min-h-[960px] min-w-[240px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                <SignInCard
                  buttons={desktopButtons}
                  activeTab={activeDesktopTab}
                  onTabChange={setActiveDesktopTab}
                  onSignIn={handleSignIn}
                  isMobile={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="w-full lg:hidden block">
        <div className="text-6xl font-semibold text-white leading-[88px] max-md:text-4xl max-md:leading-[61px]">
          Mobile Version
        </div>
        <div className="flex overflow-hidden flex-col mt-2.5 ml-2.5 bg-neutral-50 min-h-[800px]">
          <div className="flex flex-col flex-1 justify-center px-4 py-6 w-full bg-neutral-50">
            <SignInCard
              buttons={mobileButtons}
              activeTab={activeMobileTab}
              onTabChange={setActiveMobileTab}
              onSignIn={handleSignIn}
              isMobile={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
