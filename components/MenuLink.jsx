"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-5 flex items-center gap-3 rounded-md hover:bg-bgHover ${
        pathname === item.path && "hover:bg-bgHover"
      }`}
    >
      <span
        className={`flex items-center gap-2 text-lg ${
          pathname === item.path && "hover:bg-bgHover"
        }`}
      >
        {item.icon}
        {item.title}
      </span>
    </Link>
  );
};

export default MenuLink;
