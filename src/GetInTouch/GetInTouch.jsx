import React, { useState } from "react";
import emailjs from "emailjs-com";

import Heading from "../components/heading/Heading";
import PrimaryButton from "../components/buttons/PrimaryButton";

const GetInTouch = ({ itemRef }) => {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const contactOptions = [
    {
      name: "Phone Number",
      value: "(+91) 9911528925",
      icon: "assets/icons/phone.svg",
    },
    {
      name: "Email",
      value: "07parulverma@gmail.com",
      icon: "assets/icons/mail.svg",
    },
    {
      name: "Location",
      value: "New Delhi, India",
      icon: "assets/icons/location.svg",
    },
  ];

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    const { fullName, message, email } = formData;
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_7h79j2l",
        "template_iwn9rck",
        {
          from_name: fullName,
          message,
          email,
        },
        "4hUSPZA_ROY-Dl_mH"
      )
      .then(() => {
        setMessage("Your message has been received. Thank you !!");
        setFormData({ fullName: "", email: "", message: "" });
      })
      .catch((error) => {
        setMessage("Something went wrong.");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setMessage("");
        }, 5000);
      });
  };

  return (
    <div
      ref={itemRef}
      className="bg-black pt-10 sm:px-28 md:px-28 lg:px-28 xl:px-28 2xl:px-28 items-center flex justify-center flex-col"
    >
      <h6 className="sub-heading">Get in touch</h6>
      <Heading mainHeading="Contact" subHeading="Me" />
      <h3 className="text-white text-center text-base mt-2 font-extralight sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-[500px] mx-auto">
        I am currently open to full-time, contract, or part-time opportunities
        in Frontend Development.
      </h3>

      <div className="bg-[#1d1d1d] m-5 w-[100%] p-10">
        <div className="flex flex-wrap ">
          <div className="basis-1/4 mr-2">
            <h6 className="text-white font-extralight">
              Have an awesome project idea?
            </h6>
            <h6 className="text-purple-500 font-light">Let's Discuss.</h6>
            <div className="mt-10">
              {contactOptions.map(({ icon, name, value }) => (
                <div key={name} className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-white">
                    <img className="p-2" src={icon} alt={name} />
                  </div>
                  <span className="ml-4 font-normal text-sm max-w-[90%] text-ellipsis overflow-hidden hover:text-white text-purple-500">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <form className="w-full flex-1" onSubmit={handleSubmit}>
            <label className="form-label">Full name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter name"
              className="form-field"
              value={formData.fullName}
              onChange={handleChange}
            />
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="form-field"
              value={formData.email}
              onChange={handleChange}
            />
            <label className="form-label">Message</label>
            <textarea
              name="message"
              placeholder="Enter message"
              className="form-field"
              value={formData.message}
              onChange={handleChange}
            />
            <PrimaryButton
              disabled={
                loading ||
                !(formData?.message && formData?.fullName && formData?.email)
              }
              type="submit"
              title="Send Message"
              icon="assets/icons/mail.svg"
            />
            {message && (
              <div className="flex items-center mt-3">
                <img
                  className="w-6 h-6 mr-2 bg-purple-500 rounded-full p-1"
                  src="assets/icons/tick.svg"
                  alt="success"
                />
                <h6 className="text-white text-sm font-normal">{message}</h6>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
