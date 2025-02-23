import React from "react";
import {sidebarIcons} from "./Iconify"
import { Icon } from '@iconify/react';
import Dashboard from "../pages/Home";

const Sidebar = () => {
  return (
    <div className="bg-[#FA6E3F] h-screen w-64 p-5 flex flex-col text-white">
      <div className="h-16 w-16 bg-white rounded-full mb-6"></div>
      <ul className="space-y-4">
        <li className="font-semibold flex"> <Icon icon={sidebarIcons["Dashboard"]} width="24" height="24" className="text-white mx-3" />Dashboard</li>
        <li className="flex"> <Icon icon={sidebarIcons["Roadmaps"]} width="24" height="24" className="text-white mx-3" />Roadmaps</li>
        <li className="flex"> <Icon icon={sidebarIcons["Progress"]} width="24" height="24" className="text-white mx-3" />Progress</li>
        <li className="flex"> <Icon icon={sidebarIcons["Add Subject"]} width="24" height="24" className="text-white  mx-3" />Add Subject</li>
        <li className="flex"> <Icon icon={sidebarIcons["Schedule"]} width="24" height="24" className="text-white mx-3" /> Schedule</li>
      </ul>
      <div className="mt-auto">
        <button className="text-red-300 flex "> <Icon icon={sidebarIcons["Logout"]} width="24" height="24" className="text-white mx-3" /> Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
