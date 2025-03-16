import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import {user_data,roadmap_data} from "../db";
import { Icon } from '@iconify/react';
import { subjectIcons } from "../components/Iconify";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [roadmaps, setRoadmaps] = useState([]);
  
  
  //!API CALL
//   useEffect(() => {
//     // Fetch user info
//     axios.get("https://api.example.com/user")
//       .then((res) => setUser(res.data))
//       .catch((err) => console.error("User fetch error:", err));

//     // Fetch roadmaps
//     axios.get("https://api.example.com/roadmap")
//       .then((res) => setRoadmaps(res.data))
//       .catch((err) => console.error("Roadmap fetch error:", err));
//   }, []);
   if(user==null ){
    setUser(user_data);
    setRoadmaps(roadmap_data);
   }
   
  return (
    <div className="flex h-screen bg-[#1E1E1E] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Search Bar */}
        <div className="w-full max-w-lg mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
          />
        </div>

        {/* Welcome Card */}
        {user && (
          <div className="bg-gradient-to-r from-orange-500 to-black p-6 rounded-lg w-full mb-6">
            <p className="text-sm">{new Date().toDateString()}</p>
            <h2 className="text-2xl font-bold">Welcome back, {user.name}!</h2>
            <p className="text-sm text-gray-300">Stay updated in your student portal</p>
          </div>
        )}

        {/* Roadmaps */}
        <div>
      <h3 className="text-xl font-semibold mb-4 text-white">Roadmaps</h3>
      <div className="grid grid-cols-2 gap-4">
        {roadmaps.map((roadmap, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-center justify-between shadow-lg">
            <div>
              <h4 className="text-white text-lg font-medium">{roadmap.title}</h4>
              <div className="mt-2">
                <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {roadmap.completedNodes}/{roadmap.totalNodes} Completed
                </span>
              </div>
            </div>
            <Icon
              icon={subjectIcons[roadmap.title] || "mdi:book"}
              width="32"
              height="32"
              className="text-white"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
