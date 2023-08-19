import "./Profile.scss";

function Profile(props) {
  if (props.currentUser === true) {
    if (props.nav === true) {
      return <div className="profilepicture--user nav__icon"></div>;
    }
    if (props.commentSection === true) {
      return <div className="profilepicture--user comments__profile"></div>;
    }
  } else {
    return <div className="profilepicture"></div>;
  }
}

export default Profile;
