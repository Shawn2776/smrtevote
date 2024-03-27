import { deleteUser } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const users = [
  {
    id: 1,
    givenName: "John",
    familyName: "Doe",
    email: "jdoe@gmail.com",
    phone: "2085551234",
    status: "active",
    userType: "Editor",
    addrLine1: "123 Main St",
    addrLine2: "",
    city: "Coeur d'Alene",
    state: "ID",
    zip: "83814",
    elections: [
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
    givenName: "Jane",
    familyName: "Doe",
    email: "janedoe@gmail.com",
    phone: "2085555678",
    status: "active",
    userType: "Voter",
    addrLine1: "123 Main St",
    addrLine2: "",
    city: "Coeur d'Alene",
    state: "ID",
    zip: "83814",
    elections: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  },
  {
    id: 3,
    givenName: "Jumpin Jehosephat",
    familyName: "Bumblebee-Tuna",
    email: "jjbttheoneandonly@thisisashortdomainithink.com",
    phone: "2085551234",
    status: "disabled",
    userType: "Voter",
    addrLine1: "3490 Seskatchean Lakeshore Drive",
    addrLine2: "Suite 8",
    city: "Coeur d'Alene",
    state: "ID",
    zip: "83814",
    elections: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  },
];

const UsersPage = () => {
  return (
    <div className="p-5 mt-5 rounded-md bg-bg text-text">
      <div className="flex items-center justify-between">
        Search
        <Link href="/adminPanel/users/new">
          <button className="btn btn-primary">Add User</button>
        </Link>
      </div>
      <table className="w-full mt-8 text-text">
        <thead>
          <tr>
            <th className="text-start">Name</th>
            <th className="text-start">Email</th>
            <th>Created</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="cursor-pointer hover:bg-bgHover">
              <td className="flex gap-4">
                <div className="flex items-center justify-center object-cover">
                  <Image
                    src={user.img || "/noavatar2.png"}
                    width={50}
                    height={50}
                    alt=""
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex items-center">
                  {user.givenName} {user.familyName}
                </div>
              </td>
              <td className="text-start">{user.email}</td>
              <td>01.13.2022</td>
              <td>
                <span
                  className={`${
                    user.status === "active" ? "bg-green-500" : "bg-orange-500"
                  } px-3 py-1 rounded-md text-bgSoft`}
                >
                  {user.status}
                </span>
              </td>
              <td>
                <div className="flex justify-center gap-3">
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button
                      className={`px-[10px] py-[5px] text-text border-none cursor-pointer bg-button rounded-md`}
                    >
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user._id} />
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

export default UsersPage;
