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
        title: "Voters",
        path: "/adminPanel/voters",
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

const Sidebar = () => {
  return (
    <div className="sticky top-0 flex flex-col pl-10 text-8xl gap-y-4">
      <ul>
        {menuItems.map((item) => (
          <li key={item.title}>
            <span className="mx-2 my-0 text-sm font-bold text-textSoft">
              {item.title}
            </span>
            {item.list.map((listItem) => (
              <MenuLink item={listItem} key={listItem.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
