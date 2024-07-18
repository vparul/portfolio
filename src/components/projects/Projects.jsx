import React from "react";
import Heading from "../heading/Heading";

const Projects = ({ itemRef }) => {
  const projectList = [
    {
      name: "Sun King",
      img: "assets/images/sunking.png",
      link: "https://sunking.com/",
      description: "Sun King designs, distributes, installs, and finances solar energy solutions for the 1.8 billion global consumers who cannot reliably access or afford traditional electrical grid connections. Sun King is the leading off-grid solar provider globally, powering over 20 million homes in more than 40 countries across the globe."
    },
    {
      name: "Select10x",
      img: "assets/images/select10x.png",
      link: "https://www.select10x.com/",
      description:
        "Select10X Assessments & Skilling Pvt Ltd, an AI Digital platform, is a pioneer in transforming the recruitment landscape. Our platform, backed by HR industry investors, empowers employers and candidates by making the hiring process more efficient and effective.",
    },
    {
      name: "Bureau",
      img: "assets/images/bureau.png",
      link: "https://www.bureau.id/",
      description:
        "Bureau is a no-code, identity decisioning platform that offers businesses the complete range of risk, compliance and ongoing fraud monitoring solutions innovated with AI.",
    },
    {
      name: "Ant Creatives",
      img: "assets/images/antCreatives.jpeg",
      link: "https://antcreatives.com/",
      description:
        "We, at AntCreatives, are a passionate bunch of people working in software development. AntCreatives Online Services is a Full Stack Development firm with speciality in developing applications.",
    },
    {
      name: "VenueMonk",
      img: "assets/images/venueMonk.jpeg",
      link: "https://www.venuemonk.com/",
      description:
        "VenueMonk.com is an online venue booking portal with the widest range of venues available in Delhi NCR, Gurgaon, Noida, Faridabad, and Ghaziabad.",
    },
    {
      name: "CombiTime",
      img: "assets/images/combiTime.png",
      link: "https://app.combitime.com/",
      description:
        "CombiTime is an innovative software platform that streamlines energy management and optimization for businesses."
    },
    {
      name: "Vox Populi Research",
      img: "assets/images/voxPopuli.jpeg",
      link: "https://voxpopuliresearch.com/",
      description:
        "Vox Populi Research is a market research agency, specialising in Qualitative and Quantitative Research.",
    },
    {
      name: "Book Club",
      img: "assets/images/bookClub.png",
      link: "https://new-book-club.netlify.app/",
      description:
        "Explore, buy, and filter books by author while diving into references with ease on our dynamic book club e-commerce platform.",
    },
    {
      name: "Class Booking",
      img: "assets/images/classBooking.jpg",
      link: "https://class-booking-app.netlify.app/",
      description:
        "Effortlessly schedule your tuition classes based on available slots and timings through our intuitive class booking service.",
    },
    {
      name: "Flipkart Clone",
      img: "assets/images/flipkart.png",
      link: "https://flipkart-clone-angular.netlify.app/",
      description:
        "A Flipkart clone is a replica of the Flipkart e-commerce platform, offering similar features and functionalities for online shopping and selling.",
    },
  ];
  return (
    <div
      ref={itemRef}
      className="bg-[#131313] pt-10 flex justify-center flex-col items-center"
    >
      <h6 className="sub-heading">Portfolio</h6>
      <Heading mainHeading="Organisations" subHeading="& Projects" />
      <div className="flex flex-wrap gap-10 mx-16 xl:mx-44 lg:mx-44 md:mx-8 sm:mx-8 2xl:mx-44">
        {projectList?.map(({ name, img, link, description }) => (
          <div
            className="my-5 flex items-start flex-col cursor-pointer w-full md:[30%] sm:w-[17%] transition-all duration-500 hover:opacity-60"
            key={name}
            onClick={() => window.open(link, "_blank")}
          >
            <div className="border-[0.5px] border-purple-500 rounded-lg p-5 bg-zinc-800 w-full">
              <img className="rounded-lg w-full h-full bg-white p-5 aspect-square" src={img} alt={name} />
            </div>
            <div className="flex flex-col mt-3">
              <h5 className="text-white text-md">{name}</h5>
              <h6 className="text-zinc-500 text-sm w-4/5 mt-2 leading-5">
                {description}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
