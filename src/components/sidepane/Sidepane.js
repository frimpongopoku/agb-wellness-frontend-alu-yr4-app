import React from "react";
import "./sidepane.css";
function Sidepane({
  component,
  show,
  close,
  closeWithBackground,
  blanketStyle,
}) {
  if (!show) return <></>;
  return (
    <div className="side-root">
      <div className="side-blanket" style={blanketStyle || {}}></div>
      <div className="side-content ">
        <div
          onClick={() => {
            if (!closeWithBackground) return;
            close && close();
          }}
          style={{
            height: "100vh",
            width: "100vw",
            position: "absolute",
            left: 0,
          }}
        ></div>
        <div className="side-card slide-from-left-anime">{component}</div>
      </div>
    </div>
  );
}

export default Sidepane;
