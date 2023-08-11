import Upload from "../../assets/icons/upload.svg";
import AddComment from "../../assets/icons/add_comment.svg";

function Button(props) {
  if (props.type == "upload") {
    return (
      <button className="button--upload">
        <img className="button__icon--upload" src={Upload}></img>
        UPLOAD
      </button>
    );
  }

  if (props.type == "comment") {
    return (
      <button type="submit" className="button--comment">
        <img className="button__icon--comment" src={AddComment}></img>
        COMMENT
      </button>
    );
  }
}

export default Button;
