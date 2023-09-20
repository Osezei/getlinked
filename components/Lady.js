import React from "react";
import Image from "next/image";
import LadyPic from "../public/lady.png";

const Lady = () => {
  return (
    <>
      <section className="flex justify-center gap-x-[48px] items-center">
        <div className="w-[535px]">
          <h1>Rules and Guidelines</h1>
          <p>
            {`Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!`}
          </p>
        </div>
        <Image src={LadyPic} width={664} height={664} alt="Lady" />
      </section>
      <div className="h-[1px] w-full bar"></div>
    </>
  );
};

export default Lady;
