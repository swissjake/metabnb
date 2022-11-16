import React from "react";
import nft from "../../assets/nfts/nfts.png";
import DefaultLayout from "../../layouts/DefaultLayout";

const Nfts = () => {
  return (
    <section
      style={{
        background: `linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)`,
      }}
      className=" mt-[53px]"
    >
      <DefaultLayout>
        <div className="flex flex-col md:flex-row h-fit md:h-[600px] lg:h-[774px] py-[32px] md:py-0 w-full md:items-center md:justify-between">
          <div className=" md:w-[60%] lg:max-w-[415px] text-center md:text-start">
            <header
              style={{
                color: `linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)`,
              }}
              className=" text-[2rem] lg:text-[3rem] font-[700] text-white "
            >
              Metabnb NFTs
            </header>
            <p className=" md:w-[80%] lg:w-fit text-[16px] lg:text-[18px] text-white mt-[24px] md:mt-[35px]">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className="py-[14px] flex px-[33px] bg-white text-[#A02279] rounded-[8px] mt-[32px] md:mt-[57px] mx-auto md:mx-0">
              Learn More
            </button>
          </div>
          <div className="md:w-[50%] flex mx-auto md:mx-0 lg:w-fit mt-[57px] md:mt-0">
            <img src={nft} alt="Nfts" />
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
};

export default Nfts;
