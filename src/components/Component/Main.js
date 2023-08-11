import { useState } from "react";
import Video from "./Video";
import Description from "./Description";
import Comments from "./Comments";
import NextVideos from "./NextVideos";
import data from "../../data/videos.json";
import details from "../../data/video-details.json";

function Main() {
  // Creating variables with State Values
  const [currentVideo, setVideo] = useState(details[0]);
  const [currentID, setID] = useState(details[0].id);

  // State Change for Current selected ID
  const updateID = (id) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id);
      if (data[i].id == id) {
        setID(data[i].id);
        console.log("new id is" + { currentID });
        updateVideo(currentID);
      }
    }
  };

  // State Change for Current selected video
  const updateVideo = (newid) => {
    for (let i = 0; i < data.length; i++) {
      console.log(details[i].id);
      if (details[i].id == newid) {
        setVideo(details[i]);
      }
    }
  };

  return (
    <main className="main">
      <Video video={currentVideo} />
      <div className="main__container">
        <div className="main__divider">
          {/* <Description /> */}
          {/* <Comments /> */}
          <div>{currentVideo.title}</div>
        </div>
        {/* <NextVideos current=currentVideo/> */}
      </div>
    </main>
  );
}

export default Main;
