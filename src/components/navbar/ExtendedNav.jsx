import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import logo from "../../assets/images/logo.svg";
import styles from "./Navbar.module.css";

const ExtendedNav = ({
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
        <div className="flex items-center w-full justify-between hidden md:inline-flex ">
          <div
            onClick={() => {
              navigate("/");
            }}
            className=" cursor-pointer md:w-[20%] lg:w-fit"
          >
            <img src={logo} alt="logo" />
          </div>

          <ul className="flex items-center md:gap-x-[24px] xl:gap-x-[48px]">
            {navItems?.map((item, i) => (
              <li
                onClick={() => navigate(item.ref)}
                className={`${styles.li} cursor-pointer`}
                key={i}
              >
                {item.name}
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
    </>
  );
};

export default ExtendedNav;
