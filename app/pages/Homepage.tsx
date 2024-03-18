import React from "react";
import { Card, Navbar } from "../Components";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Landing section */}
      <div className="w-full bg-[url('/images/hero.svg')] h-screen">
        <Navbar />
        <div className="relative h-[100vh] md:h-4/5 flex  flex-col-reverse md:flex-row items-center justify-around w-full">
          <div className="w-4/5 md:w-2/5 h-full flex flex-col item-center justify-center gap-5">
            <h1 className="w-full font-montserrat font-bold md:text-6xl leading-14 bg-gradient-to-r from-purple-300 to-purple-700 bg-clip-text text-transparent capitalize">
            Get all the List of 
            </h1>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl leading-14 text-slate-50 bg-clip-text">
            Cutting-Edge Solutions
            </h2>
            <p className="text-[10px] text-md">
            Navigate through a curated collection of the latest and most innovative AI tools available across various domains. From art and creativity to conversational AI, design, e-commerce, finance, education, and beyond, we've meticulously curated a diverse range of tools to suit every need.
            </p>
            <Link 
            href="/get-started"
            className="w-2/5 text-center font-semibold py-3 bg-gradient-to-r from-purple-700 to-purple-300 rounded-full" >
              Find your tool 
            </Link>
          </div>
          <div className="w-full md:w-2/5 md:h-full h-1/2 flex items-center justify-center">
              <div className="bg-[url('/images/home.jpg')] bg-center bg-cover h-full  w-3/5 md:h-3/5 rounded-[60px] rounded-bl-[190px] shadow-md ">

              </div>
          </div>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default Homepage;
