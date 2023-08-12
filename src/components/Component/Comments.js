import Profile from "./Profile";
import "./Comments.scss";

function Comments(props) {
  const time = new Date(props.date).toLocaleDateString();
  return (
    <>
      <div className="comments__entry">
        <Profile />
        <div className="comments__entry__information">
          <div className="comments__entry__info">
            <p className="comments__entry__name">{props.name}</p>
            <p className="comments__entry__date">{time}</p>
          </div>
          <p className="comments__entry__comment">{props.comment}</p>
        </div>
      </div>
      <hr className="comments__break"></hr>
    </>
  );
}

export default Comments;
