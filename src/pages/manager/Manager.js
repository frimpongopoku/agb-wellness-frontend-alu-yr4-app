import React from "react";
import Button from "../../components/button/Button";
import PageTitle from "../../components/PageTitle";
import PageWrapper from "../../components/PageWrapper";

function Manager() {
  return (
    <PageWrapper cornerContent={<h3>H3 tag</h3>}>
      <>
        <PageTitle
          title="Manager"
          subtitle="As a manager, you can add staff and create categories here"
        />
        <div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
            <Button className="add-staff-btn elevate-2">ADD STAFF </Button>
            <Button className="add-cat-btn elevate-2">ADD CATEGORY </Button>
          </div>

          <div className="manager-partition">
            <div className="staff-area"></div>
            <div className="categories-area"></div>
          </div>
        </div>
      </>
    </PageWrapper>
  );
}

export default Manager;
