import { useState } from "react";
import likeIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";

function Description(props) {
  return (
    <div className="description">
      <h1 className="description__title">{props.video.title}</h1>
      <div className="description__details">
        <div className="description__summary--left">
          <h3 className="description__channel"> {props.video.channel}</h3>
        </div>
        <div className="description__summary--right">
          <div className="description__metrics">
            <img className="description__icons" src={viewsIcon}></img>
            <p className="description_count">{props.video.views}</p>
          </div>
          <div className="description__metrics"></div>
          <img className="description__icons" src={likeIcon}></img>
          <p className="description_count">{props.video.likes}</p>
        </div>
      </div>
      <div className="description__summary"></div>
      <p>{props.video.description}</p>
    </div>
  );
}

export default Description;
