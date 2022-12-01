import React from "react";

function CornerTriangle({ children }) {
  return (
    <div className="yellow-triangle">
      <div className="yellow-triangle-content">{children}</div>
    </div>
  );
}

export default CornerTriangle;
