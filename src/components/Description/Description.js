import likeIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "./Description.scss";

function Description({ timestamp, title, channel, views, likes, description }) {
  const time = new Date(timestamp).toLocaleDateString();
  return (
    <div className="description">
      <h1 className="description__title">{title}</h1>
      <hr className="break--title"></hr>
      <div className="description__details">
        <div className="description__details--left">
          <h3 className="description__channel">By {channel}</h3>
          <p className="description__date"> {time}</p>
        </div>
        <div className="description__details--right">
          <div className="description__metrics">
            <img className="description__icons" src={viewsIcon}></img>
            <p className="description__count">{views}</p>
          </div>
          <div className="description__metrics">
            <img className="description__icons" src={likeIcon}></img>
            <p className="description__count">{likes}</p>
          </div>
        </div>
      </div>
      <hr className="break"></hr>
      <div className="description__summary">
        <p className="description__summary--content">{description}</p>
      </div>
    </div>
  );
}

export default Description;
