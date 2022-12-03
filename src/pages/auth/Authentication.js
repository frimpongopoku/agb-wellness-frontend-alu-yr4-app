import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "../../components/texfield/TextField";
import { reduxSetAuthUser, reduxShowToast } from "../../redux/actions/actions";
import Login from "./Login";
import Registration from "./Registration";

function Authentication({ tab = "login", showNotification, putUserInRedux }) {
  const [currentTab, setCurrentTab] = useState(tab);
  const TABS = {
    login: {
      key: "login",
      component: (
        <Login
          putUserInRedux={putUserInRedux}
          showNotification={showNotification}
        />
      ),
    },
    registration: {
      key: "registration",
      component: (
        <Registration
          putUserInRedux={putUserInRedux}
          showNotification={showNotification}
        />
      ),
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
      putUserInRedux: reduxSetAuthUser,
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(Authentication);
