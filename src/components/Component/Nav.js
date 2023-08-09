import Logo from "../../assets/logo/BrainFlix-logo.svg";
import Profile from "../../assets/images/Mohan-muruge.jpg";
import Upload from "../../assets/icons/upload.svg";
import Button from "./Button";

function Nav() {
  return (
    <header className="header">
      <a className="header__link">
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
      <img className="header__profile" src={Profile}></img>

      <Button
        className="header__upload"
        iconClassName="header__upload--icon"
        src={Upload}
        text="UPLOAD"
      />
    </header>
  );
}

export default Nav;
