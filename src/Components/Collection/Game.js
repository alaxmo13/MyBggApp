import GameImageName from "../GameInfo/GameImageName";
import GameDataInfo from "../GameInfo/GameDataInfo";

const Game = ({ user, game }) => {
  return (
    <div className="game">
      <GameImageName user={user} game={game} />
      <GameDataInfo game={game} />
    </div>
  );
};

export default Game;
