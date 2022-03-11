import { useState } from "react";
import "./topBar.css";

const TopBar = ({ onResponse }: any) => {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        onResponse(resp);
      });
  };

  return (
    <header className="py-3 mb-3 border-bottom sticky-top navbar-light bg-light">
      <div className="container-fluid d-grid gap-3 align-items-center">
        <div className="d-flex align-items-center">
          <div className="w-100 me-3">
            <input
              className="form-control"
              type="text"
              name="customurl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL here..."
            />
          </div>
            <div className="w-20">
            <button className="btn btn-primary" type="button" onClick={handleSubmit}>
            Get
          </button>
                </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

/***
 * <div className="w-100 me-3">
          Enter Url Here:
          <input
            className="form-control"
            type="text"
            name="customurl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="btn btn-primary" type="button" onClick={handleSubmit}>
            Get Documentation
          </button>
        </div>
 */
