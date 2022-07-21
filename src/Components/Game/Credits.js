import React from "react";

const Credits = (props) => {
  return (
    <div className="header-credits">
      <div>
        <h2>{props.type}:</h2>
      </div>
      <div>
        {props.data.map((object, index) => {
          return (
            <p key={index} className={props.class}>
              {object}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Credits;
