import style from "./button.module.scss";

export default function button(props) {
  return <button className={style.button}>{props.children}</button>;
}
