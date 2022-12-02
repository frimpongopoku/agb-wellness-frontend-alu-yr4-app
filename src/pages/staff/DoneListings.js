import React from "react";
import GoalCard from "../../components/GoalCard";


function DoneListings() {
  return (
    <div className="partition">
      <h3>ACCOMPLISHED </h3>
      <div>
        {[1, 2, 3, 4, 6, 7].map((itm, index) => (
          <React.Fragment key={index.toString()}>
            <GoalCard done />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default DoneListings;
