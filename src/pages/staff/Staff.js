import React from "react";
import Button from "../../components/button/Button";
import PageTitle from "../../components/PageTitle";
import PageWrapper from "../../components/PageWrapper";
import DoneListings from "./DoneListings";
import GoalListings from "./GoalListings";

function Staff() {
  return (
    <PageWrapper cornerContent={<h3>H3 tag</h3>}>
      <>
        <PageTitle
          title="Staff"
          subtitle="Create, remove, and check off your weekly goals here"
        />
        <div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
            <Button className="add-staff-btn elevate-2">NEW GOAL</Button>
          </div>

          <div className="content-partition">
            <GoalListings />
            <DoneListings />
          </div>
        </div>
      </>
    </PageWrapper>
  );
}

export default Staff;
