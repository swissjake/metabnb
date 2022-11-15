import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import HomeCards from "./HomeCards";
import { data } from "../inspirationData";

const CardList = () => {
  return (
    <DefaultLayout>
      <div className=" mt-[32px] md:mt-[58px]">
        <header className=" text-[1.5rem] md:text-[2rem] lg:text-[3rem] text-[#000] font-[700] text-center mb-[45px]">
          Inspiration for your next adventure
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-[24px] gap-x-[24px] justify-items-center">
          {data?.map((item, i) => (
            <HomeCards key={i} img={item} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CardList;
