import "./style.css";
import { Header } from "./components/header";
import axios from "axios";
import { useEffect, useState } from "react";

function Test() {
  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    axios
      .get("https://catfact.ninja/fact")
      .then((b) => setCatFact(b.data.fact));
  }, []);
  function getCatFact() {
    axios
      .get("https://catfact.ninja/fact")
      .then((b) => setCatFact(b.data.fact));
  }
  return (
    <div>
      <Header />
      <h1> this is a test page for routing</h1>
      <button onClick={getCatFact}>click me</button>
      <p>{catFact}</p>
    </div>
  );
}
export default Test;
