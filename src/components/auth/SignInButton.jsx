import * as React from "react";

function SignInButton({ icon, text, onClick }) {
  return (
    <button
      className="flex gap-4 justify-center items-center px-20 py-4 w-full bg-white rounded-lg border border-gray-300 border-solid max-md:px-5 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      onClick={onClick}
      aria-label={text}
      tabIndex="0"
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
        aria-hidden="true"
      />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
}

export default SignInButton;
