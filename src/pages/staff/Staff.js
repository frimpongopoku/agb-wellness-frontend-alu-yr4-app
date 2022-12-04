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
import { reduxShowSidePane, reduxShowToast } from "../../redux/actions/actions";
import Delete from "../auth/delete/Delete";
import CreateOrEditGoal from "./CreateOrEditGoal";
import DoneListings from "./DoneListings";
import GoalListings from "./GoalListings";
import ViewGoal from "./ViewGoal";

function Staff({ toggleSidePane, create, edit, view, showNotification, user }) {
  const navigateTo = useNavigate();
  const params = useParams();
  const id = params && params.id;

  const createGoal = (id) => {
    toggleSidePane({
      show: true,
      component: (
        <CreateOrEditGoal
          showNotification={showNotification}
          toggleSidePane={toggleSidePane}
          id={id}
        />
      ),
    });
  };

  useEffect(() => {
    if (create) return createGoal();
    if (edit) return createGoal(id);
  }, []);

  const deleteGoals = () => {
    toggleSidePane({
      show: true,
      component: (
        <Delete
          count={3}
          close={() => toggleSidePane({ show: false, component: null })}
        />
      ),
    });
  };

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
            {user?.isManager && (
              <Button
                style={{ marginLeft: "auto", width: "auto" }}
                onClick={() => navigateTo("/manager")}
                accent
              >
                MANAGEMENT
              </Button>
            )}
          </div>

          <div className="content-partition">
            {view ? (
              <ViewGoal id={params && params.id} />
            ) : (
              <>
                <GoalListings
                  deleteGoals={deleteGoals}
                  edit={(id) => createGoal(id)}
                />
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
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleSidePane: reduxShowSidePane,
      showNotification: reduxShowToast,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Staff);
