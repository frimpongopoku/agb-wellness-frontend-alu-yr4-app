import React from "react";

function PageTitle({ title, subtitle }) {
  return (
    <div className="page-title">
      <h2>{title || "Page title is here"}</h2>
      <p>
        {subtitle || "And here is the subtext that is meant to say something"}
      </p>
    </div>
  );
}

export default PageTitle;
