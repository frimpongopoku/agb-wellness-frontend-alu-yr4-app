import React from "react";

function PageSkeleton({ children }) {
  return (
    <div className="page">
      <div className="blanket"> </div>
      <div className="content ">
        {children}
      </div>
    </div>
  );
}

export default PageSkeleton;
