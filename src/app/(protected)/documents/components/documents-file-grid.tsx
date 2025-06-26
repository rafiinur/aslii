import React from "react";
import DocumentsFile from "./documents-file";
import { DocumentsFileGridProps } from "@/types/documents";

const DocumentsFileGrid = ({
  files,
  onFileSelect,
  selectedFileId,
}: DocumentsFileGridProps) => {
  return (
    <div
      className={`grid gap-3 transition-all duration-500 ${
        selectedFileId
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {files.map((file) => (
        <DocumentsFile
          key={file.id}
          file={file}
          onClick={() => onFileSelect(file)}
          isSelected={selectedFileId === file.id}
        />
      ))}
    </div>
  );
};

export default DocumentsFileGrid;
