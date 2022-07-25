import React from "react";

const Credits = (props) => {
  return (
    <div className="header-credits">
      <div>
        <h2>{props.type}:</h2>
      </div>
      <div className="credits-data">
        {props.data.map((object, index) => {
          return (
            <p key={index} className={props.class}>
              &nbsp;
              {object + (index < props.data.length - 1 ? "," : "")}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Credits;
