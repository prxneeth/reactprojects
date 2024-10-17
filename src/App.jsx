import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { Accordian } from "./accordian/Accordian";
import { RandomBg } from "./RandomBg/randomBg";

function App() {
  return (
    <>
      <Accordian />
      <RandomBg />
    </>
  );
}

export default App;
