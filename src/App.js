import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { testReduxAction } from "./redux/actions/actions";
import { connect } from "react-redux";
import { useEffect } from "react";

function App({ testAction, testStore }) {
  useEffect(() => {
    testAction(
      "Welcome to your new app, redux, redux-thunk, and redux-logger are already setup. Enjoy!"
    );
  }, []);

  console.log("This is from the store", testStore);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
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
