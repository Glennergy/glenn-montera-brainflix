import "./Nav.scss";
import { useParams, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import Button from "../Button/Button";
import Profile from "../Profile/Profile";

function Nav() {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
  };

  return (
    <header className="nav">
      <div onClick={onClickHome} className="nav__link">
        <img className="nav__link--image" src={Logo}></img>
      </div>
      <div className="nav__divide">
        <form className="nav__form">
          <input
            className="nav__search"
            type="text"
            id="search"
            name="search"
            placeholder="Search"
          ></input>
        </form>
        <Button type="upload" />
        <Profile currentUser={true} nav={true} />
      </div>
    </header>
  );
}

export default Nav;
