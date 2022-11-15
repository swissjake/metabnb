import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import logo from "../../assets/images/logo.svg";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.css";

const navItems = ["Home", "Place to stay", "NFTs", "Community"];
const Navbar = ({ openModal, setOpenModal }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="top-0 fixed py-[30px] z-20 w-full bg-white hidden md:inline-flex ">
        <DefaultLayout>
          <div className="flex items-center w-full justify-between ">
            <div className=" cursor-pointer md:w-[20%] lg:w-fit">
              <img src={logo} alt="logo" />
            </div>

            <ul className="flex items-center md:gap-x-[24px] xl:gap-x-[48px]">
              {navItems?.map((item, i) => (
                <li className={`${styles.li} cursor-pointer`} key={i}>
                  {item}
                </li>
              ))}
            </ul>

            <div>
              <button
                onClick={() => setOpenModal(!openModal)}
                style={{
                  background: `linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)`,
                }}
                className="h-[48px] px-[15px] lg:px-[27px] whitespace-nowrap text-[1rem] rounded-[10px] text-white"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </DefaultLayout>
      </nav>

      {/* MOBILE NAV */}
      <nav className="md:hidden py-[32px] w-full fixed top-0 bg-white  ">
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
              ? `fixed top-0  left-0 h-screen bg-[#A02279] w-full flex flex-col items-center text-center pt-[150px] text-white overflow-hidden transition-all duration-200 ease-in-out md:hidden  `
              : `fixed top-0  left-[-100%] h-screen bg-[#A02279] w-full flex flex-col items-center text-center pt-[150px] text-white overflow-hidden transition-all duration-200 ease-in-out md:hidden `
          }
        >
          <ul className=" flex flex-col gap-y-[48px]  text-[20px]">
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
