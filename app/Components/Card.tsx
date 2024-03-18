"use client";
import { useEffect, useState } from "react";
import '@/app/globals.css';
import Link from "next/link";

interface CardProps{
    Site_name:string;
    link:string;
    type:string;
    category:string;
};

const Card: React.FC<CardProps> = (cardDetails:CardProps) => {
  const colors = ["#F6995C", "#51829B", "#FF3EA5", "#9195F6", "#A5DD9B"];

  const [data,setData] = useState({
      siteName: cardDetails.Site_name || "",
      link:cardDetails.link || "#",
      type:cardDetails.type || 'type',
      category:cardDetails.category||"category",
      image:"#",
      description:"",
  });

  const getWebInfo = async ()=>{
    try {
      const res = await  fetch('http://localhost:3000/api/getdata',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url:data.link
        })
      });

      const {metaData} = await res.json();
      console.log(metaData)
      setData({
        ...data,
        image:metaData.icon,
        description:metaData.description
      });
    } catch (error:any) {
        console.log(error.message);
    }
     
     
  }

  useEffect(()=>{
    getWebInfo();
  },[]);  

  return (
    <div className="w-[310px] h-[400px] bg-gradient-radial-purple rounded-2xl flex flex-col items-center justify-evenly gap-4">
        <div className=" w-[150px] h-[150px] rounded-full bg-opacity-40 bg-black overflow-hidden">
          <img
          className="w-full h-full"
          src={data.image}
          />
        </div>
        <h2 className=" w-full font-bold text-center text-white text-lg font-montserrat">{cardDetails?.Site_name}</h2>
        <div className=" w-[154px] border-t border-solid border-purple-300 border-opacity-33 h-[0px]"></div>
        <p className="w-4/5 font-montserrat font-normal text-white text-xs leading-4">
          {data.description}
        </p>
        <Link
        href={data.link}
        className="bg-gradient-to-r from-purple-600 to-purple-300 rounded-full px-5 py-2"
        > 
            try it now
        </Link>

    </div>

  );
};

export default Card;
