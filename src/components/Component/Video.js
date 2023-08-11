import { useState } from "react";
import details from "../../data/video-details.json";

function Video(props) {
  console.log(props.video.image);

  return (
    <div className="video">
      <video
        className="video__player"
        controls
        poster={props.video.image}
      ></video>
    </div>
  );
}

export default Video;
