import Comments from "./Comments";
import Profile from "./Profile";
import Button from "./Button";

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
      <h3>{count} Comments</h3>
      <div className="comments__top">
        <Profile currentuser={true} />
        <form className="comments__form" onSubmit={clickHandler}>
          <label for="comment"> JOIN THE CONVERSATION</label>
          <input
            type="text"
            id="comment"
            name="comment"
            placeholder="Add a New Comment"
          ></input>
          <Button type="comment" />
        </form>
      </div>
      {props.comments.map((comment, index) => (
        <Comments
          key={index}
          name={comment.name}
          date={comment.timestamp}
          comment={comment.comment}
        />
      ))}
    </section>
  );
}

export default CommentSection;
