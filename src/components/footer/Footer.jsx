import React from "react";

const Footer = () => (
  <div className="mt-3 py-4 flex justify-center flex-col items-center border-t-[0.5px] border-zinc-700">
    <h6 className="text-zinc-500 text-xs">
      Coded in <span className="text-purple-500">Visual Studio Code</span> by
      yours truly. Built with <span className="text-purple-500">React</span> and{" "}
      <span className="text-purple-500">Tailwind CSS</span>, deployed with{" "}
      <span className="text-purple-500">Netlify</span>.
    </h6>
  </div>
);

export default Footer;
