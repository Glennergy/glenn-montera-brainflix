import Thumbnail from "./Thumbnail";

function NextVideos(props) {
  const currentID = props.current;

  const videoHandler = (e) => {
    props.updatePage(e.target.closest("li").id);
  };

  return (
    <>
      <h3 className="next-video"> NEXT VIDEOS</h3>
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
    </>
  );
}

export default NextVideos;
