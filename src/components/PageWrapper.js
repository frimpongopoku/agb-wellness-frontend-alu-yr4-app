import React from "react";
import CornerTriangle from "./CornerTriangle";
import PageSkeleton from "./PageSkeleton";

function PageWrapper({ children, cornerContent }) {
  return (
    <PageSkeleton>
      <>
        <CornerTriangle>{cornerContent}</CornerTriangle>
        <div className="app-page">
          <div className="page-content">{children}</div>
        </div>
      </>
    </PageSkeleton>
  );
}

export default PageWrapper;
