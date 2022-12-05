import React, { useState } from "react";
import Button from "../../components/button/Button";
import TextField from "../../components/texfield/TextField";
import { InternetExplorer } from "../../shared/api/InternetExplorer";
import { API_LOGIN } from "../../shared/api/urls";
import { isValidEmail } from "../../shared/utils";

function Login({ showNotification }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const setError = (message) => {
    showNotification({ show: true, good: false, message });
  };
  const sendToBackend = () => {
    showNotification({});
    if (!email || !isValidEmail(email))
      return setError("Please provide valid email");
    if (!password) return setError("Please provide a valid password");
    setLoading(true);
    InternetExplorer.post({
      url: API_LOGIN,
      body: { email, password },
    })
      .then((response) => {
        setLoading(false);
        if (!response.success) return setError(response.error);
        window.location.reload();
      })
      .catch((e) => {
        console.log("Error:", e.toString());
        setError(e.toString());
      });
  };

  return (
    <div>
      <TextField
        onChange={(text) => setEmail(text)}
        label="Email address"
        type="email"
        placeholder="Enter email address..."
        value={email}
      />
      <TextField
        onChange={(text) => setPassword(text)}
        label="Password"
        type="password"
        placeholder="Enter your password..."
        value={password}
      />
      <br />
      <Button loading={loading} onClick={() => sendToBackend()}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
