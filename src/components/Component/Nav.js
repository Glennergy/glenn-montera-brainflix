import "./Nav.scss";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import Button from "./Button";
import Profile from "./Profile";

function Nav() {
  return (
    <header className="nav">
      <a href="#" className="nav__link">
        <img className="nav__link--image" src={Logo}></img>
      </a>
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
    </header>
  );
}

export default Nav;
