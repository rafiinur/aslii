import OvertimeApprovalTable from "@/features/approval/components/overtime-approval-table";
import { Clock } from "lucide-react";

const OvertimePage = () => {
  return (
    <div className="flex flex-col flex-1 px-6 py-4">
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Overtime</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <OvertimeApprovalTable />
      </div>
    </div>
  );
};

export default OvertimePage;
