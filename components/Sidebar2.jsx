import React from "react";

const Sidebar2 = () => {
  return (
    <div className="w-full md:w-[360px] inline-flex flex-col p-3 rounded-2xl bg-surface-100 dark:bg-surfacedark-100">
      {/* <!-- section header --> */}
      <div className="py-[18px] px-4 rounded-full">
        <p className="text-sm tracking-[.00714em] font-medium">Mail</p>
      </div>
      <ul className="flex flex-col">
        <li className="relative">
          <a
            href="#"
            className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full active hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30"
          >
            <span className="material-symbols-outlined">inbox</span>
            Inbox
            <span className="flex flex-grow justify-end text-sm tracking-[.00714em]">
              12
            </span>
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30"
          >
            <span className="material-symbols-outlined">outgoing_mail</span>
            Sent
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30"
          >
            <span className="material-symbols-outlined">favorite</span>
            Favorite
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30"
          >
            <span className="material-symbols-outlined">delete</span>
            Trash
          </a>
        </li>
      </ul>
      <hr className="mx-4 border-gray-200 dark:border-gray-700" />

      {/* <!-- section header --> */}
      <div className="py-[18px] px-4 rounded-full">
        <p className="text-sm tracking-[.00714em] font-medium">Labels</p>
      </div>
      <ul className="flex flex-col">
        <li className="relative">
          <a
            href="#"
            className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30"
          >
            <span className="material-symbols-outlined">work</span>
            Work
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30"
          >
            <span className="material-symbols-outlined">diversity_2</span>
            Family
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30"
          >
            <span className="material-symbols-outlined">group</span>
            Friends
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="flex flex-row items-center gap-3 py-4 pl-4 pr-6 rounded-full hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:bg-opacity-30 dark:hover:bg-opacity-30"
          >
            <span className="material-symbols-outlined">star</span>
            Clients
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar2;
