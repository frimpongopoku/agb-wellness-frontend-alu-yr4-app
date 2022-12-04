import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard";
import GoalCard from "../../components/GoalCard";
import Loader from "../../components/loader/Loader";
import { LOADING } from "../../redux/reducers/reducers";

function GoalListings({ edit, deleteGoals, goals, categoriesList }) {
  const navigateTo = useNavigate();

  if (goals === LOADING) return <Loader />;
  goals = goals.filter((g) => g.done === false);
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
          You do not have any goals yet. Get started...
        </p>
      </div>
    );

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
        {(goals || []).map((goal, index) => (
          <React.Fragment key={index.toString()}>
            <GoalCard
              {...goal}
              edit={() => edit(goal)}
              onClick={() => navigateTo(`/staff/view/goal/${index}`)}
              categoriesList={categoriesList}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default GoalListings;
