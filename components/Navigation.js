"use client";
import React from "react";
//import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { links } from "../data";
import Menu from "../public/menu.svg";
import Cancel from "../public/cancel.svg";
import Image from "next/image";

const Navigation = ({ activePage }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push("/register");
  // };

  return (
    <section className="">
      {/* laptop view */}
      <nav className="hidden px-[128px] md:flex justify-between items-center pt-[67px] pb-[30px] text-white">
        <div>
          <Link href="/">
            <p className="font-bold text-[36px] home-button">
              {" "}
              get<span className="text-[#D434FE]">linked</span>
            </p>
          </Link>
        </div>
        <div className="flex">
          <div className="w-[288px] flex justify-between items-center">
            {links.map(({ id, title, url }) => {
              return (
                <Link
                  key={id}
                  href={url}
                  className={` font-normal text-[16px] links  ${
                    activePage === title
                      ? "links-active ease-in-out duration-300"
                      : "null"
                  }`}
                >
                  {title}
                </Link>
              );
            })}
          </div>
          <Link
            href="/register"
            className="register-button ml-[121px] px-[52px] py-[16px] text-white rounded-md  "
          >
            Register
          </Link>
        </div>
      </nav>
      {/* end of laptop view */}
      {/* mobile view */}
      <nav className="flex justify-between mx-[48px] mt-[34px] mb-[30px] md:hidden">
        <div>
          <Link href="/">
            <p className="font-bold text-normal home-button text-white">
              {" "}
              get<span className="text-[#D434FE]">linked</span>
            </p>
          </Link>
        </div>
        <div>
          <Image
            src={Menu}
            alt="Menu"
            width={19}
            height={14}
            onClick={handleToggle}
            className="relative"
          />
          {/* menu page */}
          <div className={toggle ? "block" : "hidden"}>
            <div className="absolute h-screen top-0 left-0 bg-[#150E28] z-10 w-full flex justify-between">
              <Image
                src={Cancel}
                width={11}
                height={11}
                alt="cancel"
                onClick={handleToggle}
                className="absolute top-[57px] right-[45px] rounded-full border-2 p-1 border-[#D434FE] w-[23px] h-[23px]"
              />

              <div className="ml-[47px] mt-[102px]">
                <ul className="">
                  {links.map(({ id, title, url }) => {
                    return (
                      <Link
                        key={id}
                        href={url}
                        className={`block links-mobile text-white mb-[20px] font-medium text-[18px] ${
                          activePage === title
                            ? "links-active ease-in-out duration-300"
                            : null
                        }`}
                      >
                        {title}
                      </Link>
                    );
                  })}
                </ul>
                <Link
                  href="/register"
                  className="register-button px-[52px] py-[16px] text-white rounded-sm"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
          {/* end of menu page */}
        </div>
      </nav>
      {/* end of mobile view */}
    </section>
  );
};

export default Navigation;
