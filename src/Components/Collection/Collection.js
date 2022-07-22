import React from "react";
import { Component } from "react/cjs/react.production.min";
import { withRouter } from "react-router-dom";

import axios from "axios";
import collection from "../../../data/collection.xml";

import Game from "./Game";
import ResultsHeader from "./ResultsHeader";

class Results extends Component {
  state = {
    loading: true,
    status: -1,
    games: [],
    user: "",
  };

  async componentDidMount() {
    this.state.user = this.props.match.params.user;
    const status = this.props.match.params.status;
    const minBggRating = this.props.match.params.minbggrating;

    const ownParam = status === "own" ? `&own=1` : ``;
    const prevOwnParam = status === "prevOwned" ? `&prevowned=1` : ``;
    const wishlistParam = status === "wishlist" ? `&wishlist=1` : ``;
    const minBggRatingParam = minBggRating
      ? `&minbggrating=${+minBggRating}`
      : ``;

    axios
      .get(collection, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((res) => {
        console.log(res.data);
        let parent = this;

        let parseString = require("xml2js").parseString;
        parseString(
          res.data,
          { attrkey: "data", charkey: "text" },
          function (err, result) {
            console.log(result);
            if (result.items.data.totalitems != 0) {
              parent.setState(
                Object.assign({
                  loading: false,
                  status: 200,
                  games: result.items.item,
                })
              );
            }
          }
        );
      });
    let a = false;
    if (a) {
      let res = await fetch(
        `https://api.geekdo.com/xmlapi2/collection?username=${this.state.user}&stats=1` +
          ownParam +
          prevOwnParam +
          wishlistParam +
          minBggRatingParam
      );
      if (res.status == 202) {
        this.setState(
          Object.assign({
            loading: false,
            status: res.status,
          })
        );
      } else {
        const xml = await res.text();
        console.log(xml);
        let parent = this;

        let parseString = require("xml2js").parseString;
        parseString(
          xml,
          { attrkey: "data", charkey: "text" },
          function (err, result) {
            console.log(result);
            if (result.items.data.totalitems != 0) {
              parent.setState(
                Object.assign({
                  loading: false,
                  games: result.items.item,
                })
              );
            }
          }
        );
      }
    }
  }

  render() {
    return (
      <div className="search-result">
        <div className="mb-2">
          <ResultsHeader />
        </div>
        <div className="search-result-wrap inner">
          {this.state.status == 202 ? (
            <h2>
              Your request has been submitted to BGG. Please refresh the page
            </h2>
          ) : !this.state.games.length ? (
            <h2>No Games Found</h2>
          ) : (
            this.state.games.map((game) => (
              <Game user={this.state.user} game={game} />
            ))
          )}
        </div>
      </div>
    );
  }
}

const ResultsRouter = withRouter(Results);

export default function DetailsWithErrorBoundary() {
  return <ResultsRouter />;
}
