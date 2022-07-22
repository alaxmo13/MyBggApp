import React from "react";
import { Link } from "react-router-dom";

const GameImageName = (props) => {
  return (
    <div>
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
        <div className="game-column title">
          <h1 className="title-game">{props.game.name[0].text}</h1>
        </div>
      </Link>
    </div>
  );
};

export default GameImageName;
