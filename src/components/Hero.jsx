import { Check, CheckCheck } from "lucide-react";
import React from "react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen min-w-screen flex items-center justify-center px-4"
    >
      <div className="flex space-x-10 max-w-8xl justify-center items-center mx-auto text-center z-10">
        <div className="rounded-full overflow-hidden h-90 w-90 border-solid border-2 border-primary">
          <img src="../../tmp.jpg" className="h-full w-full object-cover" />
        </div>
        <div className="chat chat-start h-ful flex flex-col">
          <div className="chat-header">
            <time className="text-sm opacity-50 text-2p mb-2">12:15</time>
          </div>
          <div className="relative">
            <div className="chat-bubble rounded-2xl text-6xl text-2p text-left p-10  pr-36 xl:text-nowrap">Hey! I'm <span >Raniell!</span>
              <div className="text-xl mt-5">
                I am a Computer Engineer with a passion for   <br/>
                software development! I mainly specialize in <br/>
                Web Development!
              </div>
            </div>
            <CheckCheck className="absolute bottom-0 right-22"/>
          </div>
        </div>
        
      </div>
    </section>
  );
};
