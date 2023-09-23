import React from "react";
import Image from "next/image";
import Think from "../public/thinking.png";
import { questions } from "../data";

const Questions = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row  justify-center items-center gap-x-[25px] mt-[60px] md:mt-[120px] mb-[63px] text-white">
        <div className="">
          <h1 className="mb-4 text-[20px] md:text-[32px] font-bold w-[158px] md:w-[253px]">
            Frequently Ask <span className="text-[#D434FE]">Question</span>
          </h1>
          <p className="mb-[45px] md:mb-[68px] w-[293px] md:w-[342px] text-[12px] md:text-[14px] ">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div className="md:w-[427px] text-[12px] md:text-[14px] w-[296px]">
            {questions.map(({ id, note }) => {
              return (
                <article key={id} className="mb-[13px] md:mb-[38px]">
                  <p className="flex justify-between items-center w-[296px] md:w-[427px]">
                    <span className="w-[270px] md:w-max-full"> {note}</span>
                    <span className=" items-center text-[20px] font-normal text-[#D434FE]">
                      +
                    </span>
                  </p>
                  <div className="w-[296px] md:w-[427px] h-[1px] bg-[#D434FE] mt-[13px]"></div>
                </article>
              );
            })}
          </div>
        </div>
        <Image
          src={Think}
          width={741}
          height={741}
          alt="thinking man"
          className="overflow-hidden hidden md:flex"
        />
        <Image
          src={Think}
          width={327}
          height={327}
          alt="thinking man"
          className="overflow-hidden md:hidden mt-[40px]"
        />
      </section>
      <div className="h-[1px] w-full bar"></div>
    </>
  );
};

export default Questions;
