import React from "react";

interface Props {
  title: string;
  bgColor?: string;
  onClick?: any;
}
const Button = ({ bgColor = "#fd6b6b", title, onClick }: Props) => {
  const buttonStyle = {
    background: bgColor,
    padding: ".75rem",
    borderRadius: "5px",
    outline: "none",
    border: `1px solid ${bgColor}`,
    margin: "0 .25rem 0 0 ",
    fontSize: "14px",
    color: "white",
    cursor: "pointer"
  };
  return (
    <button style={buttonStyle} onClick={onClick} className="button">
      {title}
    </button>
  );
};

export default Button;
