import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen py-24"
    >
      <h2 className="text-2p text-3xl md:text-4xl">
        Get In <span className="text-app-primary">Touch!</span>
      </h2>
      <div className="flex">
        <div className="flex flex-col">
          <h2>Contact Information</h2>
          <Mail />
          <Phone />
          <div className="flex-col">
            <h2>Connect With Me</h2>
            <div className="flex">
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
        <div>
          <form className="flex flex-col">
            <h2>Send a Message</h2>
            <label htmlFor="name">Your Name</label>
            <input
              className="app-input"
              placeholder="John Doe"
              type="text"
              id="name"
            />
            <label htmlFor="email">Your Email</label>
            <input
              className="app-input"
              placeholder="john@gmail.com"
              type="text"
              id="email"
            />
            <label htmlFor="message">Your Message</label>
            <textarea
              className="app-input"
              placeholder="Hey! I saw your portfolio..."
              type="text"
              id="message"
            />
          </form>
        </div>
      </div>
    </section>
  );
};
