import React from "react";
import Image from "next/image";
import Liberty from "../public/liberty.png";
import LibertyPay from "../public/libertyPay.png";
import Winwise from "../public/Winwise.png";
import Whisper from "../public/whisper.png";

const Sponsors = () => {
  return (
    <>
      <section className="text-white hidden">
        <div>
          <h1>Partners and Sponsors</h1>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <article>
          <div className="w-[1255px] h-[560px] sponsors mx-auto">
            <div className="w-[775px] h-[139px] flex items-center justify-between mx-auto">
              <Image
                src={Liberty}
                width={120}
                height={113}
                alt="liberty"
                className="object-contain overflow-hidden"
              />

              <div className="w-[4px] h-[112px] bg-[#D434FE]"></div>
              <Image
                src={LibertyPay}
                width={213}
                height={40}
                alt="liberty"
                className="object-contain overflow-hidden"
              />
              <div className="w-[4px] h-[112px] bg-[#D434FE]"></div>
              <Image
                src={Winwise}
                width={131}
                height={107}
                alt="winwise"
                className="object-contain overflow-hidden"
              />
            </div>
            <div className="flex justify-between w-[990px] mx-auto my-[27px]">
              <div className="w-[257px] h-[4px] bg-[#D434FE]"></div>
              <div className="w-[257px] h-[4px] bg-[#D434FE]"></div>
              <div className="w-[257px] h-[4px] bg-[#D434FE]"></div>
            </div>
            <div className="w-[775px] h-[139px] flex items-center justify-between mx-auto">
              <Image
                src={Whisper}
                width={120}
                height={113}
                alt="liberty"
                className="object-contain overflow-hidden"
              />

              <div className="w-[4px] h-[112px] bg-[#D434FE]"></div>

              <div className="w-[213px] h-[40px]">
                <p className="text-center">
                  Pay<span>Paybox</span>
                </p>
              </div>
              <div className="w-[4px] h-[112px] bg-[#D434FE]"></div>
              <div className="w-[231px] h-[40px] relative">
                <p className="text-center text-[41px]">
                  Vuzual <span className="text-[#FF0000]">Plus</span>
                  <span className="text-[11px] absolute top-0 right-0">
                    Design Studios
                  </span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="text-white w-[1255px] h-[560px] bg-blue-700 mx-auto">
        <div className="grid grid-cols-3 gap-[25px] grid-rows-2 border-2 place-items-center">
          <Image
            src={Liberty}
            width={120}
            height={113}
            alt="liberty"
            className="object-contain overflow-hidden border-red-600 border-r-2 border-b-2"
          />

          <Image
            src={LibertyPay}
            width={213}
            height={40}
            alt="liberty"
            className="object-contain overflow-hidden"
          />
          <Image
            src={Winwise}
            width={131}
            height={107}
            alt="winwise"
            className="object-contain overflow-hidden"
          />
          <Image
            src={Whisper}
            width={120}
            height={113}
            alt="liberty"
            className="object-contain overflow-hidden"
          />
          <div className="w-[213px] h-[40px]">
            <p className="text-center">
              Pay<span>Paybox</span>
            </p>
          </div>
          <div className="w-[231px] h-[40px] relative">
            <p className="text-center text-[41px]">
              Vuzual <span className="text-[#FF0000]">Plus</span>
              <span className="text-[11px] absolute top-0 right-0">
                Design Studios
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
