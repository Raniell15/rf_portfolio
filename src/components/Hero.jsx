import React from "react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container flex max-w-4xl mx-auto text-center z-10">
        <div className="rounded-full overflow-hidden h-100 w-100">
          <img src="../../tmp.jpg" className="h-full w-full object-cover" />
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">test test test</div>
        </div>
      </div>
    </section>
  );
};
