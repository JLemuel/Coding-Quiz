import React, { useState } from "react";

const Button = () => {
  const [size, setSize] = useState(1);

  const [color, setColor] = useState("red");

  const clickButtonDoubleInSize = () => {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const newSize = size + 1;

    setSize(newSize);
    setColor(newColor);

    console.log(color);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <button
        onClick={() => clickButtonDoubleInSize()}
        className="shadow-xl rounded-md hover:shadow-none"
        style={{
          backgroundColor: color,
          color: "white",
          padding: size + "em",
          fontSize: "12px",
        }}
      >
        stop
      </button>
    </div>
  );
};

export default Button;
