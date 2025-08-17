import { Facebook, Instagram, Linkedin, Loader2, Mail, Phone, Send } from "lucide-react";
import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";


export const Contact = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      formData.append("access_key", "6161c383-be87-4b0a-9eaa-e7704ae3b975");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
      } else {
        console.log("Error", data);
        toast.error("Error: Message not sent.")
        setResult(data.message);
      }

      setIsSubmitting(true);
      setTimeout(() => {
        toast.success("Message Sent!");
        setIsSubmitting(false);
      }, 1500)
      
    }
  
  useEffect(() => {
    console.log(window.scrollY);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const category = localStorage.getItem("category");
      
      if (category === "all") {
        setIsScrolled(scrollPosition > 5600);
      } else if (category === "software") {
        setIsScrolled(scrollPosition > 5000);
      } else if (category === "hardware") {
        setIsScrolled(scrollPosition > 4400);
      } else {
        setIsScrolled(scrollPosition > 4200);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col space-y-4 items-center justify-center min-h-screen"
    >
      <h2 className={`text-2p text-3xl opacity-0 md:text-4xl ${isScrolled ? "animate-fade-in" : ""}`}>
        Get In <span className="text-app-primary">Touch!</span>
      </h2>
      <p className={`text-2p text-sm max-w-5xl opacity-0 ${isScrolled ? "animate-fade-in-delay-1" : ""}`}>
        I’d love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out. 
        Fill out the form below or drop me an email—I'll get back to you as soon as I can. Thanks for stopping by!
      </p>
      <div className="flex flex-col space-y-10 items-center justify-center md:space-x-20 mt-20 md:flex-row">
        <div className={`flex flex-col items-center opacity-0 justify-center space-y-5 ${isScrolled ? "animate-fade-in-delay-2" : ""}`}>
          <h2 className="text-2p text-lg">Contact Information</h2>
          <div className="space-y-5">
            <div className="flex text-silk items-center space-x-5">
              <div className="bg-gray-800 p-2 rounded-full">
                <Mail color="#44ffd2"/>
              </div>
              <a href="mailto:raniellschl@gmail.com">
                raniellschl@gmail.com
              </a>
            </div>
            <div className="flex text-silk items-center space-x-5">
              <div className="bg-gray-800 p-2 rounded-full">
                <Phone color="#44ffd2"/>
              </div>
              <a href="tel:+639212637936">
                +63 921 263-7936
              </a>
            </div>
          </div>
          <div className={`flex-col space-y-4`}>
            <h2 className="text-silk text-primary-foreground">Connect With Me</h2>
            <div className="flex space-x-3 items-center justify-center">
              <a>
                <Linkedin />
              </a>
              <a>
                <Facebook />
              </a>
              <a>
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div  className={`flex flex-col bg-gray-800 p-13 rounded-lg space-y-4 opacity-0 ${isScrolled ? "animate-fade-in-delay-3" : ""}`}>
          <h2 className="text-2p text-lg">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <input type="hidden" name="access_key" value="6161c383-be87-4b0a-9eaa-e7704ae3b975"></input>
            <div className="flex flex-col text-silk">
              <label htmlFor="name" className="text-lg">Your Name</label>
              <input
                className="app-input"
                placeholder="John Doe"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col text-silk">
              <label htmlFor="email" className="text-lg">Your Email</label>
              <input
                className="app-input"
                placeholder="john@gmail.com"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col text-silk">
              <label htmlFor="message" className="text-lg">Your Message</label>
              <textarea
                className="app-input"
                placeholder="Hey! I saw your portfolio..."
                type="text"
                name="message"
                required
              />
            </div>
            <button className={`flex app-btn text-silk-bold text-lg items-center justify-center rounded-full bg-app-primary/80 p-2`} disabled={isSubmitting}>{
              isSubmitting ? (<div className="flex items-center space-x-3"><span>Sending Message </span> <Loader2 className="animate-spin" size={20}/></div>) : (<div className="flex items-center space-x-3"><span>Send Message</span> <Send size={20}/></div>)
            }</button>
          </form>
        </div>
      </div>
    </section>
  );
};
