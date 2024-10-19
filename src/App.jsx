import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { Accordian } from "./accordian/Accordian";
import { RandomBg } from "./RandomBg/randomBg";
import Star from "./starRating/Star";
import Imageslider from "./imageslider/Imageslider";

function App() {
  return (
    <>
      <Accordian />
      <RandomBg />
      <Star />
      <Imageslider />
    </>
  );
}

export default App;
