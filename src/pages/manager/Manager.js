import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import PageTitle from "../../components/PageTitle";
import PageWrapper from "../../components/PageWrapper";
import {
  reduxSetCategories,
  reduxSetStaffs,
  reduxShowSidePane,
  reduxShowToast,
} from "../../redux/actions/actions";
import { LOADING } from "../../redux/reducers/reducers";
import Delete from "../auth/delete/Delete";
import AddOrEditCategory from "./AddOrEditCategory";
import AddStaff from "./AddStaff";
import CategoryListings from "./CategoryListings";
import StaffListings from "./StaffListings";

function Manager({
  toggleSidePane,
  staff,
  category,
  edit,
  showNotification,
  putStaffInRedux,
  staffs, // list of staff members
  user,
  categories,
  putCategoryInRedux,
}) {
  const navigateTo = useNavigate();
  const params = useParams();

  const addStaff = () => {
    toggleSidePane({
      show: true,
      component: (
        <AddStaff
          staffs={staffs}
          putStaffInRedux={(stf) => putStaffInRedux([stf, ...staffs])}
          showNotification={showNotification}
          toggleSidePane={toggleSidePane}
        />
      ),
    });
  };

  const createCategory = (id = null) => {
    toggleSidePane({
      show: true,
      component: (
        <AddOrEditCategory
          categories={categories}
          putCategoryInRedux={(cat) => putCategoryInRedux([cat, ...categories])}
          showNotification={showNotification}
          toggleSidePane={toggleSidePane}
          id={id}
        />
      ),
    });
  };

  useEffect(() => {
    if (user === LOADING) return;
    if (!user?.isManager) return navigateTo("/staff"); // If user tries to enter into the manager page and they are not a manager, return theme to the staff portal
  }, [user]);

  useEffect(() => {
    if (staff) return addStaff();
    if (category) return createCategory();
    if (edit) return createCategory(params && params.id);
  }, []);

  const deleteStaff = () => {
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
    <PageWrapper>
      <>
        <PageTitle
          title="Manager"
          subtitle="As a manager, you can add staff and create categories here"
        />
        <div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
            <Button
              className="add-staff-btn elevate-2"
              onClick={() => addStaff()}
            >
              ADD STAFF{" "}
            </Button>
            <Button
              className="add-cat-btn elevate-2"
              onClick={() => createCategory()}
            >
              ADD CATEGORY{" "}
            </Button>
            <Button
              style={{ marginLeft: "auto", width: "auto" }}
              onClick={() => navigateTo("/staff")}
              accent
            >
              MY GOALS
            </Button>
          </div>

          <div className="content-partition">
            <StaffListings staffs={staffs} deleteStaff={deleteStaff} />
            <CategoryListings
              categories={categories}
              edit={(id) => createCategory(id)}
              deleteStaff={deleteStaff}
            />
          </div>
        </div>
        <Loader loading>Page is loading...</Loader>
      </>
    </PageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    staffs: state.staffs,
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleSidePane: reduxShowSidePane,
      showNotification: reduxShowToast,
      putStaffInRedux: reduxSetStaffs,
      putCategoryInRedux: reduxSetCategories,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Manager);
