import React from "react";
import img1 from "../../assets/smallNav/img1.svg";
import img2 from "../../assets/smallNav/img2.svg";
import img3 from "../../assets/smallNav/img3.svg";
import DefaultLayout from "../../layouts/DefaultLayout";

const SmallNav = () => {
  return (
    <div
      style={{
        background: `linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)`,
      }}
      className="mt-[67px] py-[10px] "
    >
      <DefaultLayout>
        <div className="flex justify-between items-center px-[10px]">
          <div>
            <img className="w-[80%] lg:w-full" src={img1} alt="MBToken" />
          </div>
          <div>
            <img className="w-[80%] lg:w-full" src={img2} alt="Metamask" />
          </div>
          <div>
            <img className="w-[80%] lg:w-full" src={img3} alt="Opensea" />
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default SmallNav;
