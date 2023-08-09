import { useState } from "react";
import Video from "./Video";
import Description from "./Description";
import Comments from "./Comments";
import NextVideos from "./NextVideos";
import data from "../../data/videos.json";
import details from "../../data/video-details.json";

function Main() {
  const [CurrentVideo, setVideo] = useState({
    id: details[0].id,
  });

  const updateVideo = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == "25ce5d91-a262-4dcf-bb87-42b87546bcfa") {
        setVideo((CurrentVideo.id = data[i].id));
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
          <div>
            <p>{CurrentVideo.id}</p>
          </div>
          <button onClick={updateVideo}>Test</button>
        </div>
        {/* <NextVideos current=CurrentVideo.id/> */}
      </div>
    </main>
  );
}

export default Main;
