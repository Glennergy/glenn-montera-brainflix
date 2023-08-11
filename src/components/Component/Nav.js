import "./Nav.scss";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import Button from "./Button";
import Profile from "./Profile";

function Nav() {
  return (
    <header className="header">
      <a href="#" className="header__link">
        <img className="header__link--image" src={Logo}></img>
      </a>
      <form className="header__form">
        <input
          className="header__search"
          type="text"
          id="search"
          name="search"
          placeholder="Search"
        ></input>
      </form>
      <Button type="upload" />
      <Profile currentUser={true} headerIcon />
    </header>
  );
}

export default Nav;
