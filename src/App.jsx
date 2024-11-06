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
import ModalTest from "./modalPopUp/ModalTest";
import GitProfileFetch from "./githubProfile/GitProfileFetch";
import AutoSuggest from "./autoSuggestions/AutoSuggest";
import TicTacToe from "./tictactoe/TicTacToe";
import GitFinder from "./githubProfile/GitProfileFetch";
import FeatureFlagGlobalContext from "./featureFlag/context/Context";
import FeatureToggle from "./featureFlag/FeatureToggle";
import TestFetch from "./customFetch/TestFetch";
import OutsideClickTest from "./customUseOutsideClick/OutsideClickTest";
import WindowSizeTest from "./windowResizeHook/WindowSizeTest";
import TopBottomScroll from "./scrollTopBottom/TopBottomScroll";
import ImageSlider from "./imageslider/Slides";

function App() {
  return (
    <>
      {/* <Accordian />
      <RandomBg />
      <Star /> */}
      <Imageslider />
      <ImageSlider />
      {/* <LoadProds /> */}
      {/* <Menu menus={menus} /> */}
      {/* <QRgenerator />
      <Darkmode />
      <IndicatorScroll urll={"https://dummyjson.com/products?limit=100"} />
      <ModalTest />
      <TabsTests />
      <GitProfileFetch />
      <AutoSuggest />
      <TicTacToe /> */}
      {/* <FeatureFlagGlobalContext>
        <FeatureToggle />
      </FeatureFlagGlobalContext> */}
      {/* <TestFetch /> */}
      {/* <OutsideClickTest /> */}
      {/* <WindowSizeTest /> */}
      {/* <TopBottomScroll /> */}
    </>
  );
}

export default App;
