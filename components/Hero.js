import React from "react";
import Image from "next/image";
import Man from "../public/man.png";
import Stroke from "../public/Vector 4.svg";
import Ball from "../public/ball.png";
import Chain from "../public/chains.png";
import Bulb from "../public/bulb.png";
import Flash from "../public/fire.png";

const Hero = () => {
  return (
    <>
      <div className="h-[1px] w-full bar"></div>
      <section className="md:ml-[128px] text-center md:text-justify">
        <div className="mt-8 mb-10">
          <p className="text-white text-center md:text-right md:mr-[55px] text-[16px] md:text-[36px] font-bold italic">
            Igniting a Revolution in HR Innovation
          </p>
          <Image
            src={Stroke}
            width={253}
            height={11}
            alt="stroke"
            className="hidden md:float-right mr-[81px]"
          />
          <Image
            src={Stroke}
            width={115}
            height={7}
            alt="stroke"
            className="float-right mr-[42px] md:hidden"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="text-white relative">
            <Image
              src={Bulb}
              alt="bulb"
              width={53}
              height={73}
              className="hidden md:absolute top-[-60px] right-[75px]"
            />
            <Image
              src={Bulb}
              alt="bulb"
              width={18}
              height={26}
              className="absolute top-[-20px] right-[100px] md:hidden"
            />
            <h1 className="text-[32px] text-center md:text-left md:text-[80px] font-bold home-button leading-none">
              getlinked Tech <br></br>
              <span className="flex justify-center mt-[3px] md:mt-0 md:justify-start">
                Hackathon{" "}
                <span className="text-[#D434FE] flex items-center">
                  1.0
                  <Image
                    src={Chain}
                    alt="chain"
                    width={86}
                    height={86}
                    className="hidden md:block ml-[6px] object-cover"
                  />
                  <Image
                    src={Flash}
                    alt="chain"
                    width={86}
                    height={86}
                    className="hidden md:block ml-[6px] object-cover"
                  />
                  <Image
                    src={Chain}
                    alt="chain"
                    width={32}
                    height={32}
                    className="md:hidden ml-[6px] object-cover"
                  />
                  <Image
                    src={Flash}
                    alt="chain"
                    width={22}
                    height={22}
                    className="md:hidden  ml-[6px] object-cover"
                  />
                </span>
              </span>
            </h1>
            <p className="text-center mt-[9px] mb-[24px] md:text-left md:mt-2 md:mb-[41px] md:w-[522px] text-[13px] md:text-[20px] font-normal">
              Participate in getlinked tech Hackathon 2023 stand<br></br> a
              chance to win a Big prize
            </p>
            <button className="register-button px-[52px] py-[16px] text-white rounded-md">
              Register
            </button>
            <div className="mt-[14px] mb-[30px] md:mt-[77px] md:mb-[95px] mx-auto md:mx-0 w-[214px] md:w-[285px] flex justify-between numbers text-white text-[48px] md:text-[64px] font-normal leading-[85px]">
              <p>
                00
                <span className="text-[14px] links">H</span>
              </p>
              <p>
                00
                <span className="text-[14px] links">M</span>
              </p>
              <p>
                00
                <span className="text-[14px] links">S</span>
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={Man}
              alt="man"
              width={828}
              height={715}
              className="hidden md:block"
            />
            <Image
              src={Ball}
              alt="ball"
              width={667}
              height={641}
              className="hidden md:block absolute top-0 right-[64px]"
            />
          </div>
          {/* mobile screen */}
          <div className="relative">
            <Image
              src={Man}
              alt="man"
              width={419}
              height={362}
              className="hero-pic md:hidden"
            />
            <Image
              src={Ball}
              alt="ball"
              width={338}
              height={324}
              className="hero-pic absolute top-0 right-[10px] md:hidden"
            />
          </div>
          {/* mobile screen */}
        </div>
      </section>
      <div className="h-[1px] w-full bar"></div>
    </>
  );
};

export default Hero;
