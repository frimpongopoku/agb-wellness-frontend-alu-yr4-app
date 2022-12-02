import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../components/button/Button";
import PageTitle from "../../components/PageTitle";
import PageWrapper from "../../components/PageWrapper";
import Toast from "../../components/toast/Toast";
import { reduxShowSidePane } from "../../redux/actions/actions";
import AddCategory from "./AddCategory";
import AddStaff from "./AddStaff";
import CategoryListings from "./CategoryListings";
import StaffListings from "./StaffListings";

function Manager({ toggleSidePane }) {
  return (
    <PageWrapper cornerContent={<h3>H3 tag</h3>}>
      <>
        <PageTitle
          title="Manager"
          subtitle="As a manager, you can add staff and create categories here"
        />
        <div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
            <Button
              className="add-staff-btn elevate-2"
              onClick={() =>
                toggleSidePane({
                  show: true,
                  component: <AddStaff toggleSidePane={toggleSidePane} />,
                })
              }
            >
              ADD STAFF{" "}
            </Button>
            <Button
              className="add-cat-btn elevate-2"
              onClick={() =>
                toggleSidePane({
                  show: true,
                  component: <AddCategory toggleSidePane={toggleSidePane} />,
                })
              }
            >
              ADD CATEGORY{" "}
            </Button>
          </div>

          <div className="content-partition">
            <StaffListings />
            <CategoryListings />
          </div>
        </div>
        <Toast good show />
      </>
    </PageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleSidePane: reduxShowSidePane,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Manager);
