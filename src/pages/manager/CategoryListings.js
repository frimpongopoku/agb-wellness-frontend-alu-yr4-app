import React from "react";
import CategoryCard from "../../components/CategoryCard";
import StaffCard from "../../components/StaffCard";

function CategoryListings({ edit, deleteStaff }) {
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
        {[1, 2, 3, 4, 6, 7].map((itm, index) => (
          <CategoryCard edit={() => edit(itm)} />
        ))}
      </div>
    </div>
  );
}

export default CategoryListings;
