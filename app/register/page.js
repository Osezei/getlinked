"use client";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Designer from "../../public/designer.png";
import Image from "next/image";
import Walk from "../../public/walking1.png";
import Walk2 from "../../public/walking2.png";
import Modal from "../../components/Modal";

const Register = () => {
  const activePage = "Contact";
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Layout activePage={activePage}>
      <section className="text-white flex flex-col md:flex-row justify-center md:gap-x-3 relative mb-3 md:mb-0">
        <Image
          src={Designer}
          width={717}
          height={717}
          alt="designer "
          className="overflow-hidden hidden md:block"
        />
        <h1 className="text-[#D434FE] text-[20px] font-semibold md:hidden w-[263px] mx-auto">
          Register
        </h1>
        <Image
          src={Designer}
          width={195}
          height={155}
          alt="designer "
          className="object-fit overflow-hidden md:hidden mx-auto"
        />
        <div className="w-[263px] mx-auto md:w-[740px] md:h-[740px] contact-page flex justify-center">
          <div className="md:mt-[65px]">
            <h1 className="text-[#D434FE] text-[32px] font-semibold hidden md:block">
              Register
            </h1>
            <div className="mt-[23px] md:mt-[46px] md:mb-[19px] relative">
              <p className="">
                Be part of this movement!
                <span className="text-[#D434FE] "> .....................</span>
              </p>
              <div className="lg:flex absolute top-[-16px] right-[293px] hidden">
                <Image src={Walk} alt="walk1" width={26} height={26} />
                <Image src={Walk2} alt="walk1" width={30} height={30} />
              </div>
            </div>
            <p className="text-[20px] mb-[23px] md:text-[24px] md:mb-[33px]">
              CREATE YOUR ACCOUNT
            </p>
            <form
              onSubmit={handleSubmit}
              className="text-[13px] md:text-[14px]"
            >
              <div className="grid grid-flow-row md:grid-cols-2 gap-y-[18px] md:gap-x-[32px] md:gap-y-[29px]">
                {" "}
                <div>
                  <p className="mb-[6px] md:mb-[11px]">{`Teams's Name`}</p>
                  <input
                    type="text"
                    name="team-name"
                    placeholder="Enter the name of your group"
                    className="border-[1px] rounded-[4px] contact-box py-2 pl-2 w-[263px] h-[39px] md:h-[47px]"
                  />
                </div>
                <div>
                  <p className="mb-[6px] md:mb-[11px]">{`Phone Number`}</p>
                  <input
                    type="number"
                    name="number"
                    placeholder="Enter your phone number"
                    className="border-[1px] rounded-[4px] contact-box py-2 pl-2 w-[263px] h-[39px] md:h-[47px]"
                  />
                </div>
                <div>
                  <p className="mb-[6px] md:mb-[11px]">Email</p>
                  <input
                    type="text"
                    name="mail"
                    placeholder="Enter your email address"
                    className="border-[1px] rounded-[4px] contact-box py-2 pl-2 w-[263px] h-[39px] md:h-[47px]"
                  />
                </div>
                <div>
                  <p className="mb-[6px] md:mb-[11px]">Project Topic</p>
                  <input
                    type="text"
                    name="project_topic"
                    placeholder="What is your group project topic"
                    className="border-[1px] rounded-[4px] contact-box py-2 pl-2 w-[263px] h-[39px] md:h-[47px]"
                  />
                </div>
                {/* <div>
                  <p>Category</p>
                </div> */}
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
                onClick={() => setOpenModal(true)}
                className="register-button text-white w-full py-[17px] rounded-sm"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>
      {openModal && <Modal closeModal={setOpenModal} />}
    </Layout>
  );
};

export default Register;
