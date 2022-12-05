import React from "react";

function CornerTriangle({ children }) {
  return (
    <div className="yellow-triangle slide-in-from-left">
      <div className="yellow-triangle-content">{children}</div>
    </div>
  );
}

export default CornerTriangle;
