import React from "react";
import "../index.css";

const DefaultLayout = ({ children }) => {
  return <div className="container md:px-[100px] px-[20px]">{children}</div>;
};

export default DefaultLayout;
