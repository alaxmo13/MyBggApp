import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchUser = () => {
  const [username, updateUser] = useState("alaxmo13");

  let history = useHistory();

  return (
    <div>
      <form
        className="bgg-user-form"
        onSubmit={(e) => {
          e.preventDefault();
          let path = `/collection/${username}/`;
          history.push(path);
        }}
      >
        <label className="user" htmlFor="user">
          <input
            placeholder="BGG Username"
            value={username}
            onChange={(e) => updateUser(e.target.value)}
            required
          ></input>
        </label>
        <button>Find</button>
      </form>
    </div>
  );
};

export default SearchUser;
