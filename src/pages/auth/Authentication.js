import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "../../components/texfield/TextField";
import { reduxShowToast } from "../../redux/actions/actions";
import Login from "./Login";
import Registration from "./Registration";

function Authentication({ tab = "login", showNotification }) {
  const [currentTab, setCurrentTab] = useState(tab);
  const TABS = {
    login: {
      key: "login",
      component: <Login showNotification={showNotification} />,
    },
    registration: {
      key: "registration",
      component: <Registration showNotification={showNotification} />,
    },
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showNotification: reduxShowToast,
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(Authentication);
