import { bindActionCreators } from "redux";
import { reduxShowSidePane, testReduxAction } from "./redux/actions/actions";
import { connect } from "react-redux";
import PageSkeleton from "./components/PageSkeleton";
import Button from "./components/button/Button";
import Authentication from "./pages/auth/Authentication";

function App({ toggleSidePane }) {
  const showLoginPage = () => {
    toggleSidePane({
      show: true,
      component: <Authentication tab="login" />,
      closeWithBackground: true,
    });
  };
  return (
    <PageSkeleton>
      <>
        <div className="company">
          <h1 style={{ color: "white" }}>AGB</h1>
          <h3>LIMITED CORPORATION</h3>
          <p>Employee Health Portal</p>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
            <Button
              onClick={() => showLoginPage()}
              accent
              style={{ marginRight: 20 }}
            >
              LOGIN
            </Button>
            <Button accent>REGISTER</Button>
          </div>
        </div>
      </>
    </PageSkeleton>
  );
}

const mapStateToProps = (state) => {
  return {
    testStore: state.testStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleSidePane: reduxShowSidePane }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
