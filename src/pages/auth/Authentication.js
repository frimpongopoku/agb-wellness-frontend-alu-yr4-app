import React from "react";
import TextField from "../../components/texfield/TextField";
import Login from "./Login";

function Authentication() {
  return (
    <div className="auth-root">
      <div className="auth-tab-selector">
        <h5 className="auth-tab-selected">LOGIN</h5>
        <h5>REGISTRATION</h5>
      </div>
      <div className="auth-content-div">
        <Login />
      </div>
    </div>
  );
}

export default Authentication;
