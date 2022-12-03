import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard";
import GoalCard from "../../components/GoalCard";


function GoalListings({ edit, deleteGoals }) {
  const navigateTo = useNavigate();
  return (
    <div className="partition">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>YOUR GOALS THIS WEEK </h3>

        <h3
          onClick={() => deleteGoals()}
          style={{ color: "#f47373", marginLeft: "auto" }}
          className="underline touchable-opacity"
        >
          DELETE
        </h3>
      </div>
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
