import "../../App.scss";
import { useState, useEffect } from "react";
import { Await, useParams } from "react-router-dom";
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
  const [currentVideo, setCurrentVideo] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  // Holds current video details
  const [videoDetails, setVideoDetails] = useState([]);
  const comments = videoDetails.comments;
  // Holds all Videos
  const [videoList, setVideoList] = useState([]);
  // Pulls API key from other function
  const key = GetKey();
  //  If data has loaded, set to true
  const [isLoading, setLoading] = useState(true);
  //   console.log(currentVideo);
  //Load data from API

  // useEffect sets Loading to true and default video on Mount
  useEffect(() => {
    setLoading(true);
    // console.log("mounting");
    const defaultVideo = "84e96018-4022-434e-80bf-000ce4cd12b8";
    setCurrentVideo(defaultVideo);
  }, []);

  useEffect(() => {
    const vidId = { videoId }.videoId;
    if (vidId !== undefined) {
      setCurrentVideo(vidId);
      //   console.log(vidId);
    } else {
      const defaultVideo = "84e96018-4022-434e-80bf-000ce4cd12b8";
      setCurrentVideo(defaultVideo);
    }
    if (videoDetails.length != 0) {
      setLoading(false);
    }
  });

  useEffect(() => {
    const getAppData = async () => {
      try {
        const data = await axios.get(
          `https://project-2-api.herokuapp.com/videos?api_key=${key}`
        );
        setVideoList(data.data);
      } catch (err) {
        console.log(err);
      }

      try {
        const details = await axios.get(
          "https://project-2-api.herokuapp.com/videos/" +
            currentVideo +
            "?api_key=" +
            key
        );
        setVideoDetails(details.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAppData();
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
  if (!isLoading) {
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
              comments={comments}
            />
          </div>
          {<NextVideos current={currentVideo} data={videoList} />}
        </div>
      </>
    );
  }
}
export default Home;