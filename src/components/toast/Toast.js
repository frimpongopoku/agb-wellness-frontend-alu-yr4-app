import React from "react";
import "./toast.css";
function Toast({ good, message, text, show, style, close }) {
  if (!show) return <></>;
  return (
    <div
      className={` open-in-anime toast-root ${good ? "good" : "bad"}`}
      style={style || {}}
    >
      <i className={`fa ${good ? "fa-check-circle" : "fa-times"}`} />
      <p>{message || text || "Notification Message..."}</p>
      <i
        className=" fa fa-times touchable-opacity"
        style={{ marginLeft: "auto" }}
        onClick={() => close && close()}
      />
    </div>
  );
}

export default Toast;
