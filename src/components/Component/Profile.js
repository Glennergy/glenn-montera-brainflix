function Profile(props) {
  if (props.currentUser === true) {
    if (props.nav === true) {
      return <div className="profilepicture--user nav__icon"></div>;
    } else {
      return <div className="profilepicture--user"></div>;
    }
  } else {
    return <div className="profilepicture"></div>;
  }
}

export default Profile;
