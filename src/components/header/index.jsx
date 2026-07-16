import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
export function Header() {
  return (
    <header>
      <img src={reactLogo}></img>
      <Link to={"/"}>
        <button>App</button>
      </Link>
      <Link to={"/test"}>
        <button>Test</button>
      </Link>
    </header>
  );
}
export default { Header };
