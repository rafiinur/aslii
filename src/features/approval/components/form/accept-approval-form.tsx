// components/AcceptApprovalForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Info } from "lucide-react";

interface AcceptApprovalFormProps {
  requestId: string; // The ID of the request being approved
  onAccept: (requestId: string, comments?: string) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const AcceptApprovalForm: React.FC<AcceptApprovalFormProps> = ({
  requestId,
  onAccept,
  onCancel,
  isLoading = false,
}) => {
  const [comments, setComments] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAccept(requestId, comments);
  };

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-green-600 text-white rounded-t-lg">
        <CardTitle className="text-xl flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5" />
          Accept Request
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="flex items-start gap-3 p-3 bg-blue-50 text-blue-800 rounded-md">
          <Info className="h-5 w-5 flex-shrink-0 mt-1" />
          <p className="text-sm">
            You are about to approve request **#{requestId}**. This action
            cannot be undone.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Comments (Optional)
          </label>
          <Textarea
            placeholder="Add any relevant comments here..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows={4}
            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
            disabled={isLoading}
          />
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
            className="flex-1 h-12 bg-green-600 hover:bg-green-700 disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? "Approving..." : "Confirm Accept"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AcceptApprovalForm;
