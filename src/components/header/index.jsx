import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import dayjs from "dayjs";
export function Header() {
  const today = dayjs().format("dddd, MMMM D, YYYY");
  return (
    <header>
      <span>{today}</span> <img src={reactLogo}></img>
      <Link to={"/"}>
        <button>App</button>
      </Link>
      <Link to={"/test"}>
        <button>Test</button>
      </Link>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
    </header>
  );
}
export default { Header };
