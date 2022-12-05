import React, { useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import Loader from "../../components/loader/Loader";
import { LOADING } from "../../redux/reducers/reducers";

function CategoryListings({ edit, deleteCategories, categories }) {
  const [selected, setSelected] = useState([]);

  const selectToDelete = (id) => {
    const rem = selected.filter((_id) => id.toString() !== _id.toString());
    const isAlreadyIn = rem.length !== selected.length;
    if (isAlreadyIn) return setSelected(rem);
    return setSelected([id, ...rem]);
  };

  if (categories === LOADING) return <Loader loading />;

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
        {selected.length && (
          <h3
            onClick={() =>
              deleteCategories({ selected, cb: () => setSelected([]) })
            }
            style={{ color: "#f47373", marginLeft: "auto" }}
            className="underline touchable-opacity"
          >
            DELETE ({selected.length})
          </h3>
        )}
      </div>
      <div>
        {(categories || []).map((cat, index) => (
          <React.Fragment key={index.toString()}>
            <CategoryCard
              {...cat}
              edit={() => edit(cat._id)}
              select={selectToDelete}
              isSelected={selected.includes(cat._id.toString())}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CategoryListings;
