import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const elections = [
  {
    id: 1,
    title: "2022 General Election",
    startDate: "2022-11-08",
    endDate: "2022-11-18",
    startTime: "08:00",
    endTime: "20:00",
    type: "live",
    location: "online",
    anonymity: "secret",
    resultViewingAdmins: "after",
    resultViewingVoters: "after",
    status: "active",
    users: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  },
  {
    id: 2,
    title: "2022 Primary Election",
    startDate: "2022-11-08",
    endDate: "2022-11-18",
    startTime: "08:00",
    endTime: "20:00",
    type: "live",
    location: "both",
    anonymity: "poll",
    resultViewingAdmins: "during",
    resultViewingVoters: "never",
    status: "inactive",
    users: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  },
];

const ElectionsPage = () => {
  return (
    <div className="min-h-screen rounded-md md:mt-5 md:p-5 bg-bgSoft text-text">
      <div className="flex items-center justify-between w-full">
        <Search placeholder={"Search for an Election..."} />
        <Link href="/adminPanel/elections/new">
          <button className="px-2 py-1 mr-4 rounded-lg md:mr-16 bg-button">
            New Election
          </button>
        </Link>
      </div>
      <table className="hidden w-full mt-8 md:table text-textSoft">
        <thead>
          <tr>
            <th className="text-start">Title</th>
            <th>Start</th>
            <th>End</th>
            <th>Type</th>
            <th>Location</th>
            <th>Anonymity</th>
            <th>Result - Admins</th>
            <th>Result - Voters</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-text">
          {elections.map((election) => (
            <tr key={election._id} className="cursor-pointer hover:bg-bgHover">
              <td>
                <div className="flex items-center gap-4">
                  <div>{election.title}</div>
                </div>
              </td>
              <td>
                <div>
                  <div>{election.startDate}</div>
                  <div>{election.startTime}</div>
                </div>
              </td>
              <td>
                <div>
                  <div>{election.endDate}</div>
                  <div>{election.endTime}</div>
                </div>
              </td>
              <td>{election.type}</td>
              <td>{election.location}</td>
              <td>{election.anonymity}</td>
              <td>{election.resultViewingAdmins}</td>
              <td>{election.resultViewingVoters}</td>
              <td>
                <span
                  className={`${
                    election.status === "active"
                      ? "text-green-500 border"
                      : "text-orange-500 border"
                  } px-3 py-1 rounded-md text-bgSoft`}
                >
                  {election.status}
                </span>
              </td>
              <td>
                <div className="flex justify-center gap-3">
                  <Link href={`/dashboard/users/${election._id}`}>
                    <button
                      className={`px-[10px] py-[5px] text-text border-none cursor-pointer bg-button rounded-md`}
                    >
                      View
                    </button>
                  </Link>
                  <form action="">
                    <input type="hidden" name="id" value={election._id} />
                    <button
                      className={`px-[10px] py-[5px] text-text border-none cursor-pointer bg-red-500 rounded-md`}
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="w-full mt-8 md:hidden text-text">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {elections.map((election) => (
            <tr key={election._id} className="cursor-pointer hover:bg-bgHover">
              <td>
                <div className="flex items-center gap-4">
                  <div>{election.title}</div>
                </div>
              </td>
              <td>
                <span
                  className={`${
                    election.status === "active"
                      ? "text-green-500 border"
                      : "text-orange-500 border"
                  } px-3 py-1 rounded-md text-bgSoft`}
                >
                  {election.status}
                </span>
              </td>
              <td>
                <div className="flex justify-center gap-3">
                  <Link href={`/dashboard/users/${election._id}`}>
                    <button
                      className={`px-[10px] py-[5px] text-text border-none cursor-pointer bg-button rounded-md`}
                    >
                      View
                    </button>
                  </Link>
                  <form action="">
                    <input type="hidden" name="id" value={election._id} />
                    <button
                      className={`px-[10px] py-[5px] text-text border-none cursor-pointer bg-red-500 rounded-md`}
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={5} />
    </div>
  );
};

export default ElectionsPage;
