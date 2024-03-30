import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
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
    givenName: "Jumpin",
    familyName: "BumblTuna",
    email: "jjbtthe@thisinithink.com",
    phone: "2085551234",
    status: "disabled",
    userType: "Voter",
    addrLine1: "3490 Sesk Drive",
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
    <div className="min-h-screen rounded-md md:mt-5 md:p-5 bg-bgSoft text-text">
      <div className="flex items-center justify-between w-full">
        <Search placeholder={"Search for a user..."} />
        <Link href="/adminPanel/users/new">
          <button className="px-2 py-1 mr-4 rounded-lg md:mr-16 bg-button">
            New User
          </button>
        </Link>
      </div>
      <div className="hidden px-4 py-2 mt-8 rounded-lg bg-bg md:block">
        <table className="hidden w-full md:table text-textSoft bg-bg">
          <thead className="border-b">
            <tr>
              <th className="text-start">Name</th>
              <th className="text-start">Email</th>
              <th>Created</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-text">
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
                      user.status === "active"
                        ? "bg-green-500"
                        : "bg-orange-500"
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
      <div className="px-4 py-2 mt-8 mr-4 rounded-lg md:hidden bg-bg">
        <table className="w-full mt-8 md:hidden text-text bg-bg">
          <thead>
            <tr>
              <th className="text-start">Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="cursor-pointer hover:bg-bgHover">
                <td>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center object-cover">
                      <Image
                        src={user.img || "/noavatar2.png"}
                        width={50}
                        height={50}
                        alt=""
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      {user.givenName} {user.familyName}
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className={`${
                      user.status === "active"
                        ? "text-green-500 border"
                        : "text-orange-500 border"
                    } px-3 py-1 rounded-md text-bgSoft`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <div className="flex flex-col justify-center gap-1">
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className="cursor-pointer text-button">
                        View
                      </button>
                    </Link>
                    <form action="">
                      <input type="hidden" name="id" value={user._id} />
                      <button className="px-[2px] py-[1px] cursor-pointer text-red-500 rounded-md bg-transparent">
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
      <Pagination count={5} />
    </div>
  );
};

export default UsersPage;
