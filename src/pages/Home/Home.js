import "../../App.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav.js";
import Video from "../../components/Video/Video";
import Description from "../../components/Description/Description";
import CommentSection from "../../components/CommentSection/CommentSection";
import NextVideos from "../../components/NextVideos/NextVideos";
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
  //  If data has loaded, set to true
  const [isLoading, setLoading] = useState(true);
  //   console.log(currentVideo);
  //Load data from API

  // useEffect sets Loading to true and default video on Mount

  useEffect(() => {
    const getAppData = async () => {
      try {
        const data = await axios.get(`http://localhost:8080/videos/`);
        setVideoList(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    setLoading(true);
    // console.log("mounting");
    const defaultVideo = "84e96018-4022-434e-80bf-000ce4cd12b8";
    setCurrentVideo(defaultVideo);
    getAppData();
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
    if (videoDetails.length !== 0) {
      setLoading(false);
    }
  }, [videoId, videoDetails.length]);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const details = await axios.get(
          `http://localhost:8080/videos/${currentVideo}`
          // `https://project-2-api.herokuapp.com/videos/${currentVideo}?api_key=${key}`
        );
        setVideoDetails(details.data);
      } catch (err) {
        console.log(err);
      }
    };

    getVideo();
  }, [currentVideo]);

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
            <CommentSection currentVideo={currentVideo} comments={comments} />
          </div>
          {<NextVideos current={currentVideo} data={videoList} />}
        </div>
      </>
    );
  }
}
export default Home;
