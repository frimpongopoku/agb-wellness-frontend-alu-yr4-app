import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard";
import GoalCard from "../../components/GoalCard";
import Loader from "../../components/loader/Loader";
import { LOADING } from "../../redux/reducers/reducers";

function GoalListings({
  edit,
  deleteGoals,
  goals,
  categoriesList,
  markAsDone,
}) {
  const [selected, setSelected] = useState([]);
  const navigateTo = useNavigate();

  if (goals === LOADING) return <Loader loading />;
  goals = goals.filter((g) => g.done === false);
  // -------------------------------------------------------
  if (!goals || !goals.length)
    return (
      <div className="partition">
        <h3>YOUR GOALS THIS WEEK </h3>
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

  const selectToDelete = (id) => {
    const rem = selected.filter((_id) => id.toString() !== _id.toString());
    const isAlreadyIn = rem.length !== selected.length;
    if (isAlreadyIn) return setSelected(rem);
    return setSelected([id, ...rem]);
  };

  return (
    <div className="partition">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>YOUR GOALS THIS WEEK </h3>

        {selected.length && (
          <h3
            onClick={() => deleteGoals({ selected, cb: () => setSelected([]) })}
            style={{ color: "#f47373", marginLeft: "auto" }}
            className="underline touchable-opacity"
          >
            DELETE ({selected.length})
          </h3>
        )}
      </div>
      <div>
        {(goals || []).map((goal, index) => (
          <React.Fragment key={index.toString()}>
            <GoalCard
              {...goal}
              edit={() => edit(goal._id)}
              onClick={() => navigateTo(`/staff/view/goal/${index}`)}
              categoriesList={categoriesList}
              markAsDone={markAsDone}
              isSelected={selected.includes(goal._id.toString())}
              select={selectToDelete}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default GoalListings;
