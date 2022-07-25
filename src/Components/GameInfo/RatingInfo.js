import React from "react";

const RatingInfo = (props) => {
  return (
    <div className="game-column">
      <div
        className={`${
          Number(props.usersrated) < 30
            ? "grey"
            : Number(props.rating).toFixed(1) < 5
            ? "red"
            : Number(props.rating).toFixed(1) < 8
            ? "blue"
            : "green"
        } rating`}
      >
        <b>
          {Number(props.usersrated) < 30
            ? "--"
            : Number(props.rating).toFixed(1)}
        </b>
      </div>
    </div>
  );
};

export default RatingInfo;
