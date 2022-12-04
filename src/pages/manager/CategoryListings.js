import React from "react";
import CategoryCard from "../../components/CategoryCard";
import Loader from "../../components/loader/Loader";
import StaffCard from "../../components/StaffCard";
import { LOADING } from "../../redux/reducers/reducers";

function CategoryListings({ edit, deleteStaff, categories }) {
  if (categories === LOADING) return <Loader />;

  if (!categories || !categories.length)
    return (
      <p
        style={{
          fontWeight: "bold",
          padding: "20px",
          textAlign: "center",
          maxWidth: "50%",
        }}
      >
        There are no categories available yet. Add some..
      </p>
    );
  return (
    <div className="partition">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>CATEGORIES </h3>
        <h3
          onClick={() => deleteStaff()}
          style={{ color: "#f47373", marginLeft: "auto" }}
          className="underline touchable-opacity"
        >
          DELETE
        </h3>
      </div>
      <div>
        {(categories || []).map((cat, index) => (
          <React.Fragment key={index.toString()}>
            <CategoryCard {...cat} edit={() => edit(cat._id)} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CategoryListings;
