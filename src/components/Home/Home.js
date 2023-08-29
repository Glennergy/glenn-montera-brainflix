import "../../App.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav.js";
import Video from "../Video/Video";
import Description from "../Description/Description";
import CommentSection from "../CommentSection/CommentSection";
import NextVideos from "../NextVideos/NextVideos";
import GetKey from "../GetKey/GetKey";
import axios from "axios";

function Home() {
  // Creating variables with State Values
  const { videoId } = useParams();
  // Holds current video information
  const [currentVideo, setCurrentVideo] = useState("");
  // Holds current video details
  const [videoDetails, setVideoDetails] = useState([]);
  // Holds all Videos
  const [videoList, setList] = useState([]);
  // Pulls API key from other program
  const key = GetKey();
  //   console.log(currentVideo);
  //Load data from API

  useEffect(() => {
    const defaultVideo = "84e96018-4022-434e-80bf-000ce4cd12b8";
    setCurrentVideo(defaultVideo);
  }, []);

  useEffect(() => {
    const vidId = { videoId }.videoId;
    if (vidId !== undefined) {
      setCurrentVideo(vidId);
      console.log(vidId);
    } else {
      const defaultVideo = "84e96018-4022-434e-80bf-000ce4cd12b8";
      setCurrentVideo(defaultVideo);
    }
  });

  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${key}`)
      .then((response) => {
        setList(response.data);
      });
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${currentVideo}?api_key=${key}`
      )
      .then((response) => {
        setVideoDetails(response.data);
      });
  }, [currentVideo]);

  //   // State Change for Current selected video
  //   const updateVideo = (newid) => {
  //     for (let i = 0; i < details.length; i++) {
  //       if (details[i].id === newid) {
  //         setVideo((currentVideo) => details[i]);
  //       }
  //     }
  //   };

  // State Change for currentComments
  // const updateComments = (comments) => {
  //   setComments((currentComments) => comments);
  // };

  return (
    <>
      <Nav />
      <Video video={videoDetails.video} image={videoDetails.image} />
      <div className="main">
        <div className="main__container">
          <Description
            timestamp={videoDetails.timestamp}
            title={videoDetails.title}
            description={videoDetails.description}
            channel={videoDetails.channel}
            views={videoDetails.views}
            likes={videoDetails.likes}
          />
          <CommentSection
            currentVideo={currentVideo}
            apiKey={key}
            comments={videoDetails.comments}
          />
        </div>
        {<NextVideos current={currentVideo} data={videoList} />}
      </div>
    </>
  );
}

export default Home;
