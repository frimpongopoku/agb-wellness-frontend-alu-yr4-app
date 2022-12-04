import React from "react";
import Loader from "../../components/loader/Loader";
import StaffCard from "../../components/StaffCard";
import { LOADING } from "../../redux/reducers/reducers";

function StaffListings({ deleteStaff, staffs }) {
  if (staffs === LOADING) return <Loader />;
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
  return (
    <div className="partition">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>STAFF </h3>
        <h3
          onClick={() => deleteStaff()}
          style={{ color: "#f47373", marginLeft: "auto" }}
          className="underline touchable-opacity"
        >
          DELETE
        </h3>
      </div>
      <div>
        {(staffs || []).map((staff, index) => (
          <StaffCard {...staff} />
        ))}
      </div>
    </div>
  );
}

export default StaffListings;
