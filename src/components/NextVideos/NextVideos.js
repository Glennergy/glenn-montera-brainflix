import Thumbnail from "../Thumbnail/Thumbnail";
import { Link } from "react-router-dom";
import "./NextVideos.scss";

function NextVideos(props) {
  const currentID = props.current;

  return (
    <section className="next-video">
      <h3 className="next-video__header"> NEXT VIDEOS</h3>
      {props.data
        .filter((data) => data.id !== currentID)
        .map((data) => (
          <Link key={data.id} to={`/video/${data.id}`}>
            <Thumbnail
              current={currentID}
              key={data.id}
              id={data.id}
              title={data.title}
              channel={data.channel}
              image={data.image}
            />
          </Link>
        ))}
    </section>
  );
}

export default NextVideos;
