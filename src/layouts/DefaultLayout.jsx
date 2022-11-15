import React from "react";
import "../index.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="container lg:px-[100px] md:px-[32px] px-[20px] ">
      {children}
    </div>
  );
};

export default DefaultLayout;
