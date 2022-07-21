import React from "react";
import {
  BsFillPeopleFill,
  BsFillClockFill,
  BsFillCalendarDateFill,
} from "react-icons/bs";

const ResultsHeader = () => {
  return (
    <div className="search-header">
      <div className="result-column"></div>
      <div className="result-column">
        <span>Game</span>
      </div>
      <div className="result-column">
        <BsFillPeopleFill />
      </div>
      <div className="result-column">
        <BsFillClockFill />
      </div>
      <div className="result-column">
        <BsFillCalendarDateFill />
      </div>
      <div className="result-column">
        <span>User</span>
      </div>
      <div className="result-column">
        <span>BGG</span>
      </div>
    </div>
  );
};

export default ResultsHeader;
