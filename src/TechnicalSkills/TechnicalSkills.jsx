import React from "react";

import Heading from "../components/heading/Heading";

const TechnicalSkills = () => {
  const skills = [
    { name: "JavaScript", isProgramming: true },
    { name: "Typescript", isProgramming: true },
    { name: "HTML", isProgramming: true },
    { name: "CSS", isProgramming: true },
    { name: "GraphQL", isProgramming: true },
    { name: "Java", isProgramming: true },
    { name: "Python", isProgramming: true },
    { name: "React", isLibraryOrFramework: true },
    { name: "Next.js", isLibraryOrFramework: true },
    { name: "Node.js", isLibraryOrFramework: true },
    { name: "React Native", isLibraryOrFramework: true },
    { name: "Tailwind CSS", isLibraryOrFramework: true },
    { name: "Styled Components", isLibraryOrFramework: true },
    { name: "Redux", isLibraryOrFramework: true },
    { name: "Material UI", isLibraryOrFramework: true },
    { name: "Django", isLibraryOrFramework: true },
    { name: "SpringBoot", isLibraryOrFramework: true },
    { name: "Git", isToolOrPlatform: true },
    { name: "Github", isToolOrPlatform: true },
    { name: "Netlify", isToolOrPlatform: true },
    { name: "Vercel", isToolOrPlatform: true },
    { name: "Heroku", isToolOrPlatform: true },
    { name: "Firebase", isToolOrPlatform: true },
    { name: "Storybook", isToolOrPlatform: true },
    { name: "Webpack", isToolOrPlatform: true },
    { name: "Figma", isToolOrPlatform: true },
    { name: "Vite", isToolOrPlatform: true },
  ];

  const getBorderRadius = ({
    isProgramming = false,
    isLibraryOrFramework = false,
  }) => {
    if (isProgramming) return "rounded-md";
    else if (isLibraryOrFramework) return "rounded-xl";
    return "rounded-3xl";
  };

  return (
      <div className="bg-[#1d1d1d] pt-10 px-28 items-center flex justify-center flex-col">
        <h6 className="sub-heading">Skills</h6>
        <Heading mainHeading="Technical" subHeading="Skills" />
        <div className="flex flex-wrap">
          {skills
            .sort(() => Math.random() - 0.5)
            .map((skill) => (
              <div
              key={skill.name}
                className={`text-sm duration-500 transition-all border-purple-500 border-2 bg-neutral-800 flex items-center justify-center px-8 py-2 m-3 text-white hover:text-black hover:bg-purple-500 ${getBorderRadius(
                  skill
                )}`}
              >
                {skill.name}
              </div>
            ))}
        </div>
      </div>
  );
};

export default TechnicalSkills;
