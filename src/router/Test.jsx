import "../style.css";
import { Header } from "../components/header";
import axios from "axios";
import React, { useState, useEffect } from "react";

// 1. Custom Hook (starts with 'use')
function useTainanData() {
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetch(
      "https://soa.tainan.gov.tw/Api/Service/Get/8bafa373-c2b9-433b-9d3f-4b96845ee66f",
    )
      .then((r) => r.json())
      .then((data) => {
        setRes(data);
        setLoading(false);
      });
  }, []);

  return { loading, res };
}

// 2. Child Memo Component
const Memo = React.memo(({ startNumber }) => {
  return <div>Current Memo Number: {startNumber}</div>;
});

// 3. Top-level Component export
export function Test() {
  const { loading, res } = useTainanData(); // Call the custom hook here
  const [catFact, setCatFact] = useState("");
  const [startNumber, setStartNumber] = useState(0);

  function getCatFact() {
    axios
      .get("https://catfact.ninja/fact")
      .then((b) => setCatFact(b.data.fact));
  }

  return (
    <div>
      <Header />
      <h1>This is a test page for routing</h1>

      <button onClick={getCatFact}>click me</button>
      <p>{catFact}</p>

      <div>
        <button onClick={() => setStartNumber(0)}>0</button>
        <button onClick={() => setStartNumber(100)}>100</button>
        <button onClick={() => setStartNumber(500)}>500</button>
        <Memo startNumber={startNumber} />
      </div>

      {loading ? (
        "loading..."
      ) : (
        <div>
          {res?.data?.map((d, i) => (
            <div key={d["院所名稱"] || i}>{d["院所名稱"]}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Test;
