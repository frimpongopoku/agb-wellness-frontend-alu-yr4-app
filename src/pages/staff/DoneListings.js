import React from "react";
import GoalCard from "../../components/GoalCard";
import Loader from "../../components/loader/Loader";
import { LOADING } from "../../redux/reducers/reducers";

function DoneListings({ goals, categoriesList, undo }) {
  if (goals === LOADING) return <Loader show />;
  goals = goals.filter((g) => g.done);
  // -------------------------------------------------------
  if (!goals || !goals.length)
    return (
      <div className="partition">
        <h3>ACCOMPLISHED </h3>
        <p
          style={{
            fontWeight: "bold",
            padding: "20px",
            textAlign: "center",
          }}
        >
          You have not accomplished any of your goals yet. Now's the time...
        </p>
      </div>
    );
  // ---------------------------------------------------------
  return (
    <div className="partition">
      <h3>ACCOMPLISHED </h3>
      <div>
        {goals.map((goal, index) => (
          <React.Fragment key={index.toString()}>
            <GoalCard undo={undo} {...goal} done />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default DoneListings;
