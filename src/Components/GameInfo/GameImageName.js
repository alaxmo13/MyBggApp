import React from "react";
import { Link } from "react-router-dom";

const GameImageName = (props) => {
  return (
    <div className="game-image-name">
      <Link to={`/game/${props.game.data.objectid}/${props.user}`}>
        <div className="image-wrap">
          <img
            src={props.game.image[0]}
            className="image-game"
            alt="game cover"
          />
        </div>
      </Link>
      <Link to={`/game/${props.game.data.objectid}/${props.user}`}>
        <div className="game-column">
          <h1>{props.game.name[0].text}</h1>
        </div>
      </Link>
    </div>
  );
};

export default GameImageName;
