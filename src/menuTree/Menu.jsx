import React from "react";

import MenuList from "./MenuList";

const Menu = ({ menus = [] }) => {
  return (
    <div>
      <MenuList list={menus} />
    </div>
  );
};

export default Menu;
