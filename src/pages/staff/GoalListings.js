import React from "react";
import CategoryCard from "../../components/CategoryCard";
import GoalCard from "../../components/GoalCard";
import StaffCard from "../../components/StaffCard";

function GoalListings() {
  return (
    <div className="partition">
      <h3>YOUR GOALS THIS WEEK </h3>
      <div>
        {[1, 2, 3, 4, 6, 7].map((itm, index) => (
          <React.Fragment key={index.toString()}>
            <GoalCard />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default GoalListings;
