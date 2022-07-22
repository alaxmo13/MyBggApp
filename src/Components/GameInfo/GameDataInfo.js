import React from "react";
import DurationInfo from "./DurationInfo";
import PlayerInfo from "./PlayerInfo";
import UserRatingInfo from "./UserRatingInfo";
import RatingInfo from "./RatingInfo";

const GameDataInfo = (props) => {
  return (
    <div>
      <PlayerInfo
        minplayers={props.game.stats[0].data.minplayers}
        maxplayers={props.game.stats[0].data.maxplayers}
      />
      <DurationInfo
        minplaytime={props.game.stats[0].data.minplaytime}
        maxplaytime={props.game.stats[0].data.maxplaytime}
      />
      <div className="game-column">
        {props.game["yearpublished"] ? props.game.yearpublished[0] : ""}
      </div>
      <UserRatingInfo userrating={props.game.stats[0].rating[0].data.value} />
      <RatingInfo
        rating={props.game.stats[0].rating[0].average[0].data.value}
        usersrated={props.game.stats[0].rating[0].usersrated[0].data.value}
      />
    </div>
  );
};

export default GameDataInfo;
