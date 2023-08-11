function Thumbnail(props) {
  if (props.id !== props.current) {
    return (
      <li
        className="next-video__item"
        id={props.id}
        onClick={props.videoHandler}
      >
        <img className="next-video__thumbnails" src={props.image}></img>
        <div className="next-video__description">
          <h3 className="next-video__title"> {props.title}</h3>
          <p className="next-video__channel">{props.channel}</p>
        </div>
      </li>
    );
  }
}

export default Thumbnail;