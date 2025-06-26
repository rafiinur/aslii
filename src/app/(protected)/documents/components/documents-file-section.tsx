import { Button } from "@/components/ui/button";
import DocumentTable from "./documents-table";
import { DocumentsFileSectionProps } from "@/types/documents";
import { AlignJustify, LayoutGrid } from "lucide-react";
import DocumentsFileGrid from "./documents-file-grid";

const DocumentsFileSection = ({
  files,
  onFileSelect,
  selectedFileId,
  viewMode,
  onViewModeChange,
}: DocumentsFileSectionProps) => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="flex items-center gap-3">
        <h4 className="font-semibold text-lg leading-6">File</h4>
        <Button
          variant="ghost"
          size="sm"
          className="p-1 h-auto"
          onClick={() => onViewModeChange("grid")}
        >
          <LayoutGrid
            className={`h-5 w-5 ${
              viewMode === "grid" ? "text-primary-300" : "text-neutral-800"
            }`}
          />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="p-1 h-auto"
          onClick={() => onViewModeChange("table")}
        >
          <AlignJustify
            className={`h-5 w-5 ${
              viewMode === "table" ? "text-primary-300" : "text-neutral-800"
            }`}
          />
        </Button>
      </div>

      {viewMode === "grid" ? (
        <DocumentsFileGrid
        
          files={files}
          onFileSelect={onFileSelect}
          selectedFileId={selectedFileId}
        />
      ) : (
        <DocumentTable />
      )}
    </div>
  );
};

export default DocumentsFileSection;
