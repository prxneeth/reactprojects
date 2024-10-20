import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  const [diplayCurrentchildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(currLabel) {
    setDisplayCurrentChildren({
      ...diplayCurrentchildren,
      [currLabel]: !diplayCurrentchildren[currLabel],
    });
  }

  return (
    <li>
      <div style={{ display: "flex", gap: "10px" }}>
        {" "}
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleToggleChildren(item.label);
            }}
          >
            {diplayCurrentchildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      diplayCurrentchildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
