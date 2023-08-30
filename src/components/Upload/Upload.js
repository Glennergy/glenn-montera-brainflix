import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import Nav from "../Nav/Nav.js";
import Button from "../Button/Button.js";
import "./Upload.scss";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const titleHandler = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert("Video Uploaded");
    navigate("/");
  };

  return (
    <>
      <Nav />
      <hr className="upload__break"></hr>
      <form className="upload__form" onSubmit={onSubmitHandler}>
        <h3 className="upload__form--title">Upload Video</h3>
        <label className="upload__form--label">VIDEO THUMBNAIL</label>
        <img className="upload__form--thumbnail" src={Thumbnail}></img>
        <label className="upload__form--label" htmlFor="title">
          TITLE YOUR VIDEO
        </label>
        <input
          type="text"
          name="title"
          className="upload__form--input"
          placeholder="Add a title to your video"
          onChange={titleHandler}
          value={title}
        />
        <label className="upload__form--label" htmlFor="description">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          type="text"
          name="description"
          className="upload__form--textarea"
          placeholder="Add a description to your video"
          onChange={descriptionHandler}
          value={description}
        />
        <Button type="publish" />
      </form>
      <Link to={"/"}>
        <h3 className="upload__cancel">CANCEL</h3>
      </Link>
    </>
  );
}
