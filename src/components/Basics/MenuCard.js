import React from "react";
const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, description } = curElem;

          return (
            <>
            <body className="body1">
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                    <a href="https://svvv.edu.in/userpanel/ViewAllNewsAndEvents.aspx?nModuleID=gi&sModuleCode=News">
                    <button >Know More About Events</button></a>
                  </div>
                  {/* <img src={image} alt="images" className="card-media" /> */}
                  {/*<button className="apply"onClick={handleClick}>Read More Details</button>*/}
                </div>
              </div>
              </body>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;