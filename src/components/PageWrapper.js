import React from "react";
import CornerTriangle from "./CornerTriangle";
import PageSkeleton from "./PageSkeleton";
import UserInfo from "./UserInfo";

function PageWrapper({ children, cornerContent }) {
  return (
    <PageSkeleton>
      <>
        <CornerTriangle>
          <UserInfo />
        </CornerTriangle>
        <div className="app-page">
          <div className="page-content">{children}</div>
        </div>
      </>
    </PageSkeleton>
  );
}

export default PageWrapper;
