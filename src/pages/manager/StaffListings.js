import React from "react";
import StaffCard from "../../components/StaffCard";

function StaffListings({ deleteStaff }) {
  return (
    <div className="partition">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>STAFF </h3>
        <h3
          onClick={() => deleteStaff()}
          style={{ color: "#f47373", marginLeft: "auto" }}
          className="underline touchable-opacity"
        >
          DELETE
        </h3>
      </div>
      <div>
        {[1, 2, 3, 4, 6, 7].map((itm, index) => (
          <StaffCard />
        ))}
      </div>
    </div>
  );
}

export default StaffListings;
