"use client";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Designer from "../../public/designer.png";
import Image from "next/image";
import Walk from "../../public/walking1.png";
import Walk2 from "../../public/walking2.png";
import Modal from "../../components/Modal";
import Modall from "../../components/Modall";

const Register = () => {
  const [show, setShow] = useState(false);
  const activePage = "Contact";
  return (
    <Layout activePage={activePage}>
      <section className="text-white flex justify-center gap-x-3">
        {/* <Modall /> */}
        <Image
          src={Designer}
          width={717}
          height={717}
          alt="designer overflow-hidden"
        />
        <div className="w-[740px] h-[740px] contact-page flex justify-center">
          <div className="mt-[65px]">
            <h1 className="text-[#D434FE] text-[32px] font-semibold">
              Register
            </h1>
            <div className="mt-[46px] mb-[19px] relative">
              <p className="">
                Be part of this movement!
                <span className="text-[#D434FE] "> .....................</span>
              </p>
              <div className="lg:flex absolute top-[-16px] right-[293px] hidden">
                <Image src={Walk} alt="walk1" width={26} height={26} />
                <Image src={Walk2} alt="walk1" width={30} height={30} />
              </div>
            </div>
            <p className="text-[24px] mb-[33px]">CREATE YOUR ACCOUNT</p>
            <form className="">
              <div className="grid grid-cols-2 gap-x-[32px] gap-y-[29px]">
                {" "}
                <div>
                  <p className="mb-[11px]">{`Teams's Name`}</p>
                  <input
                    type="text"
                    required
                    name="team-name"
                    placeholder="Enter the name of your group"
                    className="border-[1px] rounded-[4px] contact-box py-2 pl-2 w-[263px] h-[47px]"
                  />
                </div>
                <div>
                  <p className="mb-[11px]">{`Phone Number`}</p>
                  <input
                    type="number"
                    required
                    name="number"
                    placeholder="Enter your phone number"
                    className="border-[1px] rounded-[4px] contact-box py-2 pl-2 w-[263px] h-[47px]"
                  />
                </div>
                <div>
                  <p className="mb-[11px]">Email</p>
                  <input
                    type="text"
                    required
                    name="mail"
                    placeholder="Enter your email address"
                    className="border-[1px] rounded-[4px] contact-box py-2 pl-2 w-[263px] h-[47px]"
                  />
                </div>
                <div>
                  <p className="mb-[11px]">Project Topic</p>
                  <input
                    type="text"
                    required
                    name="project_topic"
                    placeholder="What is your group project topic"
                    className="border-[1px] rounded-[4px] contact-box py-2 pl-2 w-[263px] h-[47px]"
                  />
                </div>
                <div>
                  <p>Category</p>
                </div>
              </div>
              <p className="text-[12px] italic text-[#FF26B9] mt-[23px] mb-[18px]">
                Please review your registration details before submitting
              </p>
              <div className="mb-[22px]">
                <input
                  type="checkbox"
                  name="terms_and_conditions"
                  value="terms_and_conditions"
                  className="mr-[10px]"
                />
                I agreed with the event terms and conditions and privacy policy
              </div>
              <button
                onClick={() => setShow(true)}
                className="register-button text-white w-full py-[17px] rounded-sm"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
