import React, { useState } from "react";
import Button from "../../components/button/Button";
import TextField from "../../components/texfield/TextField";
import { isValidEmail } from "../../shared/utils";

function Login({ showNotification }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const sendToBackend = () => {
    showNotification({});
    if (!email || !isValidEmail(email))
      return showNotification({
        show: true,
        good: false,
        message: "Please provide valid email",
      });
    if (!password)
      return showNotification({
        show: true,
        good: false,
        message: "Please provide a valid password",
      });
    console.log("I think all is well");
  };

  return (
    <div>
      <TextField
        onChange={(text) => setEmail(text)}
        label="Email address"
        type="email"
        placeholder="Enter email address..."
      />
      <TextField
        onChange={(text) => setPassword(text)}
        label="Password"
        type="password"
        placeholder="Enter your password..."
      />
      <br />
      <Button loading={loading} onClick={() => sendToBackend()}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
