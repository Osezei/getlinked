import React from "react";
import Location from "../public/location.svg";
import Phone from "../public/phone.svg";
import Image from "next/image";
import { links } from "@/data";
import Link from "next/link";
import Twitter from "../public/twitter.svg";
import Instagram from "../public/instagram.svg";
import Facebook from "../public/facebook.svg";
import Linkdedin from "../public/linkdedin.svg";

const Footer = () => {
  return (
    <>
      <section className="text-white mt-[51px] md:mt-[83px] flex-col md:flex-row  flex justify-around">
        <div className="w-[271px] md:w-[500px] mx-auto md:mx-0">
          <p className="font-bold text-[20px] md:text-[36px] home-button mb-3 md:mb-2">
            {" "}
            get<span className="text-[#D434FE]">linked</span>
          </p>
          <p className="text-[12px] md:text-[14px]">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p className=" mt-[39px] md:mt-14 mb-8 md:mb-0">
            Terms of Use{" "}
            <span className="text-[#D434FE] text-lg font-bold mx-1">|</span>{" "}
            Privacy Policy
          </p>
        </div>
        <div className=" w-[271px] mx-auto md:w-max-full md:mx-0">
          <p className="text-[#D434FE] text-[14px] font-semibold mb-[6px] capitalize">
            useful links
          </p>
          <ul className="capitalize">
            {links.map(({ id, url, title }) => {
              return (
                <Link
                  key={id}
                  href={url}
                  className="block mb-[11px] md:mb-[12px] text-[12px] font-normal"
                >
                  {title}
                </Link>
              );
            })}
          </ul>
          <div className="flex mt-[35px] ">
            <p className="text-[12px] font-normal text-[#D434FE] mr-[16px] mt-2">
              Follow us
            </p>
            <ul className="flex justify-between w-[129px] items-center">
              <li>
                <Link href="/">
                  <Image
                    src={Instagram}
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src={Twitter} alt="twitter" width={19} height={17} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src={Facebook}
                    alt="facebook"
                    width={10.5}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src={Linkdedin}
                    alt="linkedin"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="font-normal text-[12px] w-[271px] mx-auto md:w-max-full md:mx-0">
          <p className="text-[#D434FE] font-semibold mt-[61px] md:mt-0 mb-[19px] text-[14px]">
            Contact Us
          </p>
          <ul>
            <li className="flex mb-[22px]">
              {" "}
              <Image
                src={Phone}
                alt="phone"
                width={12}
                height={12}
                className="mr-[16px]"
              />
              +234 6707653444
            </li>
            <li className="flex">
              <Image
                src={Location}
                alt="location"
                width={13}
                height={15}
                className="mr-[14px] mb-[30px]"
              />
              <span className="w-[89px]">
                27,Alara Street Yaba 100012 Lagos State
              </span>
            </li>
          </ul>
        </div>
      </section>
      <p className="mt-[60px] md:mt-[59px] mb-[54px] text-center text-white">
        All rights reserved. © getlinked Ltd.
      </p>
    </>
  );
};

export default Footer;
