import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { bindActionCreators } from "redux";
import Landing from "./App";
import Sidepane from "./components/sidepane/Sidepane";
import Toast from "./components/toast/Toast";
import Manager from "./pages/manager/Manager";
import Staff from "./pages/staff/Staff";
import { reduxShowSidePane, reduxShowToast } from "./redux/actions/actions";

import "./shared/css/universal.css";

function Router({ sidepane, toastOptions, toggleToast, toggleSidePane }) {
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
          <Route exact path="/staff" element={<Staff />} />
          <Route exact path="/staff/create/goal" element={<Landing />} />
          <Route exact path="/staff/edit/goal/:id" element={<Landing />} />
          <Route exact path="/manager" element={<Manager />} />
          <Route exact path="/manager/add/staff" element={<Landing />} />
          <Route exact path="/manager/add/category" element={<Landing />} />
          <Route
            exact
            path="/manager/edit/category/:id"
            element={<Landing />}
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
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Router);
