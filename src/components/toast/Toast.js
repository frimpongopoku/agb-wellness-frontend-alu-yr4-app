import React from "react";
import "./toast.css";
function Toast({ good, message, text, show }) {
  if (!show) return <></>;
  return (
    <div className={` open-in-anime toast-root ${good ? "good" : "bad"}`}>
      <i className={`fa ${good ? "fa-check-circle" : "fa-times"}`} />
      <p>{message || text || "Notification Message..."}</p>
      <i
        className=" fa fa-times touchable-opacity"
        style={{ marginLeft: "auto" }}
      />
    </div>
  );
}

export default Toast;
