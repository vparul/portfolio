import React from "react";

import Heading from "../components/heading/Heading";
import PrimaryButton from "../components/buttons/PrimaryButton";

import { resumeLink } from "../utils/commonUtils";

const Bio = ({ itemRef }) => {
  const navigateToResume = () => window.open(resumeLink, "_blank");

  return (
    <div
      ref={itemRef}
      className="bg-[#1d1d1d] pt-10 flex justify-center flex-col items-center"
    >
      <h6 className="sub-heading">My Bio</h6>
      <Heading mainHeading="About" subHeading="Me" />
      <div className="flex flex-wrap m-10 mx-40 justify-center">
        <div className="border-purple-500 mr-1 p-5 md:p-10 border-[0.2px] rounded-full h-full mb-4">
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 max-w-full max-h-full border-purple-500 border-[0.2px] rounded-full"
            src="assets/images/profilePicture.png"
            alt="profile"
          />
        </div>

        <div className="text-zinc-300 flex-1 text-sm 2xl:ml-20 xl:ml-20 lg:ml-10 md:ml-10 sm:ml-10">
          <p className="w-11/12">
            Back in 2019, I started creating custom websites for local
            businesses and quickly fell in love with coding and design. What
            started as a side project quickly turned into a passion, as I became
            captivated by the endless possibilities of coding and design. Since
            then, I've built and optimized software for a
            <a className="text-purple-500" href="https://www.sunking.com/">
              {" "}
              B2C app
            </a>
            ,{" "}
            <a className="text-purple-500" href="https://www.venuemonk.com/">
              a venue booking service
            </a>
            ,{" "}
            <a href="https://app.combitime.com/login" className="text-purple-500">
              an ERP product{" "}
            </a>
            , and
            <a className="text-purple-500" href="https://voxpopuliresearch.com/">
              {" "}
              a reseach company
            </a>
            . These experiences have deepened my understanding of various
            industries and technologies, allowing me to tackle diverse
            challenges and create impactful solutions.
          </p>

          <p className="mt-8 w-11/12">
            Now at {" "}
            <a className="text-purple-500" href="https://incruiter.com/">
              Sun King
            </a>
            ,  I achieved significant cost savings through the development of enterprise CRM systems, analytics dashboards, contract applications, and customer CRM systems.
            </p>

          <p className="mt-8 w-11/12">
          In addition to my professional endeavors, I've contributed to innovative university projects like a Flipkart clone and a customizable video player, demonstrating my commitment to pushing boundaries in web development. When I'm not immersed in coding, you'll find me pursuing my passions for hiking, exploring new cultures, gaming, spending quality time with family, and savoring culinary delights from diverse cultures.
          </p>
          <div className="text-black mt-10">
            <PrimaryButton
              title="View Resume"
              icon="/assets/icons/resume.svg"
              onClick={navigateToResume}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
