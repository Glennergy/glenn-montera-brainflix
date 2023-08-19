import "./Video.scss";

function Video(props) {
  return (
    <div className="video">
      <video
        className="video__player"
        controls
        poster={props.video.image}
        src={props.video.video}
      ></video>
    </div>
  );
}

export default Video;
