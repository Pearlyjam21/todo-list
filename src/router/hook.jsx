import React from "react";
import { Header } from "../components/header";
import { useTainanData } from "../hooks/useTainanData"; // 1. Import hook

export function HookPage() {
  // 2. Call hook inside component to get data
  const { loading, res } = useTainanData();

  // 3. Render JSX UI
  return (
    <>
      <Header />
      {loading ? (
        "loading..."
      ) : (
        <div>
          {res?.data?.map((d, index) => (
            <div key={d["院所名稱"] || index}>{d["院所名稱"]}</div>
          ))}
        </div>
      )}
    </>
  );
}

export default HookPage;
