import { useState, useEffect } from "react";
import Thread from "./Thread";

/* UNUSED */

const Forums = () => {
  const [forum, updateForum] = useState("");

  useEffect(() => {
    requestForum();
  }, []);

  async function requestForum() {
    const res = await fetch(`https://api.geekdo.com/xmlapi2/forum?id=70`);
    const xml = await res.text();
    console.log(xml);
    let results = "";
    let parseString = require("xml2js").parseString;
    parseString(
      xml,
      { attrkey: "data", charkey: "text" },
      function (err, result) {
        console.log(result);
        if (
          result.forum.threads.length != 0 &&
          result.forum.threads[0].thread.length != 0
        ) {
          results = result.forum.threads[0].thread;
        }
      }
    );
    updateForum(results);
  }

  return (
    <div className="forum">
      <h1 className="header">BGG General Forum</h1>
      {forum == "" ? (
        <h2>No threads found</h2>
      ) : (
        forum
          .slice(0, 10)
          .map((thread) => (
            <Thread
              subject={thread.data.subject}
              author={thread.data.author}
              id={thread.data.id}
              messages={thread.data.numarticles}
              key={thread.data.id}
            />
          ))
      )}
    </div>
  );
};

export default Forums;
