import React from "react";
import Image from "next/image";
import Padlock from "../public/padlock.png";
import Mark from "../public/mark.svg";

const Privacy = () => {
  return (
    <section className=" text-white my-[167px] flex flex-col md:flex-row gap-x-[50px] justify-center w-[300px] mx-auto md:mx-0 md:min-w-full">
      <article>
        <div className="mb-[45px] md:mb-[69px] text-center md:text-left text-[12px] md:text-[14px]">
          <h1 className="text-[20px] md:text-[32px] font-bold">
            Privacy Policy and <span className="text-[#D434FE]">Terms</span>
          </h1>
          <p className="updated mt-[17px] mb-[30px]">
            Last updated on September 12, 2023
          </p>
          <p>
            Below are our privacy & policy, which outline a lot of goodies.
            <br></br> it’s our aim to always take of our participant
          </p>
        </div>
        <div className="text-[12px] md:text-[14px] w-[295px] h-[635px] md:w-[569px]  md:h-[608px] privacy">
          <div className=" w-[268px] md:w-[425px] mx-auto h-[590px] py-[59px]  md:text-left">
            <p className="mb-[21px] md:mb-[24px] leading-[30px] text-center">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <p className="text-[#D434FE] text-[16px] font-bold">
              Licensing Policy
            </p>
            <p className="font-bold">Here are terms of our Standard License:</p>
            <div className="mt-[21px] md:mt-[18px]">
              <p className="flex">
                <span className="mr-[14px] mt-[3px]">
                  <Image src={Mark} width={17} height={17} alt="mark" />
                </span>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>

              <p className="flex my-[24px] md:my-[18px]">
                <span className="mr-[14px] mt-[3px]">
                  <Image src={Mark} width={17} height={17} alt="mark" />
                </span>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
              <button className="mx-auto flex justify-center register-button px-[14px] py-[8px] text-[12px] md:text-[16px] md:px-[52px] md:py-[10px] text-white rounded-sm md:mt-[22px] mb-[58px] md:mb-[120px]">
                Read more
              </button>
            </div>
          </div>
        </div>
      </article>
      <article className="privacy-background  hidden md:block">
        <Image
          src={Padlock}
          width={559}
          height={749}
          alt="padlock"
          className="mt-[120px]"
        />
      </article>
      <article className="privacy--background mt-[48px] mb-[83px] md:hidden">
        <Image
          src={Padlock}
          width={262}
          height={351}
          alt="padlock"
          className="mt-[144px] "
        />
      </article>
    </section>
  );
};

export default Privacy;
