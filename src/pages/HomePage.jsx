import React from "react";

import { Navbar } from "../components/Navbar";
import { Background } from "../components/Background";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Background />
    </div>
  );
};
