import { useState } from "react";
import "./topBar.css";

const TopBar = ({ onResponse }: any) => {

    const [url, setUrl] = useState("");

  const handleSubmit = () => {
    fetch(url).then((resp) => resp.json()).then(resp=>{
        onResponse(resp);
    });
  };

  return (
    <header className="TopBar">
        <label>
          Enter Url Here:
          <input type="text" name="customurl" value={url} onChange={(e)=>setUrl(e.target.value)}/>
        </label>
        <button type="button" onClick={handleSubmit}>Get Documentation</button>
    </header>
  );
};

export default TopBar;
