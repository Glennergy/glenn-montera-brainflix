import likeIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "./Description.scss";

function Description(props) {
  const time = new Date(props.video.timestamp).toLocaleDateString();
  return (
    <div className="description">
      <h1 className="description__title">{props.video.title}</h1>
      <hr className="break--title"></hr>
      <div className="description__details">
        <div className="description__details--left">
          <h3 className="description__channel">By {props.video.channel}</h3>
          <p className="description__date"> {time}</p>
        </div>
        <div className="description__details--right">
          <div className="description__metrics">
            <img className="description__icons" src={viewsIcon}></img>
            <p className="description__count">{props.video.views}</p>
          </div>
          <div className="description__metrics">
            <img className="description__icons" src={likeIcon}></img>
            <p className="description__count">{props.video.likes}</p>
          </div>
        </div>
      </div>
      <hr className="break"></hr>
      <div className="description__summary">
        <p className="description__summary--content">
          {props.video.description}
        </p>
      </div>
    </div>
  );
}

export default Description;
