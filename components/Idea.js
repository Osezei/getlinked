import React from "react";
import BigIdea from "../public/the big idea 1.png";
import Image from "next/image";

const Idea = () => {
  return (
    <section className="">
      <div className="flex justify-center items-center mt-[62px] mb-[78px]">
        <Image
          src={BigIdea}
          width={490}
          height={477}
          alt="big idea"
          className="mr-[109px]"
        />
        <div className="text-white w-[535px]">
          <h1>
            Introduction to getlinked <span>tech Hackathon 1.0</span>
          </h1>
          <p>{`Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!`}</p>
        </div>
      </div>
      <div className="h-[1px] w-full bar"></div>
    </section>
  );
};

export default Idea;
