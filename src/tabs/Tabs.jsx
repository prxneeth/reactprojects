import React, { useState } from "react";

const Tabs = ({ tabsContent }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClick(getIndex) {
    setCurrentTabIndex(getIndex);
  }

  return (
    <div className=" bg-purple-400 p-4 mt-7">
      <div className="flex justify-center gap-3">
        {tabsContent.map((tabItem, index) => (
          <div
            className=""
            onClick={() => handleClick(index)}
            key={tabItem.label}
          >
            <button className="cursor-pointer w-20 h-7 border-none rounded-md  bg-blue-300">
              {tabItem.label}
            </button>
          </div>
        ))}
      </div>
      <br />
      <div className="text-center">
        <h1>
          {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </h1>
      </div>
    </div>
  );
};

export default Tabs;
