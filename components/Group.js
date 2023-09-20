import React from "react";
import People from "../public/group.png";
import Image from "next/image";
import { criteria } from "@/data";
const Group = () => {
  return (
    <>
      <section className="flex justify-center gap-x-[53px] items-center mt-[78px] text-white">
        <Image src={People} alt="people" width={710} height={587} />
        <div className="w-[564px]">
          {criteria.map(({ id, title, note }) => {
            return (
              <article key={id} className="">
                <h1>
                  {title}
                  <span>{note}</span>
                </h1>
              </article>
            );
          })}
        </div>
      </section>
      <div className="h-[1px] w-full bar"></div>
    </>
  );
};

export default Group;
