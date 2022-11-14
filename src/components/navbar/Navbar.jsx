import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import logo from "../../assets/images/logo.svg";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

const navItems = ["Home", "Place to stay", "NFTs", "Community"];
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <DefaultLayout>
        <nav className="md:mt-[58px]">
          <div className="flex items-center w-full justify-between hidden md:inline-flex ">
            <div className=" cursor-pointer">
              <img src={logo} alt="logo" />
            </div>
            <div className="">
              <ul className="flex items-center gap-x-[48px] text-[20px]">
                {navItems?.map((item, i) => (
                  <li className=" cursor-pointer" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button
                style={{
                  background: `linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)`,
                }}
                className="h-[48px] px-[27px] text-[1rem] rounded-[10px] text-white"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </nav>
      </DefaultLayout>

      {/* MOBILE NAV */}
      <nav className="md:hidden mt-[32px] ">
        <DefaultLayout>
          <div className=" flex items-center justify-between cursor-pointer">
            <img className="w-[40%]" src={logo} alt="logo" />
            <div onClick={() => setNavOpen(!navOpen)}>
              <AiOutlineMenu className={`${navOpen && "hidden"}`} size={26} />
            </div>
          </div>
        </DefaultLayout>

        <div
          className={
            navOpen
              ? `fixed top-0 left-0 h-screen bg-[#A02279] w-full flex flex-col items-center text-center pt-[150px] text-white overflow-hidden transition-all duration-200 ease-in-out md:hidden  `
              : `fixed top-0 left-[-100%] h-screen bg-[#A02279] w-full flex flex-col items-center text-center pt-[150px] text-white overflow-hidden transition-all duration-200 ease-in-out md:hidden `
          }
        >
          <ul className=" flex flex-col gap-y-[48px] text-[20px]">
            {navItems?.map((item, i) => (
              <li
                onClick={() => setNavOpen(!navOpen)}
                className=" cursor-pointer"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
          <div onClick={() => setNavOpen(!navOpen)} className="absolute top-16">
            <AiOutlineCloseCircle size={32} />
          </div>
          <div className="mt-[48px]">
            <button
              style={{
                background: `linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)`,
              }}
              className="h-[48px] px-[27px] text-[1rem] rounded-[10px] text-white "
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
