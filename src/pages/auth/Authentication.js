import React, { useState } from "react";
import TextField from "../../components/texfield/TextField";
import Login from "./Login";
import Registration from "./Registration";

function Authentication({ tab = "login" }) {
  const [currentTab, setCurrentTab] = useState(tab);
  const TABS = {
    login: { key: "login", component: <Login /> },
    registration: { key: "registration", component: <Registration /> },
  };

  const component = TABS[currentTab].component;
  return (
    <div className="auth-root">
      <div className="auth-tab-selector">
        <h5
          className={`${
            currentTab === TABS.login.key ? "auth-tab-selected" : ""
          }`}
          onClick={() => setCurrentTab(TABS.login.key)}
        >
          LOGIN
        </h5>
        <h5
          className={`${
            currentTab === TABS.registration.key ? "auth-tab-selected" : ""
          }`}
          onClick={() => setCurrentTab(TABS.registration.key)}
        >
          REGISTRATION
        </h5>
      </div>
      <div className="auth-content-div">{component}</div>
    </div>
  );
}

export default Authentication;
