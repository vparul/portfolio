import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { navBarItems, resumeLink } from "../../utils/commonUtils";

const NavigationBar = ({ itemRefs }) => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const scrollItemToView = (id) =>
    itemRefs?.current?.[id - 1]?.current?.scrollIntoView({
      behavior: "smooth",
    });

  const navigateToResume = () =>
    window.open(resumeLink, "_blank");

  return (
    <>
      <div className="p-4">
        <div className="hidden md:flex justify-end items-center">
          <ul className="flex flex-row space-x-8">
            {navBarItems.map(({ label, id }, index) => (
              <li
                key={label}
                className={`flex justify-center pb-1 hover:text-purple-500 transition-all duration-500 text-sm font-light cursor-pointer relative text-white group ${
                  index === navBarItems.length - 1 ? "pr-6" : ""
                }`}
                onClick={() => scrollItemToView(id)}
              >
                {label}
                <span className="absolute bottom-0 left-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-500"></span>
              </li>
            ))}
          </ul>
          <PrimaryButton
            title="View Resume"
            icon="/assets/icons/resume.svg"
            onClick={navigateToResume}
          />
        </div>
        <div className="md:hidden flex justify-end items-center">
          <button
            className="text-white text-xl p-3 focus:outline-none"
            onClick={toggleNavigation}
          >
            {showNavigation ? "✕" : "☰"}
          </button>
        </div>
        {showNavigation && (
          <ul className="md:hidden flex flex-col justify-end items-center px-4 md:px-12 py-6 md:p-0 space-y-4 md:space-y-0 md:space-x-8">
            {navBarItems.map(({ label, id }) => (
              <li
                key={label}
                className="flex justify-center pb-1 hover:text-purple-500 transition-all duration-500 text-sm font-light cursor-pointer relative text-white group"
                onClick={() => scrollItemToView(id)}
              >
                {label}
                <span className="absolute bottom-0 left-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-500"></span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavigationBar;
