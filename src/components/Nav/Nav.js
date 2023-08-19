import "./Nav.scss";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import Button from "./Button";
import Profile from "../Profile/Profile";

function Nav() {
  return (
    <header className="nav">
      <a href="#" className="nav__link">
        <img className="nav__link--image" src={Logo}></img>
      </a>
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
