import { useEffect, useState } from "react"
import { Gallery } from "./widgets/Gallery";
import { useTokens } from "./hooks/useTokens";

import "./App.css";

function App() {
  const [owner, setOwner] = useState<string>();
  const [ownerTemp, setOwnerTemp] = useState<string>();
  
  const applyOwner = () => {
    setOwner(ownerTemp);
  }

  const { tokens, updateTokens } = useTokens();

  useEffect(() => {
    if(owner) {
      updateTokens(owner);
    }
  }, [owner, updateTokens]);

  return (
    <>
      <div className="controls">
        <input value={ownerTemp} onChange={(e) => setOwnerTemp(e.target.value)} />
        <button onClick={applyOwner}>Apply</button>
      </div>
      <Gallery tokens={tokens} />
    </>
  )
}

export default App
