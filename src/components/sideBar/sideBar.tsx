import React, { Component } from "react";
import { Aux } from "../../hoc/Aus";
import "./sideBar.css";

export const SideBar: React.FC<any> = ({
  menuItems,
  onMenuItemClick,
  activeItem,
}) => {
    console.log(activeItem)
  return (
    <div className="sidebar">
      {menuItems.length > 0 &&
        menuItems.map((item: any, index: number) => {
          return (
            <button
              key={`${item}-${index}`}
              onClick={()=>onMenuItemClick(item)}
              className={activeItem===item ? "selectedMenu" : undefined}
            >
              {item}
            </button>
          );
        })}
    </div>
  );
};
