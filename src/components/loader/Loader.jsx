import React from "react";
import mask from "../../assets/modal/mask.png";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#A02279]">
      <div className={`${styles.container} flex w-fit`}>
        <img src={mask} alt="mask" />
      </div>
    </div>
  );
};

export default Loader;
