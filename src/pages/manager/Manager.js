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
import { InternetExplorer } from "../../shared/api/InternetExplorer";
import { API_UPDATE_CATEGORY } from "../../shared/api/urls";
import Delete from "../auth/delete/Delete";
import AddOrEditCategory from "./AddOrEditCategory";
import AddStaff from "./AddStaff";
import CategoryListings from "./CategoryListings";
import StaffListings from "./StaffListings";

function Manager({
  toggleSidePane,
  staff,
  category,
  editCategory,
  showNotification,
  putStaffInRedux,
  staffs, // list of staff members
  user,
  categories,
  putCategoryInRedux,
}) {
  const navigateTo = useNavigate();
  const params = useParams();
  const id = params && params.id;

  const addStaff = () => {
    toggleSidePane({
      show: true,
      component: (
        <AddStaff
          putStaffInRedux={putStaffInRedux}
          showNotification={showNotification}
          toggleSidePane={toggleSidePane}
        />
      ),
    });
  };

  useEffect(() => {}, [categories, staffs]);

  const createCategory = (id = null) => {
    toggleSidePane({
      show: true,
      component: (
        <AddOrEditCategory
          // updateInBackend={updateInBackend}
          // putCategoryInRedux={putCategoryInRedux}
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
    if (editCategory) return createCategory(id);
  }, []);

  const doStaffDeletion = ({ ids, cb }) => {
    // delete locally
    const rem = staffs.filter((st) => !ids.includes(st._id.toString()));
    putStaffInRedux(rem);
    cb && cb();
  };
  const doCategoryDeletion = ({ ids, cb }) => {
    // delete locally
    const rem = categories.filter((st) => !ids.includes(st._id.toString()));
    putCategoryInRedux(rem);
    cb && cb();
  };

  const deleteContent = ({ selected, staffs, cb }) => {
    toggleSidePane({
      show: true,
      component: (
        <Delete
          confirm={() => {
            if (staffs) return doStaffDeletion({ ids: selected, cb });
            doCategoryDeletion({ ids: selected, cb });
          }}
          count={selected.length}
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
            <StaffListings staffs={staffs} deleteStaff={deleteContent} />
            <CategoryListings
              categories={categories}
              edit={(id) => {
                navigateTo(`/manager/edit/category/${id}`);
                createCategory(id);
              }}
              deleteCategories={deleteContent}
            />
          </div>
        </div>
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
