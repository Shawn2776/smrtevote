"use client";

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const SimpleChartTest = () => {
  const chartData = {
    labels: ["Test 1", "Test 2"],
    datasets: [
      {
        label: "Sample Data",
        data: [10, 20],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SimpleChartTest;

// "use client";

// import { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);

// const ParticipantsVsVotesCast = () => {
//   const dummyElectionData = [
//     {
//       title: "Student Council Election",
//       participants: ["user1", "user2", "user3", "user4", "user5"],
//       votes: [
//         { voterId: "user1", candidate: "Alice" },
//         { voterId: "user2", candidate: "Bob" },
//         { voterId: "user3", candidate: "Charlie" },
//         { voterId: "user4", candidate: "Alice" },
//       ],
//     },
//     {
//       title: "Faculty Election",
//       participants: ["user6", "user7", "user8", "user9", "user10", "user11"],
//       votes: [
//         { voterId: "user6", candidate: "Dave" },
//         { voterId: "user7", candidate: "Eve" },
//         { voterId: "user8", candidate: "Fiona" },
//         { voterId: "user9", candidate: "Dave" },
//         { voterId: "user10", candidate: "Eve" },
//       ],
//     },
//   ];
//   // const [electionData, setElectionData] = useState([]);
//   const [electionData, setElectionData] = useState(dummyElectionData);

//   const chartData = {
//     labels: electionData.map((e) => e.title),
//     datasets: [
//       {
//         label: "Number of Participants",
//         data: electionData.map((e) => e.participants.length),
//         backgroundColor: "rgba(54, 162, 235, 0.5)",
//       },
//       {
//         label: "Number of Votes Cast",
//         data: electionData.map((e) => e.votes.length),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default ParticipantsVsVotesCast;
