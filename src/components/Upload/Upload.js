import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav.js";

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
      <form onSubmit={onSubmitHandler}>
        <h3>Upload Video</h3>
        <input type="text" name="title" onChange={titleHandler} value={title} />
        <input
          type="text"
          name="description"
          onChange={descriptionHandler}
          value={description}
        />
        <input type="submit" />
      </form>
      <p>{title}</p>
      <p>{description}</p>
    </>
  );
}
