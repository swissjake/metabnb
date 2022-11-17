import React from "react";
import location from "../assets/place/location.svg";
import PlaceCardList from "../components/cards/PlaceCardList";
import DefaultLayout from "../layouts/DefaultLayout";
const places = [
  "Restaurant",
  "Cottage",
  "Castle",
  "Fantast city",
  "beach",
  "Carbins",
  "Off-grid",
  "Farm",
];
const PlaceToStay = () => {
  return (
    <section className="mt-[100px]">
      <DefaultLayout>
        <div className="flex items-center justify-between lg:justify-start flex-wrap mb-[54px] lg:mb-[64px]">
          {/* big screen */}
          <div className="hidden lg:inline-flex">
            {places?.map((item, i) => (
              <span className="mr-[48px] text-[20px] text-[#434343]" key={i}>
                {item}
              </span>
            ))}
          </div>

          {/* small screeen */}
          <div>
            <select
              className="py-[14px] select__tag bg-white px-[10px] md:w-[200px] mb-[20px] sm:mb-0 h-[48px] md:px-[20px] w-[130px] outline-none border border-[#B4B4B4] rounded-[8px] lg:hidden"
              name=""
              id=""
            >
              {places?.map((item, index) => (
                <option className="py-[14px]" key={index} value="volvo">
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between  md:max-w-[161px] h-[48px] px-[10px] md:px-[20px] lg:px-[12px] border border-[#B4B4B4] rounded-[8px]">
            <span>Location</span>
            <img className="ml-[40px]" src={location} alt="location" />
          </div>
        </div>
        <PlaceCardList />
      </DefaultLayout>
    </section>
  );
};

export default PlaceToStay;
