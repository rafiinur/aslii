// components/RejectApprovalForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, AlertCircle } from "lucide-react";

interface RejectApprovalFormProps {
  requestId: string; // The ID of the request being rejected
  onReject: (requestId: string, reason: string) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const RejectApprovalForm: React.FC<RejectApprovalFormProps> = ({
  requestId,
  onReject,
  onCancel,
  isLoading = false,
}) => {
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) {
      setError("Please provide a reason for rejection.");
      return;
    }
    setError("");
    onReject(requestId, reason);
  };

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-red-600 text-white rounded-t-lg">
        <CardTitle className="text-xl flex items-center gap-2">
          <XCircle className="h-5 w-5" />
          Reject Request
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="flex items-start gap-3 p-3 bg-red-50 text-red-800 rounded-md">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-1" />
          <p className="text-sm">
            You are about to reject request **#{requestId}**. A reason is
            required.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Reason for Rejection <span className="text-red-500">*</span>
          </label>
          <Textarea
            placeholder="Please explain why this request is being rejected..."
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
              if (error && e.target.value.trim()) {
                setError("");
              }
            }}
            rows={4}
            className={`border-gray-300 focus:border-red-500 focus:ring-red-500 ${
              error ? "border-red-500" : ""
            }`}
            disabled={isLoading}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="button"
            onClick={onCancel}
            variant="outline"
            className="flex-1 h-12 border-gray-300 hover:bg-gray-50"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="flex-1 h-12 bg-red-600 hover:bg-red-700 disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? "Rejecting..." : "Confirm Reject"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RejectApprovalForm;
