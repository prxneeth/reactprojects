import React, { useEffect } from "react";

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    function listner(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      } else handler(event);
    }

    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [ref, handler]);

  return <div>useOutsideClick</div>;
};

export default useOutsideClick;
