import Thumbnail from "./Thumbnail";
import "./NextVideos.scss";

function NextVideos(props) {
  const currentID = props.current;

  const videoHandler = (e) => {
    props.updatePage(e.target.closest("li").id);
  };

  return (
    <section className="next-video">
      <h3 className="next-video__header"> NEXT VIDEOS</h3>
      {props.data.map((data) => (
        <Thumbnail
          current={currentID}
          id={data.id}
          title={data.title}
          channel={data.channel}
          image={data.image}
          videoHandler={videoHandler}
        />
      ))}
    </section>
  );
}

export default NextVideos;
