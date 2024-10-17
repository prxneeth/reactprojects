import React, { useState } from "react";

export const RandomBg = () => {
  const [type, setType] = useState("");
  const [color, setColor] = useState("pink");

  function randomNum(length) {
    return Math.floor(Math.random() * length);
  }

  function hexClick() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcode = "#";

    for (let i = 0; i < 6; i++) {
      hexcode += hex[randomNum(hex.length)];
    }
    setColor(hexcode);
  }

  function rbgClick() {
    const r = randomNum(256);
    const g = randomNum(256);
    const b = randomNum(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      style={{
        backgroundColor: color,

        alignItems: "center",
        display: "flex",
        flexDirection: "column",

        justifyContent: "",

        minHeight: "100vh",

        padding: "10px",
        width: "50%",
      }}
    >
      <div className="flex justify-center">
        {" "}
        <button
          className={`border border-black w-full ${
            type === "hex" ? "bg-gray-300" : ""
          } `}
          onClick={() => setType("hex")}
        >
          hex
        </button>
        <button
          className={`border border-black w-full ${
            type === "rgb" ? "bg-gray-300" : ""
          }`}
          onClick={() => setType("rgb")}
        >
          rgb
        </button>
        <button
          className="border border-black w-full  "
          onClick={type === "hex" ? () => hexClick() : () => rbgClick()}
        >
          {" "}
          Change Color{" "}
        </button>
      </div>

      <p>{color}</p>
    </div>
  );
};
