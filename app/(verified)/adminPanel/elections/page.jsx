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
];

const ElectionsPage = () => {
  return (
    <div className="min-h-screen p-5 mt-5 rounded-md bg-bgSoft text-text">
      <div className="flex items-center justify-between">
        Search
        <Link href="/adminPanel/users/new">
          <button className="px-2 py-1 mr-16 rounded-lg bg-button">
            New Election
          </button>
        </Link>
      </div>
      <table className="w-full mt-8 text-text">
        <thead>
          <tr>
            <th className="text-start">Title</th>
            <th>Start</th>
            <th>End</th>
            <th>Status</th>
            <th>Type</th>
            <th>Location</th>
            <th>Anon</th>
            <th>Results-Admins</th>
            <th>Results-Voters</th>
          </tr>
        </thead>
        <tbody>
          {elections.map((election) => (
            <tr key={election._id} className="cursor-pointer hover:bg-bgHover">
              <td className="flex gap-4">
                <div className="flex items-center">{election.title}</div>
              </td>
              <td>
                {election.startDate} {election.startTime}
              </td>
              <td>
                {election.endDate} {election.endTime}
              </td>
              <td>
                <span
                  className={`${
                    election.status === "active"
                      ? "bg-green-500"
                      : "bg-orange-500"
                  } px-3 py-1 rounded-md text-bgSoft`}
                >
                  {election.status}
                </span>
              </td>
              <td>{election.type}</td>
              <td>{election.location}</td>
              <td>{election.anonymity}</td>
              <td>{election.resultViewingAdmins}</td>
              <td>{election.resultViewingVoters}</td>
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
    </div>
  );
};

export default ElectionsPage;
