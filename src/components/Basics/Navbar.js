import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
    <div className="eventcard">
      <nav className="navbar1">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
      </div>
    </>
  );
};

export default navbar;