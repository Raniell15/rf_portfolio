import {
  ArrowDown,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronsDown,
} from "lucide-react";
import React from "react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen max-w-screen flex-col flex items-center justify-center z-10 py-24"
    >
      <div className="flex gap-4 flex-col  xl:flex-row justify-center items-center mx-auto text-center ">
        <div className="rounded-full opacity-0 overflow-hidden h-90 w-90 border-solid border-2 border-app-primary animate-fade-in-delay-1">
          <img src="../../HERO.jpg" className="h-full w-full object-cover" />
        </div>
        
        <div className="flex flex-col chat opacity-0 chat-start h-full animate-fade-in-delay-3">
          <div className="chat-header hidden md:block">
            <time className="text-sm text-2p mb-2 text-primary-foreground">
              12:15
            </time>
          </div>
          <div className="relative flex flex-col items-center justify-center md:items-baseline md:justify-baseline">
            <div className="chat-bubble rounded-4xl text-4xl text-2p text-left p-10 lg:pr-30 xl:text-5xl xl:text-nowrap bg-transparent border-2 border-solid border-app-primary text-foreground">
              Hey! I'm <span className="text-app-primary">Raniell!</span>
              <div className="text-lg mt-5">
                I am a{" "}
                <span className="text-primary-foreground">
                  Computer Engineer
                </span>{" "}
                with a passion for <br />
                software development! I mainly specialize in <br />
                <span className="text-primary-foreground">
                  Web Development!
                </span>
              </div>
            </div>
            <CheckCheck
              color={"#44ffd2"}
              className="hidden absolute bottom-0 right-19 md:block"
            />
          </div>
        </div>
      </div>
      <div className="text-2p text-xs absolute bottom-5 space-y-2 flex flex-col items-center animate-bounce">
        <p>Scroll</p>
        <ArrowDown color="#44ffd2" size={20} />
      </div>
    </section>
  );
};
