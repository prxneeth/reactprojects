import React, { useState } from "react";
import MenuList from "./MenuList";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const MenuItem = ({ item }) => {
  const [diplayCurrentchildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(currLabel) {
    setDisplayCurrentChildren({
      ...diplayCurrentchildren,
      [currLabel]: !diplayCurrentchildren[currLabel],
    });
  }

  return (
    <li className="text-gray-700">
      <div className="flex  gap-1">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span
            style={{ cursor: "pointer", marginTop: "18px" }}
            onClick={() => {
              handleToggleChildren(item.label);
            }}
            className=""
          >
            {diplayCurrentchildren[item.label] ? (
              <RemoveIcon
                className="text-red-600  "
                sx={{ fontSize: "15px" }}
              />
            ) : (
              <AddCircleIcon
                className="text-blue-600  "
                sx={{ fontSize: "15px" }}
              />
            )}
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
