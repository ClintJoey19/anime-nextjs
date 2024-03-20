import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, desc, date, img }) => {
  return (
    <div className="flex flex-col rounded-md">
      <div className="w-full h-[30rem] relative rounded-t-md overflow-hidden">
        <Image src={img} alt={title} fill />
      </div>
      <div className="flex flex-col gap 2">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-slate-500">{desc}</p>
        <Link href={`/blog/title`} className="hover:underline">
          READ MORE
        </Link>
        <div className="flex justify-end w-full">
          <span className="text-slate-500">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
