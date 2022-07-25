import React from "react";

const UserRatingInfo = (props) => {
  return (
    <div className="game-column">
      <div
        className={`${
          props.userrating == "N/A"
            ? "grey"
            : Number(props.userrating).toFixed(1) < 5
            ? "red"
            : Number(props.userrating).toFixed(1) < 8
            ? "blue"
            : "green"
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
