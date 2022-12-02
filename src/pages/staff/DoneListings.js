import React from "react";
import CategoryCard from "../../components/CategoryCard";
import GoalCard from "../../components/GoalCard";
import StaffCard from "../../components/StaffCard";

function DoneListings() {
  return (
    <div className="partition">
      <h3>ACCOMPLISHED </h3>
      <div>
        {[1, 2, 3, 4, 6, 7].map((itm, index) => (
          <GoalCard done />
        ))}
      </div>
    </div>
  );
}

export default DoneListings;
