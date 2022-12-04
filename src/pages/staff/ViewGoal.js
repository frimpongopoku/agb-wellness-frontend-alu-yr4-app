import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import { LOADING } from "../../redux/reducers/reducers";
import { makeStringDate } from "../../shared/utils";

function ViewGoal({ goals, id }) {
  const navigateTo = useNavigate();
  const [goal, setGoal] = useState({});
  const goalsAreLoading = goals === LOADING;
  useEffect(() => {
    if (!id || goalsAreLoading) return;
    const found = goals.find((g) => g._id.toString() === id.toString());
    if (found) setGoal(found);
  }, [id, goals]);

  if (goalsAreLoading) return <Loader loading />;
  goals = goals || [];

  const { title, description, createdAt } = goal;

  return (
    <div className="goal-root open-in-anime">
      <div style={{ padding: "15px 30px" }}>
        <h3>{title || ""}</h3>
        <p>{description || "..."}</p>
      </div>
      <div
        style={{
          background: "var(--app-yellow)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{ width: "auto" }}
          onClick={() => navigateTo("/staff/goals")}
        >
          {" "}
          <i className=" fa fa-long-arrow-left" style={{ marginRight: 5 }} />
          BACK
        </Button>

        <p
          style={{
            marginLeft: "auto",
            marginRight: 30,
            color: "black",
            fontWeight: "bold",
          }}
        >
          By {makeStringDate(createdAt)}
        </p>
      </div>
    </div>
  );
}

export default ViewGoal;
