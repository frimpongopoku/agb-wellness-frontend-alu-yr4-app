import React from "react";
import StaffCard from "../../components/StaffCard";

function StaffListings() {
  return (
    <div className="partition">
      <h3>STAFF </h3>
      <div>
        {[1, 2, 3, 4, 6, 7].map((itm, index) => (
          <StaffCard />
        ))}
      </div>
    </div>
  );
}

export default StaffListings;
