import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../components/button/Button";
import PageTitle from "../../components/PageTitle";
import PageWrapper from "../../components/PageWrapper";
import { reduxShowSidePane } from "../../redux/actions/actions";
import DoneListings from "./DoneListings";
import GoalListings from "./GoalListings";

function Staff({ toggleSidePane }) {
  return (
    <PageWrapper cornerContent={<h3>H3 tag</h3>}>
      <>
        <PageTitle
          title="Staff"
          subtitle="Create, remove, and check off your weekly goals here"
        />
        <div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
            <Button
              onClick={() =>
                toggleSidePane({
                  show: true,
                  component: <h1>Dont konw meerhn</h1>,
                })
              }
              className="add-staff-btn elevate-2"
            >
              NEW GOAL
            </Button>
          </div>

          <div className="content-partition">
            <GoalListings />
            <DoneListings />
          </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Staff);
