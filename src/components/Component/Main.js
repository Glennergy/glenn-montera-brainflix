import { useState } from "react";
import Video from "./Video";
import Description from "./Description";
import Comments from "./Comments";
import NextVideos from "./NextVideos";
import data from "../../data/videos.json";
import details from "../../data/video-details.json";

function Main() {
  let [currentVideo, setState] = useState(data[0].id);
  console.log(currentVideo);

  const updateVideo = () => {
    if (currentVideo == "25ce5d91-a262-4dcf-bb87-42b87546bcfa") {
      console.log("already set");
    } else {
      for (let i = 0; i < details.length; i++) {
        console.log(data[i].id);
        if (data[i].id == "25ce5d91-a262-4dcf-bb87-42b87546bcfa") {
          setState((currentVideo = details[i].id));
        }
      }
    }
  };

  return (
    <main className="main">
      {/* <Video /> */}
      <div className="main__container">
        <div className="main__divider">
          {/* <Description /> */}
          {/* <Comments /> */}
          <div>{currentVideo}</div>
          <button onClick={updateVideo}>Test</button>
        </div>
        {/* <NextVideos current=CurrentVideo.id/> */}
      </div>
    </main>
  );
}

export default Main;
