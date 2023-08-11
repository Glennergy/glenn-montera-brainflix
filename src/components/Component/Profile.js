function Profile(props) {
  if (props.currentUser === true) {
    return <div className="profilepicture--user header__icon"></div>;
  } else {
    return <div className="profilepicture"></div>;
  }
}

export default Profile;
