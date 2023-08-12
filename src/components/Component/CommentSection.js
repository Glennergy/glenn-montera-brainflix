import Comments from "./Comments";
import Profile from "./Profile";
import Button from "./Button";
import "./CommentSection.scss";

function CommentSection(props) {
  const count = props.comments.length;

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
          <h3 className="comments__form--header">JOIN THE CONVERSATION</h3>
          <textarea
            id="comment"
            name="comment"
            className="comments__form--input"
            placeholder="Add a new comment"
          ></textarea>
          <Button type="comment" />
        </form>
      </div>
      <hr className="comments__break"></hr>
      {props.comments.map((comment) => (
        <Comments
          name={comment.name}
          date={comment.timestamp}
          comment={comment.comment}
        />
      ))}
    </section>
  );
}

export default CommentSection;
