import React, { useState } from "react";
import Loader from "../../components/loader/Loader";
import StaffCard from "../../components/StaffCard";
import { LOADING } from "../../redux/reducers/reducers";

function StaffListings({ deleteStaff, staffs }) {
  const [selected, setSelected] = useState([]);

  if (staffs === LOADING) return <Loader loading />;
  if (!staffs || !staffs.length)
    return (
      <p
        style={{
          fontWeight: "bold",
          padding: "20px",
          textAlign: "center",
          maxWidth: "50%",
        }}
      >
        There are no staffs available yet, feel free to add them..
      </p>
    );

  const selectToDelete = (id) => {
    const rem = selected.filter((_id) => id.toString() !== _id.toString());
    const isAlreadyIn = rem.length !== selected.length;
    if (isAlreadyIn) return setSelected(rem);
    return setSelected([id, ...rem]);
  };

  return (
    <div className="partition">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>STAFF </h3>
        {selected.length && (
          <h3
            onClick={() =>
              deleteStaff({ selected, staffs: true, cb: () => setSelected([]) })
            }
            style={{ color: "#f47373", marginLeft: "auto" }}
            className="underline touchable-opacity"
          >
            DELETE ({selected.length})
          </h3>
        )}
      </div>
      <div>
        {(staffs || []).map((staff, index) => (
          <React.Fragment key={index.toString()}>
            <StaffCard
              {...staff}
              select={selectToDelete}
              isSelected={selected.includes(staff._id.toString())}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default StaffListings;
