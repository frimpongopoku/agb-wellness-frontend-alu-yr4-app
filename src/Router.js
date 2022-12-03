import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { bindActionCreators } from "redux";
import App from "./App";
import Landing from "./App";
import Sidepane from "./components/sidepane/Sidepane";
import Toast from "./components/toast/Toast";
import Manager from "./pages/manager/Manager";
import Staff from "./pages/staff/Staff";
import {
  reduxSetAuthUser,
  reduxShowSidePane,
  reduxShowToast,
} from "./redux/actions/actions";
import { InternetExplorer } from "./shared/api/InternetExplorer";
import { API_WHO_AM_I } from "./shared/api/urls";

import "./shared/css/universal.css";

function Router({
  sidepane,
  toastOptions,
  toggleToast,
  toggleSidePane,
  putUserInRedux,
}) {
  const checkIfUserIsAuthenticated = () => {
    InternetExplorer.post({ url: API_WHO_AM_I }).then((response) => {
      if (!response.success)
        return console.log("ERROR - WHOAMI: ", response.error);
    });
  };
  useEffect(() => {
    checkIfUserIsAuthenticated();
  }, []);
  return (
    <>
      {sidepane && sidepane.show && (
        <Sidepane
          {...(sidepane || {})}
          close={() => toggleSidePane({ show: false, component: null })}
        />
      )}
      {toastOptions && toastOptions.show && (
        <Toast
          {...(toastOptions || {})}
          style={{ position: "absolute", bottom: 0, zIndex: "67" }}
          close={() => toggleToast({ show: false })}
        />
      )}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<App login />} />
          <Route exact path="/register" element={<App register />} />
          <Route exact path="/staff" element={<Staff />} />
          <Route exact path="/staff/create/goal" element={<Staff create />} />
          <Route exact path="/staff/edit/goal/:id" element={<Staff edit />} />
          <Route exact path="/staff/view/goal/:id" element={<Staff view />} />
          <Route exact path="/staff/goals/" element={<Staff />} />
          <Route exact path="/manager" element={<Manager />} />
          <Route exact path="/manager/add/staff" element={<Manager staff />} />
          <Route
            exact
            path="/manager/add/category"
            element={<Manager category />}
          />
          <Route
            exact
            path="/manager/edit/category/:id"
            element={<Manager editCategory />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return { sidepane: state.sidepane, toastOptions: state.toastOptions };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleToast: reduxShowToast,
      toggleSidePane: reduxShowSidePane,
      putUserInRedux: reduxSetAuthUser,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Router);
