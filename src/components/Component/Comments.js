import Profile from "./Profile";

function Comments(props) {
  const time = new Date(props.date).toLocaleDateString();
  return (
    <div className="comments__entry">
      <Profile />
      <div className="comments__entry__information">
        <div className="comments__entry__info">
          <p className="comments__entry__name">{props.name}</p>
          <p className="comments__entry__date">{time}</p>
        </div>
        <p className="comment__entry__comment">{props.comment}</p>
      </div>
    </div>
  );
}

export default Comments;
