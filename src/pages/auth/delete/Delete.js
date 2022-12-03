import React from "react";
import Button from "../../../components/button/Button";

function Delete({ count, confirm, close }) {
  return (
    <div style={{ padding: "50px 15px" }}>
      <h1>Delete Confirmation</h1>
      <br />
      <p style={{ color: "black" }}>
        Are you sure you want to delete <b>({count})</b>{" "}
        {count === 1 ? "item" : "items"}
      </p>

      <div style={{ marginTop: 30 }}>
        <Button
          onClick={() => {
            close && close();
          }}
          style={{ background: "var(--app-red)" }}
        >
          CANCEL
        </Button>
        <Button
          onClick={() => {
            confirm && confirm();
            close && close();
          }}
          style={{ marginTop: 10 }}
        >
          YES, GO AHEAD
        </Button>
      </div>
    </div>
  );
}

export default Delete;
