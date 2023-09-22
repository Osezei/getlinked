import React from "react";
import { timeline } from "@/data";

const Timeline = () => {
  return (
    <>
      {/* laptop screen */}
      {/* mobile screen */}
      <section className="text-white hidden">
        <div>
          <h1>Timeline</h1>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
          <div>
            {timeline.map(({ id, title, details, date }) => {
              return (
                <article key={id}>
                  <div>
                    <p>{title}</p>
                    <p>{details}</p>
                  </div>
                  <p>{id}</p>
                  <p>{date}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* end of mobile screen */}
    </>
  );
};

export default Timeline;
