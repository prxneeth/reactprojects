import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { Accordian } from "./accordian/Accordian";
import { RandomBg } from "./RandomBg/randomBg";
import Star from "./starRating/Star";

function App() {
  return (
    <>
      <Accordian />
      <RandomBg />
      <Star />
    </>
  );
}

export default App;
