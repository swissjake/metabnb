import React from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import DefaultLayout from "../../layouts/DefaultLayout";

const MobileNav = ({
  navItems,
  navOpen,
  setNavOpen,
  openModal,
  setOpenModal,
  navigate,
}) => {
  return (
    <>
      <DefaultLayout>
        <div className=" flex items-center justify-between cursor-pointer md:hidden">
          <img
            onClick={() => navigate("/")}
            className="w-[40%]"
            src={logo}
            alt="logo"
          />
          <div onClick={() => setNavOpen(!navOpen)}>
            <AiOutlineMenu className={`${navOpen && "hidden"}`} size={26} />
          </div>
        </div>
      </DefaultLayout>

      <div
        className={
          navOpen
            ? `fixed top-0 z-20 left-0 h-screen bg-[#A02279] w-full flex flex-col items-center text-center pt-[150px] text-white overflow-hidden transition-all duration-200 ease-in-out md:hidden  `
            : `fixed top-0 z-20 left-[-100%] h-screen bg-[#A02279] w-full flex flex-col items-center text-center pt-[150px] text-white overflow-hidden transition-all duration-200 ease-in-out md:hidden `
        }
      >
        <ul className=" flex flex-col gap-y-[48px]  text-[20px]">
          {navItems?.map((item, i) => (
            <li
              onClick={() => {
                setNavOpen(!navOpen);
                navigate(item.ref);
              }}
              className=" cursor-pointer"
              key={i}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div onClick={() => setNavOpen(!navOpen)} className="absolute top-16">
          <AiOutlineCloseCircle size={32} />
        </div>
        <div className="mt-[48px]">
          <button
            onClick={() => {
              setOpenModal(true);
              setNavOpen(!navOpen);
            }}
            style={{
              background: `linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)`,
            }}
            className="h-[48px] px-[27px] text-[1rem] rounded-[10px] text-white "
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
