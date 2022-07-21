const Thread = ({ subject, author, id, messages }) => {
  return (
    <div className="thread">
      <div className="thread-subject">
        <a href={`https://boardgamegeek.com/thread/${id}/`} target="blank">
          {subject}
        </a>
      </div>
      <div className="thread-data">
        <div className="thread-author">{author}</div>
        <div className="thread-messages">{messages}</div>
      </div>
    </div>
  );
};

export default Thread;
