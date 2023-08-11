function Video(props) {
  return (
    <div className="main__video">
      <video
        className="main__video__player"
        controls
        poster={props.video.image}
      ></video>
    </div>
  );
}

export default Video;
