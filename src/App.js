import { bindActionCreators } from "redux";
import { reduxShowSidePane, testReduxAction } from "./redux/actions/actions";
import { connect } from "react-redux";
import PageSkeleton from "./components/PageSkeleton";
import Button from "./components/button/Button";
import Authentication from "./pages/auth/Authentication";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOADING } from "./redux/reducers/reducers";

function App({ toggleSidePane, login, register, user }) {
  const navigateTo = useNavigate();
  const needsAuthentication = !user || user === LOADING;
  const redirectIfAuthenticated = () => {
    if (!user || user === "LOADING") return;
    if (user.isManager) return navigateTo("/manager");
    navigateTo("/staff");
  };

  const showLoginPage = () => {
    redirectIfAuthenticated();
    if (needsAuthentication)
      toggleSidePane({
        show: true,
        component: <Authentication tab="login" />,
        closeWithBackground: true,
        blanketStyle: { opacity: 0 },
      });
  };

  const showRegistrationPage = () => {
    redirectIfAuthenticated();
    if (needsAuthentication)
      toggleSidePane({
        show: true,
        component: <Authentication tab="registration" />,
        closeWithBackground: true,
        blanketStyle: { opacity: 0 },
      });
  };

  useEffect(() => {
    if (login) return showLoginPage();
    if (register) return showRegistrationPage();
  }, [user]);

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
            <Button onClick={() => showRegistrationPage()} accent>
              REGISTER
            </Button>
          </div>
        </div>
      </>
    </PageSkeleton>
  );
}

const mapStateToProps = (state) => {
  return {
    testStore: state.testStore,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleSidePane: reduxShowSidePane }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
