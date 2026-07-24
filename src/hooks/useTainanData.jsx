import { useState, useEffect } from "react";

// Exporting the hook function
export function useTainanData() {
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

  // Returns data/state (NOT JSX!)
  return { loading, res };
}
