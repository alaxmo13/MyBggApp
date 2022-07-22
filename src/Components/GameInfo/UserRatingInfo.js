import React from "react";

const UserRatingInfo = (props) => {
  return (
    <div className="game-column">
      <div
        className={`${
          props.userrating == "N/A"
            ? "grey-game"
            : Number(props.userrating).toFixed(1) < 5
            ? "red-game"
            : Number(props.userrating).toFixed(1) < 8
            ? "blue-game"
            : "green-game"
        } rating`}
      >
        <b>
          {props.userrating == "N/A"
            ? "--"
            : Number(props.userrating).toFixed(1)}
        </b>
      </div>
    </div>
  );
};

export default UserRatingInfo;
