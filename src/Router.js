import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { bindActionCreators } from "redux";
import Landing from "./App";
import Sidepane from "./components/sidepane/Sidepane";
import Manager from "./pages/manager/Manager";
import Staff from "./pages/staff/Staff";
import "./shared/css/universal.css";

function Router({ sidepane }) {
  return (
    <>
      {sidepane && sidepane.show && <Sidepane {...(sidepane || {})} />}
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
  return { sidepane: state.sidepane };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({}, dispatch);
// };
export default connect(mapStateToProps)(Router);
