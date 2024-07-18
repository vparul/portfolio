import React from "react";

import Heading from "../heading/Heading";

const Services = ({ itemRef }) => {
  const serviceList = [
    {
      id: 1,
      icon: "assets/icons/code.svg",
      label: "Web Development",
      description:
        "I utilize my expertise in various programming languages and frameworks, including HTML5, CSS3, JavaScript, Tailwind, React, Next.js, Node.js, Java, and Spring Boot, to build comprehensive digital solutions for users.",
    },
    {
      id: 2,
      icon: "assets/icons/ui.svg",
      label: "UI Design",
      description:
        "Crafting user-centeric digital experiences that seemlessly blend aesthetics and functionality. Expert in user centered design and responsive interfaces.",
    },
    {
      id: 3,
      icon: "assets/icons/contentWriting.svg",
      label: "Content Writing",
      description:
        "Weaving impactful narratives and delivering engaging content that resonates with readers. Skillfully combining creativity with research to create compelling pieces.",
    },
  ];
  return (
    <div
      ref={itemRef}
      className="bg-[#131313] pt-10 flex justify-center flex-col items-center"
    >
      <h6 className="sub-heading">Services</h6>
      <Heading mainHeading="What" subHeading="I do" />
      <div className="flex flex-wrap mt-8 mx-16 xl:mx-48 lg:mx-48 md:mx-8 sm:mx-48 2xl:mx-48 justify-between">
        {serviceList?.map(({ id, icon, label, description }) => (
          <div
            key={id}
            className="group bg-neutral-800 min-h-[220px] duration-500 transition-all text-gray-300 py-3 px-5 rounded-md border-purple-400 border w-full sm:w-[48%] md:w-[30%] hover:bg-purple-400 hover:text-black mb-4"
          >
            <span className="text-4xl text-neutral-700 block text-end">
              0{id}
            </span>
            <img
              src={icon}
              alt={label}
              className="group-hover:invert w-4 h-4"
            />
            <h6 className="text-md py-3 truncate">{label}</h6>
            <hr className="border-gray-500 w-1/4" />
            <p className="pt-2 pr-2 text-[12px] leading-5 overflow-hidden">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
