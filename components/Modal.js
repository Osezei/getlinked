import React from "react";
import Yay from "../public/yay.png";
import Good from "../public/big_check.png";
import Image from "next/image";

const Modal = () => {
  return (
    <section className="w-[317px] h-[467px] rounded-sm">
      <div className="relative">
        <Image
          src={Good}
          width={174}
          height={174}
          alt="good"
          className="absolute"
        />
        <Image
          src={Yay}
          width={184}
          height={184}
          alt="yay"
          className="overflow-hidden"
        />
      </div>
      <div>
        <p className="w-[178px] mt-[26px] mb-[29px] text-[16px] font-semibold">
          Congratulations you have successfully Registered!
        </p>
        <p>
          Yes, it was easy and you did it! check your mail box for next step
        </p>
        <button>back</button>
      </div>
    </section>
  );
};

export default Modal;
