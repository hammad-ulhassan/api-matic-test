import React, { Component } from "react";
import "./sideBar.css";

export const SideBar: React.FC<any> = ({
  menuItems,
  onMenuItemClick,
  activeItem,
}) => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
          <span>
              <h3>Menu</h3>
          </span>
        <ul className="nav flex-column">
          {menuItems.length > 0 &&
            menuItems.map((item: any, index: number) => {
              return (
                <li className="nav-item" key={`${item}-${index}`}>
                  <a 
                   
                  onClick={() => onMenuItemClick(item)}
                  className={activeItem === item ? "nav-link active" : "nav-link"}
                  >
                      {item}</a>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
};
