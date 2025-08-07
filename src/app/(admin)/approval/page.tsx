import SummarizeCard from "@/components/summarize-card";
import React from "react";

const approvalSum = [
  {
    title: "Total Approval",
    amount: "100",
  },
  {
    title: "Approval Selesai",
    amount: "2",
  },
  {
    title: "Approval Berjalan",
    amount: "2",
  },
  {
    title: "Approval Tertunda",
    amount: "0",
  },
];

const ApprovalsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-6 py-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {approvalSum.map((project) => (
          <SummarizeCard
            key={project.title}
            {...project}
            orientation="horizontal"
          />
        ))}
      </div>
      {/* <div className="grid md:grid-cols-1 auto-rows-min">
        <div className="flex flex-col">
          <h4 className="section-title">List Approval</h4>
          <div className="flex-1"></div>
        </div>
      </div> */}
    </div>
  );
};

export default ApprovalsPage;
