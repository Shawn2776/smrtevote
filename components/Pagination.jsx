"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEMS_PER_PAGE = 4;

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext =
    ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-between p-3 px-10 py-4">
      <button
        className={`px-3 py-2 rounded-lg ${
          !hasPrev
            ? "cursor-not-allowed bg-gray-500"
            : "cursor-pointer bg-button"
        } `}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={`px-3 py-2 rounded-lg ${
          !hasNext
            ? "cursor-not-allowed bg-gray-500"
            : "cursor-pointer bg-button"
        } `}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
