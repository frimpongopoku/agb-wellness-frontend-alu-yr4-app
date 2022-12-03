import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function ViewGoal() {
  const navigateTo = useNavigate();
  return (
    <div className="goal-root open-in-anime">
      <div style={{ padding: "15px 30px" }}>
        <h3>GOAL TITLE</h3>
        <p>
          This is the goal description. YOu are meant to write something nice
          here, that describes teh goal appropriately. This card looks really
          light, nice!
        </p>
      </div>
      <div style={{ background: "var(--app-yellow)" }}>
        <Button style={{ width: "auto" }} onClick={() => navigateTo("/staff/goals")}>
          {" "}
          <i className=" fa fa-long-arrow-left" style={{ marginRight: 5 }} />
          BACK
        </Button>
      </div>
    </div>
  );
}

export default ViewGoal;
