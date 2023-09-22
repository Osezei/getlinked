import React from "react";
import Image from "next/image";
import Trophy from "../public/trophy.png";
import Gold from "../public/medal1.png";
import Silver from "../public/medal2.png";
import Bronze from "../public/medal3.png";

const Prizes = () => {
  return (
    <>
      <section className="hidden md:flex justify-center gap-x-[37px] text-white mt-[74px] mb-[149px]">
        <div>
          <Image
            src={Trophy}
            width={548}
            height={482}
            alt="trophy"
            className="mt-[253px]"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-[350px] mx-auto">
            <h1 className="text-[32px] font-bold">
              Prizes and <br></br>{" "}
              <span className="text-[#D434FE]">Rewards</span>
            </h1>
            <p className="mt-2 text-[14px]">
              Highlight of the prizes or rewards for winners and <br></br> for
              participants.
            </p>
          </div>
          <article className="flex gap-x-[30px] items-center">
            {/* first prize */}
            <div className="w-[212px] h-[296px] border-1 rounded-[8px] silver flex flex-col relative text-center">
              <Image
                src={Silver}
                width={179}
                height={180}
                alt="silver"
                className="absolute top-[-80px] right-[16px]"
              />
              <p className="text-[24px] font-semibold mt-[105px] ">
                <span className="text-[36px] font-bold">2nd</span> <br></br>
                Runner
              </p>
              <p className="text-[#D434FE] font-bold text-[32px]">N300,000</p>
            </div>
            {/* end of first price */}

            {/* 1st price */}
            <div className="w-[212px] h-[347px] border-1 rounded-[8px] gold flex flex-col relative text-center">
              <Image
                src={Gold}
                width={296}
                height={296}
                alt="gold"
                className="absolute top-[-150px] right-[2px] w-[296px] h-[296px] object-cover overflow-visible"
              />
              <p className="text-[24px] font-semibold mt-[152px] ">
                <span className="text-[36px] font-bold">1st</span> <br></br>
                Runner
              </p>
              <p className="text-[#D434FE] font-bold text-[32px]">N400,000</p>
            </div>

            {/* end of 1st price */}

            {/* 3rd prize  */}
            <div className="w-[212px] h-[296px] border-1 rounded-[8px] silver flex flex-col relative text-center">
              <Image
                src={Bronze}
                width={179}
                height={180}
                alt="silver"
                className="absolute top-[-80px] right-[16px]"
              />
              <p className="text-[24px] font-semibold mt-[105px] ">
                <span className="text-[36px] font-bold">2nd</span> <br></br>
                Runner
              </p>
              <p className="text-[#D434FE] font-bold text-[32px]">N150,000</p>
            </div>
            {/* end of 3rd prize */}
          </article>
        </div>
      </section>
      {/* mobile view */}
      <section className=" md:hidden text-white flex flex-col w-[322px] mx-auto">
        <div className="mt-[72px] mb-[40px] text-center">
          <h1 className="text-[20px] font-bold">
            Prizes and <br></br> <span className="text-[#D434FE]">Rewards</span>
          </h1>
          <p className="mt-[3px] text-[12px]">
            Highlight of the prizes or rewards for winners and <br></br> for
            participants.
          </p>
        </div>
        <Image src={Trophy} alt="trophy" width={321} height={282} />
        <div className="flex justify-center gap-x-[13px] mt-[105px] mb-[96px]">
          {/* second prize */}
          <div className="w-[90px] h-[126px] border-1 rounded-[8px] silver flex flex-col relative text-center">
            <Image
              src={Silver}
              width={75}
              height={76}
              alt="silver"
              className="absolute top-[-30px] right-[6px]"
            />
            <p className="text-[12px] font-bold mt-[50px] ">
              <span className=" font-semibold">2nd</span> <br></br>
              Runner
            </p>
            <p className="text-[#D434FE] font-bold text-[14px]">N300,000</p>
          </div>
          {/* end of second price */}
          {/* first price */}
          <div className="w-[90px] h-[147px] border-1 rounded-[8px] gold flex flex-col relative text-center">
            <Image
              src={Gold}
              width={127}
              height={127}
              alt="gold"
              className="absolute top-[-70px] right-[0.2px] w-[127px] h-[127px] object-cover overflow-visible"
            />
            <p className="text-[12px] font-bold mt-[65px] ">
              <span className=" font-semibold">1st</span> <br></br>
              Runner
            </p>
            <p className="text-[#D434FE] font-bold text-[14px]">N300,000</p>
          </div>
          {/* end of first price */}
          {/* 3rd prize */}
          <div className="w-[90px] h-[126px] border-1 rounded-[8px] silver flex flex-col relative text-center">
            <Image
              src={Bronze}
              width={75}
              height={76}
              alt="bronze"
              className="absolute top-[-30px] right-[6px]"
            />
            <p className="text-[12px] font-bold mt-[50px] ">
              <span className=" font-semibold">3rd</span> <br></br>
              Runner
            </p>
            <p className="text-[#D434FE] font-bold text-[14px]">N150,000</p>
          </div>
          {/* end of 3rd price */}
        </div>
      </section>
      {/* end of mobile view */}
      <div className="h-[1px] w-full bar"></div>
    </>
  );
};

export default Prizes;
