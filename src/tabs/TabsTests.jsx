import React from "react";
import Tabs from "./tabs";

const TabsTests = () => {
  const tabs = [
    {
      label: "tab 1",
      content: <div>This is TAB 1 content</div>,
    },
    {
      label: "tab 2",
      content: <div>This is TAB 2 content</div>,
    },
    {
      label: "tab 3",
      content: <div>This is TAB 3 content</div>,
    },
  ];

  //   function handleChange(currentTabIndex) {
  //     console.log(currentTabIndex);
  //   }

  return <Tabs tabsContent={tabs} />;
};

export default TabsTests;
