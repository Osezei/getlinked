"use client";
import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Twitter from "../../public/twitter.svg";
import Instagram from "../../public/instagram.svg";
import Facebook from "../../public/facebook.svg";
import Linkdedin from "../../public/linkdedin.svg";
import { useState } from "react";
import { ContactUs } from "../services/contactservices";

const Page = () => {
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [first_name, setFirstName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      phone_number,
      first_name,
      message,
    };

    ContactUs(user)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const activePage = "Contact";
  return (
    <Layout activePage={activePage}>
      <section className="text-white flex justify-center items-center gap-x-[225px] my-[56px]">
        <div className="flex flex-col gap-y-[17px] text-[16px]">
          <h1 className="text-[#D434FE] text-[32px] font-semibold">
            Get in touch
          </h1>
          <p>
            Contact <br></br> Information
          </p>
          <p>
            27,Alara Street <br></br> Yaba 100012<br></br> Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>
            we are open from Monday-Friday<br></br> 08:00am - 05:00pm
          </p>
          <div>
            <p className="text-[14px] text-[#D434FE] mb-[18px]">Share on</p>
            <div className="flex gap-x-[19px] items-center">
              <Image
                src={Instagram}
                width={24}
                height={24}
                alt="instagram"
                className="object-contain overflow-hidden"
              />
              <Image
                src={Twitter}
                width={19}
                height={17}
                alt="twitter"
                className="object-contain overflow-hidden"
              />
              <Image
                src={Facebook}
                width={10.5}
                height={20}
                alt="facebook"
                className="object-contain overflow-hidden"
              />
              <Image
                src={Linkdedin}
                width={24}
                height={24}
                alt="linkedin"
                className="object-contain overflow-hidden"
              />
            </div>
          </div>
        </div>
        {/* form */}
        <div className="contact-page rounded-[12px] w-[617px] h-[611px]">
          <div className="w-[437px] mx-auto mt-[60px]">
            <div className="text-[20px] mb-[34px] font-semibold text-[#D434FE] bg-transparent">
              <h1>Questions or need assistance?</h1>
              <h1>Let us know about it!</h1>
            </div>
            <form
              className="flex flex-col gap-y-[42px]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="firstname"
                required
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                className="border-[1px] rounded-[4px] contact-box py-2 pl-2"
              />

              <input
                type="text"
                required
                name="mail"
                placeholder="Mail"
                onChange={(e) => setEmail(e.target.value)}
                className="border-[1px] rounded-[4px] contact-box py-2 pl-2"
              />

              <input
                type="number"
                required
                name="phone_number"
                placeholder="Phone"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border-[1px] rounded-[4px] contact-box py-2 pl-2"
              />

              <textarea
                name="subject"
                required
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                className="border-[1px] rounded-[4px] contact-box py-2 pl-2"
              />
              <button
                type="submit"
                className="mx-auto flex justify-center register-button px-[14px] py-[8px] text-[12px] md:text-[16px] md:px-[52px] md:py-[10px] text-white rounded-[4px] md:mt-[22px] mb-[58px] md:mb-[120px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* end of form */}
      </section>
    </Layout>
  );
};

export default Page;
