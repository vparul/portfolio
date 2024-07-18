import React, { createRef, useRef } from "react";

import NavigationBar from "../../components/navigationBar/NavigationBar";
import Services from "../../components/services/Services";
import Heading from "../../components/heading/Heading";
import Projects from "../../components/projects/Projects";
import Bio from "../../Bio/Bio";
import TechnicalSkills from "../../TechnicalSkills/TechnicalSkills";
import GetInTouch from "../../GetInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";

import { navBarItems } from "../../utils/commonUtils";

export const LandingPage = () => {
  const socialLinks = [
    {
      name: "Gmail",
      icon: "assets/icons/gmail.svg",
    },
    {
      name: "LinkedIn",
      icon: "assets/icons/linkedIn.svg",
      link: "https://www.linkedin.com/in/parul-verma-pv14/",
    },
    {
      name: "Twitter",
      icon: "assets/icons/twitter.svg",
      link: "https://twitter.com/vermaparul14",
    },
    {
      name: "Github",
      icon: "assets/icons/github.svg",
      link: "https://github.com/vparul",
    },
  ];

  const navRefs = useRef(navBarItems.map(() => createRef(null)));

  const navigateToSocialLinks = ({ name, link }) => {
    if (name === "Gmail")
      return (window.location = "mailto:07parulverma@gmail.com");
    return window.open(link, "_blank");
  };

  return (
    <>
      <div className="pb-10">
        <NavigationBar itemRefs={navRefs} />
        <div className="h-full flex items-center flex-col justify-center text-white mt-10 mb-10">
          <Heading mainHeading="Hi, I am" subHeading="Parul Verma" />
          <div className="w-1/2 text-center text-md font-light text-zinc-300">
            An experienced{" "}
            <span className="text-purple-400 font-medium">
               Frontend Developer
            </span>{" "}
            crafting innovative digital solutions from concept to reality. Let's
            embark on an exciting journey of innovation together!
          </div>
        </div>
        <div className="flex items-center justify-center">
          {socialLinks?.map(({ name, icon, link }) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-full bg-white w-10 h-10 mr-5 hover:bg-purple-500 transition-all duration-500 cursor-pointer"
              onClick={() => navigateToSocialLinks({ name, link })}
            >
              <img src={icon} alt={name} className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
      <Services />
      <Projects itemRef={navRefs.current[0]} />
      <Bio itemRef={navRefs.current[1]} />
      <TechnicalSkills />
      <GetInTouch itemRef={navRefs.current[2]} />
      <Footer />
    </>
  );
};
