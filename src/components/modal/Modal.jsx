import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import arrow from "../../assets/modal/arrow.png";
import connect from "../../assets/modal/connect.png";
import mask from "../../assets/modal/mask.png";

const Modal = ({ openModal, setOpenModal }) => {
  return (
    <div
      onClick={() => setOpenModal(false)}
      style={{ background: "rgba(64, 64, 64, 0.3" }}
      className="h-screen w-screen fixed left-0 right-0 top-0 bottom-0 z-30"
    >
      <div className="flex h-full justify-center items-center px-[16px]">
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[600px] bg-white rounded-[16px]"
        >
          <div className="flex w-full items-center justify-between py-[24px] px-[32px]">
            <header className="font-[700] text-[1rem] md:text-[1.5rem] text-[#333333]">
              Connect Wallet
            </header>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setOpenModal(false)}
              size={22}
            />
          </div>
          <hr className="border border-[#CFD8DC]" />
          <div className="p-[32px]">
            <p className="text-[#333333] text-[0.8rem] md:text-[1rem]">
              Choose your preferred wallet:
            </p>
            <div>
              <div
                onClick={() => setOpenModal(!openModal)}
                className="flex items-center justify-between border border-[#CFD8DC] rounded-[12px] py-[12px] mt-[16px] px-[20px] cursor-pointer"
              >
                <div className="flex items-center">
                  <img src={mask} alt="mask" />
                  <p className="ml-[16px] font-[sora] font-[600] text-[14px] md:text-[18px]">
                    Metamask
                  </p>
                </div>
                <img src={arrow} alt="arrow" />
              </div>
            </div>

            {/* second block */}
            <div
              onClick={() => setOpenModal(!openModal)}
              className="flex items-center justify-between border border-[#CFD8DC] rounded-[12px] py-[12px] mt-[16px] px-[20px] cursor-pointer"
            >
              <div className="flex items-center">
                <img src={connect} alt="mask" />
                <p className="ml-[16px] font-[sora] font-[600] text-[14px] md:text-[18px]">
                  WalletConnect
                </p>
              </div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
