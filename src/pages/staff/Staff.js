import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { bindActionCreators } from "redux";
import Button from "../../components/button/Button";
import PageTitle from "../../components/PageTitle";
import PageWrapper from "../../components/PageWrapper";
import { reduxShowSidePane } from "../../redux/actions/actions";
import CreateOrEditGoal from "./CreateOrEditGoal";
import DoneListings from "./DoneListings";
import GoalListings from "./GoalListings";
import ViewGoal from "./ViewGoal";

function Staff({ toggleSidePane, create, edit, view }) {
  const params = useParams();
  const id = params && params.id;

  const createGoal = (id) => {
    toggleSidePane({
      show: true,
      component: <CreateOrEditGoal toggleSidePane={toggleSidePane} id={id} />,
    });
  };

  useEffect(() => {
    if (create) return createGoal();
    if (edit) return createGoal(id);
  }, []);

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
              onClick={() => createGoal()}
              className="add-staff-btn elevate-2"
            >
              NEW GOAL
            </Button>
          </div>

          <div className="content-partition">
            {view ? (
              <ViewGoal id={params && params.id} />
            ) : (
              <>
                <GoalListings edit={(id) => createGoal(id)} />
                <DoneListings />
              </>
            )}
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
