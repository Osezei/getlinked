import React from "react";
import Image from "next/image";
import Think from "../public/thinking.png";
import { questions } from "@/data";

const Questions = () => {
  return (
    <>
      <section className="flex justify-center items-center gap-x-[25px] mb-[63px]">
        <div>
          {questions.map(({ id, note }) => {
            return <article key={id}>{note}</article>;
          })}
        </div>
        <Image src={Think} width={741} height={741} alt="thinking man" />
      </section>
      <div className="h-[1px] w-full bar"></div>
    </>
  );
};

export default Questions;
