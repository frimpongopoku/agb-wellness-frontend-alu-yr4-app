import React from "react";
import Button from "../../components/button/Button";
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
      <Button>Sign In</Button>
    </div>
  );
}

export default Login;
