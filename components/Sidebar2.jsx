"use client";

import {
  MdDashboard,
  MdHowToVote,
  MdGroups2,
  MdOutlineListAlt,
  MdSettings,
} from "react-icons/md";
import { FaTeamspeak } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GoReport } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";
import MenuLink from "./MenuLink";
import React from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/adminPanel",
        icon: <MdDashboard />,
      },
      {
        title: "Elections",
        path: "/adminPanel/elections",
        icon: <MdHowToVote />,
      },
      {
        title: "Users",
        path: "/adminPanel/users",
        icon: <MdGroups2 />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Results",
        path: "/adminPanel/analytics/results",
        icon: <MdOutlineListAlt />,
      },
      {
        title: "Teams",
        path: "/adminPanel/analytics/teams",
        icon: <FaTeamspeak />,
      },
      {
        title: "Reports",
        path: "/adminPanel/analytics/reports",
        icon: <HiOutlineDocumentReport />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/adminPanel/user/settings",
        icon: <MdSettings />,
      },
      {
        title: "Administration",
        path: "/adminPanel/user/administration",
        icon: <GrUserAdmin />,
      },
      {
        title: "Help",
        path: "/adminPanel/user/help",
        icon: <GoReport />,
      },
    ],
  },
];

const Sidebar2 = () => {
  const router = useRouter();

  const handleChange = (event) => {
    const path = event.target.value;
    router.push(path);
  };

  return (
    <div className="w-full md:hidden">
      {/* <h1 className="mb-2 text-textSoft">Page</h1> */}
      <div className="w-full px-4 pb-0 mb-0">
        <select
          className="flex-shrink w-[95%] pl-5 text-2xl border-none rounded-md bg-bgSoft"
          onChange={handleChange}
        >
          {menuItems.map((item) => (
            <optgroup key={item.title} label={item.title}>
              {item.list.map((opt) => (
                <option key={opt.title} value={opt.path}>
                  {opt.title}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar2;
