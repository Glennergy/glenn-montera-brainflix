import Comments from "../Comments/Comments";
import Profile from "../Profile/Profile";
import Button from "../Button/Button";
import axios from "axios";
import "./CommentSection.scss";

function CommentSection({ comments }) {
  const comment = { comments }.comments;
  const count = comment.length;

  // clickHandler for Comment Section, Does not post at this moment, and will also console.log the input
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.comment.value);
    e.target.comment.value = "";
  };

  return (
    <section className="comments">
      <h3 className="comments__count">{count} Comments</h3>
      <div className="comments__top">
        <Profile currentUser={true} commentSection={true} />
        <form className="comments__form" onSubmit={clickHandler}>
          <div className="comments__form--div">
            <h3 className="comments__form--header">JOIN THE CONVERSATION</h3>
            <textarea
              id="comment"
              name="comment"
              className="comments__form--input"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <Button type="comment" />
        </form>
      </div>
      <hr className="comments__break"></hr>
      {comment.map((comment) => (
        <Comments
          key={comment.id}
          name={comment.name}
          date={comment.timestamp}
          comment={comment.comment}
        />
      ))}
    </section>
  );
}

export default CommentSection;
