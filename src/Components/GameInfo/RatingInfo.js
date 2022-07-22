import React from "react";

const RatingInfo = (props) => {
  return (
    <div className="game-column">
      <div
        className={`${
          Number(props.usersrated) < 30
            ? "grey-game"
            : Number(props.rating).toFixed(1) < 5
            ? "red-game"
            : Number(props.rating).toFixed(1) < 8
            ? "blue-game"
            : "green-game"
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
