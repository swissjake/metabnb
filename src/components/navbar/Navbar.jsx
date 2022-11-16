import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import ExtendedNav from "./ExtendedNav";

const navItems = [
  { name: "Home", ref: "/" },
  { name: "Place to stay", ref: "/placeToStay" },
  { name: "NFTs", ref: "" },
  { name: "Community", ref: "" },
];
const Navbar = ({ openModal, setOpenModal }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setSticky(true);
      else setSticky(false);
    });
  }, []);

  return (
    <>
      <div
        className={`${
          sticky ? "top-0" : "top-[-100%]"
        } sticky transition-all duration-[1s]  bg-white z-[10] py-[32px]`}
      >
        <MobileNav
          navItems={navItems}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          openModal={openModal}
          setOpenModal={setOpenModal}
          navigate={navigate}
        />
        <ExtendedNav
          navItems={navItems}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          openModal={openModal}
          setOpenModal={setOpenModal}
          navigate={navigate}
        />
      </div>
    </>
  );
};

export default Navbar;
