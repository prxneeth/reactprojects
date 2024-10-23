import React from "react";
import useResizeHook from "./useResizeHook";

const WindowSizeTest = () => {
  const { width, height } = useResizeHook();

  return (
    <div>
      WindowSizeTest
      <div>
        <p> width : {width}</p>
        <p>height : {height}</p>
      </div>
    </div>
  );
};

export default WindowSizeTest;
