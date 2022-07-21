import { useState } from "react";
import { useHistory } from "react-router-dom";
import Hotness from "./Hotness";
import Forums from "./Forum";

const SearchParams = () => {
  const [username, updateUser] = useState("alaxmo13");
  const [status, updateStatus] = useState("");
  const [minBggRating, updateMinBggRating] = useState("");

  let history = useHistory();

  return (
    <div className="search-params">
      <div className="search-params-wrap">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let path = `/results/${username}/`;
            path += minBggRating != "" ? minBggRating + "/" : "0/";
            path += status != "" ? status + "/" : "";
            history.push(path);
          }}
        >
          <label className="user" htmlFor="user">
            <input
              id="user"
              value={username}
              onChange={(e) => updateUser(e.target.value)}
              required
            />
            <b className="label">Username</b>
          </label>
          <div className="status">
            <p>
              <b>Status</b>
            </p>
            <div onChange={(e) => updateStatus(e.target.value)}>
              <label>
                <input type="radio" value="all" name="status" />
                <span>All the Games</span>
              </label>
              <label>
                <input type="radio" value="own" name="status" />
                <span>Own</span>
              </label>
              <label>
                <input type="radio" value="prevOwned" name="status" />
                <span>Prev. Owned</span>
              </label>
              <label>
                <input type="radio" value="wishlist" name="status" />
                <span>Wishlist</span>
              </label>
            </div>
          </div>
          <div>
            <p>
              <b>BGG Rating</b>
            </p>
          </div>
          <label htmlFor="minBggRating" className="min-bgg-rating">
            <input
              id="minBggRating"
              type="number"
              step="any"
              placeholder="0"
              defaultValue=""
              onChange={(e) => updateMinBggRating(e.target.value)}
            />
            <b className="label">Minimum</b>
          </label>
          <button className="button">Search</button>
        </form>
        <div className="hotness">
          <Hotness />
        </div>
        <div className="forums">
          <Forums />
        </div>
      </div>
    </div>
  );
};

export default SearchParams;
