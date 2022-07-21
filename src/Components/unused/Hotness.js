import { useState, useEffect } from "react";
import Game from "../Collection/Game";

const Hotness = () => {
  const [hot, updateHot] = useState("");

  useEffect(() => {
    requestHot();
  }, []);

  async function requestHot() {
    const res = await fetch(
      `https://api.geekdo.com/xmlapi2/hot?type=boardgame`
    );
    const xml = await res.text();

    let results = "";
    let parseString = require("xml2js").parseString;
    parseString(
      xml,
      { attrkey: "data", charkey: "text" },
      function (err, result) {
        if (result.items.item.length != 0) {
          results = result.items.item;
        }
      }
    );
    updateHot(results);
  }

  return (
    <div className="hot-info">
      <h1 className="header">Hotness</h1>
      <div className="hot-games">
        {hot == "" ? (
          <h2>No Hot items Found</h2>
        ) : (
          hot
            .slice(0, 10)
            .map((game, index) => (
              <Game
                user=""
                title={game.name[0].data.value}
                img={game.thumbnail[0].data.value}
                year={game.yearpublished[0].data.value}
                id={game.data.id}
                key={index}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Hotness;
