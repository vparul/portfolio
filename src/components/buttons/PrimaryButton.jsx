import React from "react";

const PrimaryButton = ({
  type = "button",
  title,
  icon,
  disabled,
  onClick = () => {},
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="bg-purple-400 w-40 h-10 rounded flex text-sm transition-all duration-500 hover:bg-white items-center justify-center disabled:opacity-50"
      onClick={onClick}
    >
      {title}
      {icon && <img src={icon} alt={title} className="w-7 pl-2" />}
    </button>
  );
};

export default PrimaryButton;
