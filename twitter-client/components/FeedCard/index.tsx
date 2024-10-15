import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BiUpload } from "react-icons/bi";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 border-l-0 border-r-0 p-5 border-b-0 cursor-pointer hover:bg-gray-900 transition-all">
      <div className="grid grid-cols-12 ">
        <div className="col-span-1 ">
          <Image
            className="rounded-full"
            src={"https://avatars.githubusercontent.com/u/118015485?v=4"}
            alt="user-image"
            width={50}
            height={50}
          />
        </div>
        <div className="col-span-11 pl-2">
          <div className="flex items-center">
          <h1 className="font-medium">Sanket Fulpagare</h1>
          <p className="text-gray-500 text-sm ml-2">@sanketfulpagare2 </p>
          <p className="text-gray-500 text-sm mx-2">·</p>
          <p className="text-gray-500 text-sm">2h</p>

          </div>


          
          <p className="font-light">
            The PM of Singapore travels on official duty aboard a low-cost
            airline—on a normal scheduled flight, no frills, no national or
            private jet, and without a large entourage at the taxpayers’
            expense. This is how respect is earned. 🫡
          </p>
          <div className="flex justify-between mt-5 w-[90%] text-gray-500">
            <div><BiMessageRounded/> </div>
            <div><FaRetweet/> </div>
            <div><FaRegHeart/> </div>
            <div><BiUpload/> </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
