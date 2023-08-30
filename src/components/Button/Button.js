import "./Button.scss";
import { useParams, useNavigate } from "react-router-dom";
import Upload from "../../assets/icons/upload.svg";
import AddComment from "../../assets/icons/add_comment.svg";

function Button(props) {
  const navigate = useNavigate();
  const onClickUpload = () => {
    navigate("/upload");
  };

  if (props.type === "upload") {
    return (
      <button className="button" onClick={onClickUpload}>
        <img className="button__icon" src={Upload} alt="upload"></img>
        <p className="button__text--upload">UPLOAD</p>
      </button>
    );
  }

  if (props.type === "publish") {
    return (
      <button type="submit" className="button">
        <img className="button__icon" src={Upload} alt="upload"></img>
        <p className="button__text--publish">PUBLISH</p>
      </button>
    );
  }

  if (props.type === "comment") {
    return (
      <button type="submit" className="button">
        <img className="button__icon" src={AddComment} alt="comment"></img>
        <p className="button__text--comment">COMMENT</p>
      </button>
    );
  }
}

export default Button;
