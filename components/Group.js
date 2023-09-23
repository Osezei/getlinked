import React from "react";
import People from "../public/group.png";
import Image from "next/image";
import { criteria } from "../data";
const Group = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col justify-center md:gap-x-[53px] items-center mt-[74px] md:mt-[78px] text-white">
        <Image
          src={People}
          alt="people"
          width={710}
          height={587}
          className="hidden md:block"
        />
        <Image
          src={People}
          alt="people"
          width={332}
          height={275}
          className="md:hidden"
        />
        <div className="w-[299px] md:w-[564px] text-center md:text-left">
          <h2 className="text-[20px] md:text-[32px] font-bold mb-4 md:mb-[21px]">
            Judging Criteria<br></br>
            <span className="text-[#D434FE]">Key attributes</span>
          </h2>
          {criteria.map(({ id, title, note }) => {
            return (
              <article
                key={id}
                className="mb-[20px] md:mb-[22px] text-[13px] md:text-[16px]"
              >
                <p className="text-[#FF26B9]">
                  {title}
                  <span className="text-white"> {note}</span>
                </p>
              </article>
            );
          })}
          <button className="register-button px-[14px] py-[8px] text-[12px] md:text-[16px] md:px-[52px] md:py-[10px] text-white rounded-sm md:mt-[22px] mb-[58px] md:mb-[120px]">
            Read more
          </button>
        </div>
      </section>
      <div className="h-[1px] w-full bar"></div>
    </>
  );
};

export default Group;
