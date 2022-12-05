import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import App from "./App";
import Landing from "./App";
import Sidepane from "./components/sidepane/Sidepane";
import Toast from "./components/toast/Toast";
import Forbidden from "./pages/errors/Forbidden";
import NotAuthorized from "./pages/errors/NotAuthorized";
import NotFound from "./pages/errors/NotFound";
import Manager from "./pages/manager/Manager";
import Staff from "./pages/staff/Staff";
import {
  reduxSetAuthUser,
  reduxSetCategories,
  reduxSetGoals,
  reduxSetStaffs,
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
  putGoalsInRedux,
  putStaffsInRedux,
  putCategoriesInRedux,
}) {
  const checkIfUserIsAuthenticated = () => {
    InternetExplorer.post({ url: API_WHO_AM_I }).then((response) => {
      if (!response.success) {
        putUserInRedux(null);
        return console.log("ERROR - WHOAMI: ", response.error);
      }
      const { goals, staffs, categories, user } = response.data || {};

      putUserInRedux(user);
      putGoalsInRedux(goals);
      putStaffsInRedux(staffs);
      putCategoriesInRedux(categories);
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

          <Route exact path="/403" element={<Forbidden />} />
          <Route exact path="/401" element={<NotAuthorized />} />
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
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    sidepane: state.sidepane,
    toastOptions: state.toastOptions,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleToast: reduxShowToast,
      toggleSidePane: reduxShowSidePane,
      putUserInRedux: reduxSetAuthUser,
      putGoalsInRedux: reduxSetGoals,
      putCategoriesInRedux: reduxSetCategories,
      putStaffsInRedux: reduxSetStaffs,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Router);
