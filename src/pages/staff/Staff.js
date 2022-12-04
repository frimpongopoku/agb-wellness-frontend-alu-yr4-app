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
import {
  reduxSetGoals,
  reduxShowSidePane,
  reduxShowToast,
} from "../../redux/actions/actions";
import { InternetExplorer } from "../../shared/api/InternetExplorer";
import { API_UPDATE_GOAL } from "../../shared/api/urls";
import Delete from "../auth/delete/Delete";
import CreateOrEditGoal from "./CreateOrEditGoal";
import DoneListings from "./DoneListings";
import GoalListings from "./GoalListings";
import ViewGoal from "./ViewGoal";

function Staff({
  toggleSidePane,
  create,
  edit,
  view,
  showNotification,
  user,
  putGoalInRedux,
  goals,
  categoriesList,
}) {
  const navigateTo = useNavigate();
  const params = useParams();
  const id = params && params.id;

  const createGoal = (id) => {
    toggleSidePane({
      show: true,
      component: (
        <CreateOrEditGoal
          putGoalInRedux={putGoalInRedux}
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

  const updateInBackend = ({ data, id }) => {
    InternetExplorer.post({ url: API_UPDATE_GOAL, body: { data, id } }).then(
      (response) => {
        console.log("lets see response innit", response);
        if (!response.success)
          return console.log("ERROR - GOAL - UPDATE: ", response.error);
      }
    );
  };
  const markAsDone = ({ id, undo }) => {
    const items = goals || [];
    let found = items.find((g) => g._id.toString() === id.toString());
    const remaining = items.filter((g) => g._id.toString() !== id.toString());
    found = { ...found, done: undo ? false : true };
    putGoalInRedux([found, ...remaining]);
    updateInBackend({ data: { done: undo ? false : true }, id });
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
                  markAsDone={markAsDone}
                  categoriesList={categoriesList}
                  goals={goals}
                  deleteGoals={deleteGoals}
                  edit={(id) => createGoal(id)}
                />
                <DoneListings
                  undo={markAsDone}
                  goals={goals}
                  categoriesList={categoriesList}
                />
              </>
            )}
          </div>
        </div>
      </>
    </PageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    goals: state.goals,
    categoriesList: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleSidePane: reduxShowSidePane,
      showNotification: reduxShowToast,
      putGoalInRedux: reduxSetGoals,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Staff);
