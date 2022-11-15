import React from "react";
import img1 from "../../assets/heroImages/img1.svg";
import img2 from "../../assets/heroImages/img2.svg";
import img3 from "../../assets/heroImages/img3.svg";
import img4 from "../../assets/heroImages/img4.svg";
import DefaultLayout from "../../layouts/DefaultLayout";

const Hero = () => {
  return (
    <section>
      <DefaultLayout>
        <div className="flex flex-col md:flex-row md:items-center mt-[133px] md:mt-[180px] md:justify-between">
          <div className="w-full lg:max-w-[646px] md:w-[60%] text-[#434343] text-center md:text-start lg:mx-0">
            <header className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] w-full tracking-[-0.02em] ">
              Rent a <span className="text-[#A02279] font-bold">Place </span>
              away from
              <span className="text-[#A02279] font-bold"> Home</span> in the
              <span className="text-[#A02279] font-bold"> Metaverse</span>
            </header>
            <p className="w-[100%] md:w-[90%] lg:max-w-[636px] text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] mt-[24px] lg:mt-[48px] text-center md:text-start">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="w-full md:w-[80%]  mt-[32px] lg:mt-[48px] flex items-center border border-[#A3A3A3] rounded-l-[8px] rounded-r-[8px] overflow-hidden">
              <input
                className="flex-1 px-[16px] h-full outline-none"
                type="text"
                placeholder="Search for location"
              />
              <div
                style={{
                  background: `linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)`,
                }}
                className="md:w-[230px] h-[54px] flex justify-center items-center text-[1rem] text-white "
              >
                Search
              </div>
            </div>
          </div>
          <div className="flex md:justify-center gap-x-[8px] mt-[32px] md:mt-[57px] lg:mt-0 md:w-[40%] ">
            <div className="mt-[100px] flex flex-col gap-[8px] ">
              <div>
                <img className="" src={img1} alt="" />
              </div>
              <div>
                <img className="" src={img2} alt="" />
              </div>
            </div>

            {/* second boxes */}
            <div className="flex flex-col gap-[8px]">
              <div>
                <img className="" src={img3} alt="" />
              </div>
              <div>
                <img className="" src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
};

export default Hero;
