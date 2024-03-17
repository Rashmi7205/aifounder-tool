import React from "react";
import { Card, Navbar } from "../Components";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Landing section */}
      <div className="w-full bg-[url('/images/hero.svg')] h-screen">
        <Navbar />
        <div className="relative h-4/5 flex items-center justify-around w-full">
          <div className="w-2/5 h-full flex flex-col item-center justify-center gap-5">
            <h1 className="w-full font-montserrat font-bold text-6xl leading-14 bg-gradient-to-r from-purple-300 to-purple-700 bg-clip-text text-transparent capitalize">
            Get all the List of 
            </h1>
            <h2 className="font-montserrat font-bold text-4xl leading-14 text-slate-50 bg-clip-text">
            Cutting-Edge Solutions
            </h2>
            <p>
            Navigate through a curated collection of the latest and most innovative AI tools available across various domains. From art and creativity to conversational AI, design, e-commerce, finance, education, and beyond, we've meticulously curated a diverse range of tools to suit every need.
            </p>
            <button className="w-2/5 font-semibold py-3 bg-gradient-to-r from-purple-700 to-purple-300 rounded-full" >
              Find your tool ->
            </button>
          </div>
          <div className="w-2/5 h-full flex items-center justify-center">
              <div className="bg-[url('/images/home.jpg')] bg-center bg-cover  w-3/5 h-3/5 rounded-[60px] rounded-bl-[190px] shadow-md ">

              </div>
          </div>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default Homepage;
