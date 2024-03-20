import React from "react";

const MainContainer = ({ children, className }) => {
  return <div className={`w-[1220px] ${className}`}>{children}</div>;
};

export default MainContainer;
