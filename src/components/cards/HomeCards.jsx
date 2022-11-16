import React from "react";
import img1 from "../../assets/inspiration/img1.svg";
import star from "../../assets/inspiration/star.svg";

const HomeCards = ({ img }) => {
  return (
    <div className="">
      <div
        style={{
          background: `linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)`,
        }}
        className="border border-[#D7D7D7] rounded-[15px] max-w-[292px] transition-all duration-200 xl:hover:scale-105 ease-in-out"
      >
        <div className="p-[16px]">
          <img src={img} alt="" />
        </div>
        <div className="text-[#434343] px-[16px] pb-[16px] space-y-[10px]">
          <div className="flex items-center justify-between">
            <p className="text-[12px]">Desert king</p>
            <p className="font-[700] text-[12px]">1MBT per night</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[12px]">2345km away</p>
            <p className="text-[12px]">available for 2weeks stay</p>
          </div>
          <div className="flex items-center gap-x-[8px]">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <img src={star} alt={star} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
