function Profile(props) {
  if (props.currentuser == true) {
    return <div className="profilepicture--user"></div>;
  } else {
    return <div className="profilepicture"></div>;
  }
}

export default Profile;
