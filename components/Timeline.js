import React from "react";
import { timeline } from "../data";

const Timeline = () => {
  return (
    <>
      {/* laptop screen */}
      <section className="text-white hidden md:block">
        <div className="text-center mb-[91px] mt-[72px]">
          <h1 className="text-[32px] font-bold mb-3">Timeline</h1>
          <p className="text-[14px] leading-[24px]">
            Here is the breakdown of the time we anticipate<br></br> using for
            the upcoming event.
          </p>
        </div>
        {/* first Announcement */}
        <article className="flex justify-center items-center gap-x-[86px]">
          <div className="w-[436px] text-right mt-auto">
            <p className="text-[#D434FE] text-[24px] font-bold">
              Hackathon Announcement
            </p>
            <p className="text-white text-[14px] font-normal mt-3">
              The getlinked tech hackathon 1.0 is formally announced
              <br></br> to the general public and teams begin to get ready to
              register
            </p>
          </div>
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <div className="w-[4px] h-[137px] bg-[#D434FE]"></div>

            <p className="w-[53px] h-[53px] register-button rounded-full flex justify-center items-center relative">
              <span className="text-[24px] font-bold">1</span>
            </p>
          </div>
          <p className="text-[#D434FE] w-[436px] mt-[166px] text-[24px] font-bold text-left">
            November 18, 2023
          </p>
        </article>
        {/* end of first Announcement */}
        {/* second Announcement  */}
        <article className="flex justify-center items-center gap-x-[86px] mt-5">
          <p className="text-[#D434FE] w-[436px] mt-[105px] text-[24px] font-bold text-right">
            November 18, 2023
          </p>
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <div className="w-[4px] h-[86px] bg-[#D434FE]"></div>

            <p className="w-[53px] h-[53px] register-button rounded-full flex justify-center items-center relative">
              <span className="text-[24px] font-bold">2</span>
            </p>
          </div>

          <div className="w-[436px] text-left mt-auto">
            <p className="text-[#D434FE] text-[24px] font-bold">
              Teams Registration begins
            </p>
            <p className="text-white text-[14px] font-normal mt-3">
              Interested teams can now show their interest in the<br></br>{" "}
              getlinked tech hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
        </article>
        {/* end of second Announcement */}
        {/* third Announcement */}
        <article className="flex justify-center items-center gap-x-[86px] mt-5">
          <div className="w-[436px] text-right mt-auto">
            <p className="text-[#D434FE] text-[24px] font-bold">
              Teams Registration ends
            </p>
            <p className="text-white text-[14px] font-normal mt-3">
              Interested Participants are no longer Allowed to<br></br> register
            </p>
          </div>
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <div className="w-[4px] h-[86px] bg-[#D434FE]"></div>

            <p className="w-[53px] h-[53px] register-button rounded-full flex justify-center items-center relative">
              <span className="text-[24px] font-bold">3</span>
            </p>
          </div>

          <p className="text-[#D434FE] w-[436px] mt-[105px] text-[24px] font-bold text-left">
            November 18, 2023
          </p>
        </article>
        {/* end of third Announcement */}
        {/* forth Announcement */}
        <article className="flex justify-center items-center gap-x-[86px] mt-5">
          <p className="text-[#D434FE] w-[436px] mt-[105px] text-[24px] font-bold text-right">
            November 18, 2023
          </p>
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <div className="w-[4px] h-[86px] bg-[#D434FE]"></div>

            <p className="w-[53px] h-[53px] register-button rounded-full flex justify-center items-center relative">
              <span className="text-[24px] font-bold">4</span>
            </p>
          </div>

          <div className="w-[436px] text-left mt-auto">
            <p className="text-[#D434FE] text-[24px] font-bold">
              Announcement of the accepted teams and ideas
            </p>
            <p className="text-white text-[14px] font-normal mt-3">
              All teams whom idea has been accepted into getlinked tech{" "}
              <br></br>
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </article>
        {/* end of forth Announcement */}
        {/* fifth Announcement */}
        <article className="flex justify-center items-center gap-x-[86px] mt-5">
          <div className="w-[436px] text-right mt-auto">
            <p className="text-[#D434FE] text-[24px] font-bold">
              Getlinked Hackathon 1.0 Offically Begins
            </p>
            <p className="text-white text-[14px] font-normal mt-3">
              Accepted teams can now proceed to build their <br></br> ground
              breaking skill driven solutions
            </p>
          </div>
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <div className="w-[4px] h-[86px] bg-[#D434FE]"></div>

            <p className="w-[53px] h-[53px] register-button rounded-full flex justify-center items-center relative">
              <span className="text-[24px] font-bold">5</span>
            </p>
          </div>

          <p className="text-[#D434FE] w-[436px] mt-[105px] text-[24px] font-bold text-left">
            November 18, 2023
          </p>
        </article>
        {/* end of fifth Announcement */}
        {/* sixth Announcement */}
        <article className="flex justify-center items-center gap-x-[86px] mt-5">
          <p className="text-[#D434FE] w-[436px] mt-[105px] text-[24px] font-bold text-right">
            November 18, 2023
          </p>
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <div className="w-[4px] h-[86px] bg-[#D434FE]"></div>

            <p className="w-[53px] h-[53px] register-button rounded-full flex justify-center items-center relative">
              <span className="text-[24px] font-bold">6</span>
            </p>
          </div>

          <div className="w-[436px] text-left mt-auto">
            <p className="text-[#D434FE] text-[24px] font-bold">Demo Day</p>
            <p className="text-white text-[14px] font-normal mt-3">
              Teams get the opportunity to pitch their projects to judges.
              <br></br> The winner of the hackathon will also be announced on{" "}
              <br></br> this day
            </p>
          </div>
        </article>
        <div className="h-[1px] w-full bar mt-[42px]"></div>
        {/* end of sixth announcement */}
      </section>
      {/* end of laptop screen */}
      {/* mobile screen */}
      <section>
        <div className="text-white w-[305px] mx-auto md:hidden">
          <div className="">
            <div className="text-center mt-[80px] mb-[56px]">
              <h1 className="mb-[21px] text-[20px] font-bold">Timeline</h1>
              <p className="text-[14px] ">
                Here is the breakdown of the time we <br></br>anticipate using
                for the upcoming event.
              </p>
            </div>
            <div className="mt-[56px] text-[12px]">
              {timeline.map(({ id, title, details, date }) => {
                return (
                  <article key={id} className="mb-[40px] flex flex-row-reverse">
                    <div>
                      <p className=" font-bold mb-[13px] text-[#D434FE]">
                        {title}
                      </p>
                      <p className="leading-[20.5px] h-[63px]">{details}</p>
                      <p className="text-[#D434FE]">{date}</p>
                    </div>
                    <div className="mr-[9px] mt-auto">
                      <div className="flex flex-col gap-y-[9.5px] items-center">
                        <div className="w-[2px] h-[77px] bg-[#D434FE]"></div>
                        <div className="w-[19.3px] h-[19.32px] register-button rounded-full flex justify-center items-center">
                          <p>{id}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bar"></div>
      </section>
      {/* end of mobile screen */}
    </>
  );
};

export default Timeline;
