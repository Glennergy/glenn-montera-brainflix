import Profile from "../Profile/Profile";
import ReactTimeAgo from "react-time-ago";
import "./Comments.scss";

function Comments(props) {
  return (
    <>
      <div className="comments__entry">
        <Profile />
        <div className="comments__entry__information">
          <div className="comments__entry__info">
            <p className="comments__entry__name">{props.name}</p>
            <p className="comments__entry__date">
              <ReactTimeAgo
                date={props.date}
                locale="en-US"
                timeStyle={"round"}
              />
            </p>
          </div>
          <p className="comments__entry__comment">{props.comment}</p>
        </div>
      </div>
      <hr className="comments__break"></hr>
    </>
  );
}

export default Comments;
