import logo from "./logo.svg";

import { bindActionCreators } from "redux";
import { testReduxAction } from "./redux/actions/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import PageSkeleton from "./components/PageSkeleton";

function App({ testAction, testStore }) {
  return (
    <PageSkeleton>
      <div className="company">
        <h1 style={{ color: "white" }}>AGB</h1>
        <h3>LIMITED CORPORATION</h3>
        <p>Employee Health Portal</p>
      </div>
    </PageSkeleton>
  );
}

const mapStateToProps = (state) => {
  return {
    testStore: state.testStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ testAction: testReduxAction }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
