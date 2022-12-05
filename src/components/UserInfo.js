import React from "react";
import { LOADING } from "../redux/reducers/reducers";

function UserInfo({ user }) {
  user = user === LOADING || !user ? {} : user;
  const { firstName, roles, image } = user;

  return (
    <div className="user-info">
      <img src={image || ""} alt = "user media"/>
      <h3>{firstName || "..."}</h3>
      <p>{(roles || []).map((role) => `@${role.name} `)}</p>
    </div>
  );
}

export default UserInfo;
