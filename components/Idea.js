import React from "react";
import BigIdea from "../public/the big idea 1.png";
import Image from "next/image";
import Arrow from "../public/arrow.png";
import Star from "../public/star.png";

const Idea = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row justify-center md:gap-x-[109px] items-center md:mt-[62px] md:mb-[78px]">
        <Image
          src={BigIdea}
          width={490}
          height={477}
          alt="big idea"
          className="hidden md:block"
        />
        <Image
          src={BigIdea}
          width={264}
          height={257}
          alt="big idea"
          className="mt-[27.7px] md:hidden"
        />
        <Image
          src={Arrow}
          alt="arrow"
          width={19}
          height={22}
          className="mt-[10px] mb-[22px] md:hidden"
        />
        <div className="text-white text-center md:text-justify relative">
          <h1 className=" mb-[9px] md:mb-4 w-[249px] mx-auto md:mx-0 md:w-[398px] text-[20px] md:text-[32px] font-bold">
            Introduction to getlinked{" "}
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
          </h1>
          <Image
            src={Star}
            alt="star"
            width={8}
            height={10}
            className="absolute top-[28px] right-[19px] md:hidden"
          />
          <p className="w-[321px] px-[17px] mb-[83px] md:mb-0 md:px-0 md:w-[535px] text-[13px] md:text-[14px] font-normal leading-[27.5px]">{`Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!`}</p>
        </div>
      </div>
      <div className="h-[1px] w-full bar"></div>
    </section>
  );
};

export default Idea;
