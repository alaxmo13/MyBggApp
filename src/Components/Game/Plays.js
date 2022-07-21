import { Component } from "react";
import { withRouter } from "react-router-dom";
import { format } from "date-fns";

class Plays extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const res = await fetch(
      `https://api.geekdo.com/xmlapi2/plays?username=${this.props.match.params.user}&id=${this.props.match.params.id}`
    );
    const xml = await res.text();
    let parent = this;
    let parseString = require("xml2js").parseString;
    parseString(
      xml,
      {
        attrkey: "data",
        charkey: "text",
        xmldec: { version: "1.0", encoding: "unicode", standalone: true },
      },
      function (err, result) {
        let cleanedResult = JSON.stringify(result.plays);
        cleanedResult = cleanedResult.replaceAll("&#10;", "");
        cleanedResult = cleanedResult.replaceAll("&mdash;", "—");
        cleanedResult = cleanedResult.replaceAll("&ndash;", "-");
        const res = JSON.parse(cleanedResult);
        parent.setState(
          Object.assign(
            {
              loading: false,
            },
            { plays: res }
          )
        );
      }
    );
  }

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }
    let plays = this.state.plays.play;
    /*let title = game.name[0].data.value;
    let image = game.image[0];
    let description = game.description[0];*/
    return (
      <div className="plays">
        {!plays || !plays.length ? (
          <p>{this.props.match.params.user} has no plays registered</p>
        ) : (
          plays.map((play, index) => (
            <div className="play" key={play.data.id}>
              <div className="index">{index + 1}</div>
              <div className="date">
                {format(new Date(play.data.date), "dd/MM/yyyy")}
              </div>
              <div className="players">
                {!play.players ? (
                  <div>
                    <img
                      className="no-players-image"
                      src={`${require("../../../media/cross.png")}`}
                      alt="No players found"
                    ></img>
                    <div className="no-players">No players found</div>
                  </div>
                ) : (
                  play.players[0].player.map((player, index) => {
                    return (
                      <div key={index} className="player">
                        <img
                          className={`${
                            player.data.win == "1" ? "win" : "lose"
                          }`}
                          src={`${
                            player.data.win == "1"
                              ? require("../../../media/win.png")
                              : require("../../../media/lose.png")
                          }`}
                          alt={`${
                            player.data.win == "1" ? "Winner" : "Loser"
                          } Trophy`}
                        ></img>
                        <div className="name">{player.data.name}</div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

const PlaysWithRouter = withRouter(Plays);

export default function PlaysWithErrorBoundary() {
  return <PlaysWithRouter />;
}
