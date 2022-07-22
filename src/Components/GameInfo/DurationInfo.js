import React from "react";

const DurationInfo = (props) => {
  return (
    <div className="game-column">
      <h3 className="duration">
        {props.minplaytime}{" "}
        {props.maxplaytime && props.minplaytime != props.maxplaytime
          ? `- ${props.maxplaytime} `
          : ""}
      </h3>
    </div>
  );
};

export default DurationInfo;
