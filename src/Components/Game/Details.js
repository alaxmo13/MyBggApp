import { Component } from "react";
import { withRouter } from "react-router-dom";
import Credits from "./Credits";
import PlayersPoll from "./PlayersPoll";
import Plays from "./Plays";

class Details extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const res = await fetch(
      `https://api.geekdo.com/xmlapi2/thing?id=${this.props.match.params.id}`
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
        let cleanedResult = JSON.stringify(result.items.item[0]);
        cleanedResult = cleanedResult.replaceAll("&#10;", "");
        cleanedResult = cleanedResult.replaceAll("&mdash;", "—");
        cleanedResult = cleanedResult.replaceAll("&ndash;", "-");
        const res = JSON.parse(cleanedResult);
        parent.setState(
          Object.assign(
            {
              loading: false,
            },
            { game: res }
          )
        );
      }
    );
  }

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }
    let game = this.state.game;

    let designers = [];
    let artists = [];
    let publishers = [];
    let categories = [];
    let mechanics = [];
    game.link.map((link) => {
      switch (link.data.type) {
        case "boardgamecategory":
          categories.push(link.data.value);
          break;
        case "boardgamemechanic":
          mechanics.push(link.data.value);
          break;
        case "boardgamedesigner":
          designers.push(link.data.value);
          break;
        case "boardgameartist":
          artists.push(link.data.value);
          break;
        case "boardgamepublisher":
          publishers.push(link.data.value);
          break;
      }
    });

    let playsSection = "";
    if (this.props.match.params.user) {
      playsSection = (
        <div>
          <h2 className="section">
            Plays registered by {this.props.match.params.user}{" "}
          </h2>{" "}
          <Plays
            username={this.props.match.params.user}
            id={this.props.match.params.id}
          />
        </div>
      );
    }
    return (
      <div className="details">
        <div className="details-header">
          <img src={game.image[0]} className="image" alt="Game Cover"></img>
          <div className="header-data">
            <h1 className="title">{game.name[0].data.value}</h1>
            <div className="credits-data">
              <div>
                <Credits
                  type="Designers"
                  data={designers}
                  class="credits-field"
                />
                <Credits type="Artists" data={artists} class="credits-field" />
                <Credits
                  type="Publishers"
                  data={publishers}
                  class="credits-field"
                />
              </div>
              <div>
                <Credits
                  type="Categories"
                  data={categories}
                  class="credits-field"
                />
                <Credits
                  type="Mechanics"
                  data={mechanics}
                  class="credits-field"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="section">Game Data</h2>
        <div className="description">
          <PlayersPoll poll={game.poll[0]} />
        </div>
        <h2 className="section">Description</h2>
        <div className="description">{game.description[0]}</div>
        {playsSection}
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return <DetailsWithRouter />;
}
