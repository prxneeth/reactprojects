import React from "react";

import MenuList from "./MenuList";

const Menu = ({ menus = [] }) => {
  return (
    <div className="bg-pink-300  w-1/4">
      <MenuList list={menus} />
    </div>
  );
};

export default Menu;
