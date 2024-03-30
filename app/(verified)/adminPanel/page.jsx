import ParticipantsVsVotesCast from "@/components/Analytics/ParticipantsVsVotesCast";
import SimpleChart from "@/components/Analytics/SimpleChat";
import React from "react";

const AdminPanelPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen p-4 bg-bgSoft">
      <SimpleChart />
    </div>
  );
};

export default AdminPanelPage;
