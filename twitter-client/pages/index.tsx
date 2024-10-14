import Image from "next/image";
import localFont from "next/font/local";
import { BsTwitterX } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import React from "react";
import {Inter} from "next/font/google";

const inter=Inter({subsets:["latin"]})



interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <IoSearchOutline/>,
  },
  {
    title: "Notifications",
    icon: <IoNotificationsOutline />,
  },
  {
    title:"Messages",
    icon: <HiOutlineEnvelope/>,  
  },
  {
    title: "Bookmarks",
    icon: <IoBookmarkOutline />,
  },
  {
    title: "Profile",
    icon: <AiOutlineUser />,
  }
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56 ">
        <div className="col-span-3  pt-2 ">
          <div className="text-3xl hover:bg-gray-900 h-fit p-3 w-fit cursor-pointer rounded-full transition-all">
            <BsTwitterX />
          </div>
          <div>
            <ul  className="">
              {sidebarMenuItems.map((item) => (
                <li className="flex items-center justify-start  gap-4 text-3xl  hover:bg-gray-900 h-fit p-3 pr-6 w-fit cursor-pointer rounded-full transition-all" key={item.title}>
                  <span>{item.icon}</span>
                  <span className="text-xl tracking-normal ">{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-sky-500 font-bold rounded-full mt-2 w-5/6 py-3  text-lg">Post</button>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-700  "></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
