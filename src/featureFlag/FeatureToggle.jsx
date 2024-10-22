import React, { Component, useContext } from "react";
import TicTacToe from "../tictactoe/TicTacToe";
import Darkmode from "../darkMode/Darkmode";
import { RandomBg } from "../RandomBg/randomBg";
import Menu from "../menuTree/menu";
import { Accordian } from "../accordian/Accordian";
import { FeatureFlagContext } from "./context/Context";

const FeatureToggle = () => {
  const enabledFlags = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightDarkTheme",
      component: <Darkmode />,
    },
    {
      key: "showTictactoeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerater",
      component: <RandomBg />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <Menu />,
    },
  ];

  function checkedEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  return (
    <div>
      FeatureToggle
      {componentsToRender.map((compItem) =>
        checkedEnabledFlags(compItem.key) ? compItem.component : null
      )}
    </div>
  );
};

export default FeatureToggle;
