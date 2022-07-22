import React from "react";

const PlayerInfo = (props) => {
  return (
    <div className="game-column">
      <h3 className="number-players">
        {props.minplayers}{" "}
        {props.maxplayers && props.minplayers != props.maxplayers
          ? `- ${props.maxplayers}`
          : ""}{" "}
      </h3>
    </div>
  );
};

export default PlayerInfo;
