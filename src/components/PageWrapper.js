import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { signOut } from "../redux/actions/actions";
import Button from "./button/Button";
import CornerTriangle from "./CornerTriangle";
import PageSkeleton from "./PageSkeleton";
import UserInfo from "./UserInfo";

function PageWrapper({ children, signOut }) {
  const navigateTo = useNavigate();
  const signUserOut = () => {
    signOut(() => navigateTo("/login"));
  };
  return (
    <PageSkeleton>
      <>
        <CornerTriangle>
          <UserInfo />
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      signOut,
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(PageWrapper);
