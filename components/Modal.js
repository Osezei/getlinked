import React from "react";
import Yay from "../public/yay.png";
import Good from "../public/big_check.png";
import Image from "next/image";

const Modal = ({ closeModal }) => {
  return (
    <div className="">
      <section className="modal left-0 top-0 absolute md:w-[699px] mx-auto md:h-[664px] md:left-[30%] md:top-[20%] w-[317px] h-min-[467px] rounded-sm z-5 text-white ">
        <div className="mt-40">
          <div className="relative">
            <Image
              src={Good}
              width={174}
              height={174}
              alt="good"
              className="absolute top-0 left-[20px] md:left-[190px]"
            />
            <Image
              src={Yay}
              width={184}
              height={184}
              alt="yay"
              className="overflow-hidden mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="md:w-[440px] w-[178px] mx-auto mt-[26px] mb-[29px] md:text-[20px] text-[16px] font-semibold">
              Congratulations<br></br> you have successfully Registered!
            </p>
            <p>
              Yes, it was easy and you did it!<br></br> check your mail box for
              next step
            </p>
            <button
              onClick={() => closeModal(false)}
              className="register-button w-[200px] md:w-[600px] py-4 rounded-sm mt-5 font-semibold"
            >
              back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
