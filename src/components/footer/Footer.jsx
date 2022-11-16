import React from "react";
import logo from "../../assets/footer/logo.svg";
import facebook from "../../assets/footer/facebook.svg";
import IG from "../../assets/footer/IG.svg";
import twitter from "../../assets/footer/twitter.svg";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useNavigate } from "react-router-dom";

const date = new Date();
const comm = ["NFT", "Tokens", "Landlords", "Discord"];
const places = ["Castle", "Farms", "Beach", "Learn more"];
const about = ["Road Map", "Creators", "Career", "Contact us"];
const Footer = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#1D1D1E] pt-[44px] md:pt-[63px] pb-[32px]">
      <DefaultLayout>
        <div className="grid md:grid-cols-2 lg:grid-cols-9 text-[#F1F3F9]">
          <div className=" lg:col-span-3">
            <div
              onClick={() => {
                navigate("/");
              }}
              className="w-[45%] lg:w-fit"
            >
              <img src={logo} alt="logo" />
            </div>
            <div className="flex items-center mt-[40px] md:mt-[57px] lg:mt-[96px] gap-x-[35px]">
              <img src={facebook} alt="facebook" />
              <img src={IG} alt="instagram" />
              <img src={twitter} alt="twitter" />
            </div>
            <p className="text-[16px] text-[#F7F7F7] mt-[40px] md:mt-[55px]">
              <span className="mr-[9px]">&copy;</span>
              {date.getFullYear()} metabnb
            </p>
          </div>

          {/* community */}
          <div className=" lg:col-span-2 lg:translate-y-[10px] mt-[32px] lg:mt-0">
            <header className="mb-[8px] text-[18px] font-[700]">
              Community
            </header>
            <ul>
              {comm?.map((item, i) => (
                <li className="mt-[16px] text-[14px]" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Places */}
          <div className=" lg:col-span-2 translate-y-[10px] mt-[32px] lg:mt-0">
            <header className="mb-[8px] text-[18px] font-[700]">Places</header>
            <ul>
              {places?.map((item, i) => (
                <li className="mt-[16px] text-[14px]" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* about */}
          <div className=" lg:col-span-2 translate-y-[10px] mt-[32px] lg:mt-0">
            <header className="mb-[8px] text-[18px] font-[700]">
              About us
            </header>
            <ul>
              {about?.map((item, i) => (
                <li className="mt-[16px] text-[14px]" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
};

export default Footer;
