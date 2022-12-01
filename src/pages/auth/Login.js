import React from "react";
import TextField from "../../components/texfield/TextField";

function Login() {
  return (
    <div>
      <TextField
        label="Email addresss"
        type="email"
        placeholder="Enter email address..."
      />
      <TextField
        label="Password"
        type="password"
        placeholder="Enter your password..."
      />
    </div>
  );
}

export default Login;
