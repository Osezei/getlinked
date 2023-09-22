import React from "react";
import Image from "next/image";
import LadyPic from "../public/lady.png";

const Lady = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row justify-center text-center md:text-left gap-x-[48px] items-center text-white">
        <div className="w-[300px] md:w-[535px] mb-[46px] md:mb-0">
          <h1 className="w-[170px] text-[20px] md:text-[32px] mx-auto md:mx-0 font-bold mb-[9px] md:mb-4 mt[10px] md:mt-0">
            Rules and <span className="text-[#D434FE]">Guidelines</span>
          </h1>
          <p className="text-[13px] md:text-[14px] leading-[27.5px]">
            {`Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!`}
          </p>
        </div>
        <Image
          src={LadyPic}
          width={664}
          height={664}
          alt="Lady"
          className="hidden md:block overflow-hidden"
        />
        <Image
          src={LadyPic}
          width={294}
          height={382}
          alt="Lady"
          className="md:hidden overflow-hidden"
        />
      </section>
      <div className="h-[1px] w-full bar"></div>
    </>
  );
};

export default Lady;
