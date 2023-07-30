function Button(props) {
  return (
    <button className={props.className}>
      <img className={props.iconClassName} src={props.iconPath}></img>
      {props.text}
    </button>
  );
}

export default Button;
