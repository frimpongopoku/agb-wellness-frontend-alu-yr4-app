import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { signOut } from "../redux/actions/actions";
import { LOADING } from "../redux/reducers/reducers";
import Button from "./button/Button";
import CornerTriangle from "./CornerTriangle";
import PageSkeleton from "./PageSkeleton";
import UserInfo from "./UserInfo";

function PageWrapper({ children, signOut, user }) {
  const navigateTo = useNavigate();
  const signUserOut = () => {
    signOut(() => navigateTo("/login"));
  };
  const userIsLoading = user === LOADING;
  if (!userIsLoading && !user) navigateTo("/401");

  return (
    <PageSkeleton>
      <>
        <CornerTriangle>
          <UserInfo user={user} />
        </CornerTriangle>
        <div className="app-page">
          <div className="top-bins">
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Button
                onClick={() => signUserOut()}
                style={{ marginLeft: 15 }}
                accent
              >
                Sign Out
              </Button>
            </div>
          </div>
          <div className="page-content">{children}</div>
        </div>
      </>
    </PageSkeleton>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      signOut,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
