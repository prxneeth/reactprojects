import React, { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

const OutsideClickTest = () => {
  const [displayContent, setDisplayContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setDisplayContent(false));

  return (
    <div>
      OutsideClickTest
      <div ref={ref}>
        {displayContent ? (
          <div>
            <h1>this is h1 heading</h1>
            <p>this is a pargraph</p>
          </div>
        ) : (
          <button onClick={() => setDisplayContent(!displayContent)}>
            display
          </button>
        )}
      </div>
    </div>
  );
};

export default OutsideClickTest;
