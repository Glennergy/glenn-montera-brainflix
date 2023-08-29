import "./Video.scss";

function Video({ video, image }) {
  return (
    <div className="video">
      <video
        className="video__player"
        controls
        poster={image}
        src={video}
      ></video>
    </div>
  );
}

export default Video;
