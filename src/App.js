import "./App.scss";
import { useState } from "react";
import Nav from "./components/Component/Nav";
import Video from "./components/Component/Video";
import Description from "./components/Component/Description";
import CommentSection from "./components/Component/CommentSection";
import NextVideos from "./components/Component/NextVideos";
import data from "./data/videos.json";
import details from "./data/video-details.json";

function App() {
  // Creating variables with State Values
  const [currentVideo, setVideo] = useState(details[0]); // Holds current video information
  const [videoList, setList] = useState(data);
  // call all State Change Functions
  const updatePage = (id) => {
    updateVideo(id);
    // for (let i = 0; i < data.length; i++) {
    //   if (details[i].id == id) {
    //     updateComments(details[i].comments);
    //   }
    // }
  };

  // State Change for Current selected video
  const updateVideo = (newid) => {
    for (let i = 0; i < details.length; i++) {
      if (details[i].id === newid) {
        setVideo((currentVideo) => details[i]);
      }
    }
  };

  // State Change for currentComments
  // const updateComments = (comments) => {
  //   setComments((currentComments) => comments);
  // };

  return (
    <>
      <Nav />
      <Video video={currentVideo} />
      <div className="main">
        <div className="main__container">
          <Description video={currentVideo} />
          <CommentSection comments={currentVideo.comments} />
        </div>
        {
          <NextVideos
            current={currentVideo.id}
            data={videoList}
            updatePage={updatePage}
          />
        }
      </div>
    </>
  );
}

export default App;
