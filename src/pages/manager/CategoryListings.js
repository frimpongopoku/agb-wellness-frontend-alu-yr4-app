import React from "react";
import CategoryCard from "../../components/CategoryCard";
import StaffCard from "../../components/StaffCard";

function CategoryListings() {
  return (
    <div className="partition">
      <h3>CATEGORIES </h3>
      <div>
        {[1, 2, 3, 4, 6, 7].map((itm, index) => (
          <CategoryCard />
        ))}
      </div>
    </div>
  );
}

export default CategoryListings;
