import React from "react";
import BarChart from "../Charts/BarChart";

const PlayersPoll = (props) => {
  let playersPool = [];

  props.poll.results.map((result) => {
    var numPlayers = result.data.numplayers;
    var votes = [];
    result.result.map((number) => {
      votes.push(parseInt(number.data.numvotes));
    });
    var element = {};
    element.numPlayers = numPlayers;
    element.votes = votes;
    playersPool.push(element);
  });
  console.log(playersPool);

  return (
    <div className="chart-wrapper">
      {playersPool.map((nPlayers, index) => {
        console.log(nPlayers.votes, nPlayers.numPlayers);
        return (
          <BarChart
            width={document.body.offsetWidth}
            height={200}
            data={nPlayers.votes}
            numPlayers={nPlayers.numPlayers}
            key={index}
            id={index}
          />
        );
      })}
    </div>
  );
};

export default PlayersPoll;
