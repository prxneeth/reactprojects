import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { Accordian } from "./accordian/Accordian";
import { RandomBg } from "./RandomBg/randomBg";
import Star from "./starRating/Star";
import Imageslider from "./imageslider/Imageslider";
import LoadProds from "./loadproducts/LoadProds";

import Menu from "./menuTree/menu";
import menus from "./menuTree/data";
import QRgenerator from "./qrcode/QRgenerator";
import Darkmode from "./darkMode/Darkmode";
import IndicatorScroll from "./scroll_Indicator/IndicatorScroll";
import TabsTests from "./tabs/TabsTests";

function App() {
  return (
    <>
      {/* <Accordian />
      <RandomBg />
      <Star />
      <Imageslider />
      <LoadProds />
      <Menu menus={menus} />
      <QRgenerator />
      <Darkmode />
      <IndicatorScroll urll={"https://dummyjson.com/products?limit=100"} /> */}
      <TabsTests />
    </>
  );
}

export default App;
