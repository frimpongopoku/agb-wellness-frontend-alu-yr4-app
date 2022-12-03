import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard";
import GoalCard from "../../components/GoalCard";
import StaffCard from "../../components/StaffCard";

function GoalListings({ edit }) {
  const navigateTo = useNavigate();
  return (
    <div className="partition">
      <h3>YOUR GOALS THIS WEEK </h3>
      <div>
        {[1, 2, 3, 4, 6, 7].map((itm, index) => (
          <React.Fragment key={index.toString()}>
            <GoalCard
              edit={() => edit(itm)}
              onClick={() => navigateTo(`/staff/view/goal/${index}`)}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default GoalListings;
