import { useState } from "react";
import Video from "./Video";
import Description from "./Description";
import CommentSection from "./CommentSection";
import NextVideos from "./NextVideos";
import data from "../../data/videos.json";
import details from "../../data/video-details.json";

function Main() {
  // Creating variables with State Values
  const [currentVideo, setVideo] = useState(details[0]);
  const [currentID, setID] = useState(details[0].id);
  const [currentComments, setComments] = useState(currentVideo.comments);

  // call all State Change Functions
  const updatePage = (id) => {
    updateID(id);
    updateVideo(id);
    for (let i = 0; i < data.length; i++) {
      if (details[i].id == id) {
        updateComments(details[i].comments);
      }
    }
  };

  // State Change for currentID

  const updateID = (newid) => {
    setID((currentID) => newid);
  };

  // State Change for Current selected video
  const updateVideo = (newid) => {
    for (let i = 0; i < data.length; i++) {
      if (details[i].id == newid) {
        setVideo((currentVideo) => details[i]);
      }
    }
  };

  // State Change for currentComments
  const updateComments = (comments) => {
    setComments((currentComments) => comments);
  };

  return (
    <main className="main">
      <Video video={currentVideo} />
      <div className="main__container">
        <div className="main__divider">
          <Description video={currentVideo} />
          <CommentSection
            comments={currentComments}
            setComments={setComments}
          />
        </div>
        {<NextVideos current={currentID} data={data} updatePage={updatePage} />}
      </div>
    </main>
  );
}

export default Main;
