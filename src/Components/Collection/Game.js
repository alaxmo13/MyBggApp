import { Link } from "react-router-dom";

const Game = ({
  user,
  title,
  img,
  id,
  year,
  minplayers,
  maxplayers,
  minplaytime,
  maxplaytime,
  rating,
  usersrated,
  userrating,
}) => {
  let playersInfo = "";
  let durationInfo = "";
  let ratingInfo = "";
  let userRatingInfo = "";
  playersInfo = (
    <div className="game-column">
      <h3 className="number-players">
        {minplayers}{" "}
        {maxplayers && minplayers != maxplayers ? `- ${maxplayers}` : ""}{" "}
      </h3>
    </div>
  );
  durationInfo = (
    <div className="game-column">
      <h3 className="duration">
        {minplaytime}{" "}
        {maxplaytime && minplaytime != maxplaytime ? `- ${maxplaytime} ` : ""}
      </h3>
    </div>
  );
  if (rating) {
    ratingInfo = (
      <div className="game-column">
        <div
          className={`${
            Number(usersrated) < 30
              ? "grey-game"
              : Number(rating).toFixed(1) < 5
              ? "red-game"
              : Number(rating).toFixed(1) < 8
              ? "blue-game"
              : "green-game"
          } rating`}
        >
          <b>{Number(usersrated) < 30 ? "--" : Number(rating).toFixed(1)}</b>
        </div>
      </div>
    );
  }
  userRatingInfo = (
    <div className="game-column">
      <div
        className={`${
          userrating == "N/A"
            ? "grey-game"
            : Number(userrating).toFixed(1) < 5
            ? "red-game"
            : Number(userrating).toFixed(1) < 8
            ? "blue-game"
            : "green-game"
        } rating`}
      >
        <b>{userrating == "N/A" ? "--" : Number(userrating).toFixed(1)}</b>
      </div>
    </div>
  );
  return (
    <div className="game">
      <Link to={`/game/${id}/${user}`}>
        <div className="image-wrap">
          <img src={img} className="image-game" alt="game cover" />
        </div>
      </Link>
      <Link to={`/game/${id}/${user}`}>
        <div className="game-column title">
          <h1 className="title-game">{title}</h1>
        </div>
      </Link>
      {playersInfo}
      {durationInfo}
      <div className="game-column">{year}</div>
      <div className="game-column"></div>
      <div className="game-column"></div>
      {userRatingInfo}
      {ratingInfo}
    </div>
  );
};

export default Game;
