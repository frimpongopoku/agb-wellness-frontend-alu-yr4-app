import React from "react";
import "./loader.css";
function Loader({ children, text, loading, style }) {
  if (!loading) return <></>;
  return (
    <div className="app-loader">
      <i className="fa fa-spinner fa-spin" style={style || {}} />
      <span>{children || text}</span>
    </div>
  );
} 

export default Loader;
