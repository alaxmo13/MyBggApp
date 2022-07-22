import { Link } from "react-router-dom";
import DurationInfo from "../GameInfo/DurationInfo";
import PlayerInfo from "../GameInfo/PlayerInfo";
import UserRatingInfo from "../GameInfo/UserRatingInfo";
import RatingInfo from "../GameInfo/RatingInfo";

const Game = ({ user, game }) => {
  return (
    <div className="game">
      <Link to={`/game/${game.data.objectid}/${user}`}>
        <div className="image-wrap">
          <img src={game.image[0]} className="image-game" alt="game cover" />
        </div>
      </Link>
      <Link to={`/game/${game.data.objectid}/${user}`}>
        <div className="game-column title">
          <h1 className="title-game">{game.name[0].text}</h1>
        </div>
      </Link>
      <PlayerInfo
        minplayers={game.stats[0].data.minplayers}
        maxplayers={game.stats[0].data.maxplayers}
      />
      <DurationInfo
        minplaytime={game.stats[0].data.minplaytime}
        maxplaytime={game.stats[0].data.maxplaytime}
      />
      <div className="game-column">
        {game["yearpublished"] ? game.yearpublished[0] : ""}
      </div>
      <div className="game-column"></div>
      <div className="game-column"></div>
      <UserRatingInfo userrating={game.stats[0].rating[0].data.value} />
      <RatingInfo
        rating={game.stats[0].rating[0].average[0].data.value}
        usersrated={game.stats[0].rating[0].usersrated[0].data.value}
      />
    </div>
  );
};

export default Game;
