import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import PageTitle from "../../components/PageTitle";
import PageWrapper from "../../components/PageWrapper";
import { reduxShowSidePane } from "../../redux/actions/actions";
import Delete from "../auth/delete/Delete";
import AddOrEditCategory from "./AddOrEditCategory";
import AddStaff from "./AddStaff";
import CategoryListings from "./CategoryListings";
import StaffListings from "./StaffListings";

function Manager({ toggleSidePane, staff, category, edit }) {
  const params = useParams();
  const addStaff = () => {
    toggleSidePane({
      show: true,
      component: <AddStaff toggleSidePane={toggleSidePane} />,
    });
  };
  const createCategory = (id = null) => {
    toggleSidePane({
      show: true,
      component: <AddOrEditCategory toggleSidePane={toggleSidePane} id={id} />,
    });
  };

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
          </div>

          <div className="content-partition">
            <StaffListings deleteStaff={deleteStaff} />
            <CategoryListings
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
