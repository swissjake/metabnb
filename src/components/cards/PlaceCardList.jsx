import React from "react";
import { data } from "../place";
import HomeCards from "./HomeCards";

const PlaceCardList = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-[24px] gap-x-[24px] justify-items-center mb-[92px]">
        {data?.map((item, i) => (
          <HomeCards key={i} img={item} />
        ))}
      </div>
    </div>
  );
};

export default PlaceCardList;
