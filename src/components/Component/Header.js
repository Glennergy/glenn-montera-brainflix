import logo from "../../assets/logo/BrainFlix-logo.svg";
import profile from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <a className="header__link">
        <img className="header__link--image" src={logo}></img>
      </a>
      <form className="header">
        <input
          className="header__search"
          type="text"
          id="search"
          name="search"
          value="Search"
        ></input>
      </form>
      <img className="header" src={profile}></img>
      <button className="header">
        <img className="header" src={upload}></img> UPLOAD
      </button>
    </header>
  );
}

export default Header;
