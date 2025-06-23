import {
  AlignJustify,
  LayoutGrid,
  EllipsisVertical,
  Download,
  Edit,
  MoreHorizontal,
  ExternalLink,
} from "lucide-react";
import DocumentsFile from "./documents-file";
import { DocumentFile, ViewMode } from "@/types/documents";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Profile from "@/assets/icons/Profile.svg?react";

interface DocumentsFileSectionProps {
  files: DocumentFile[];
  onFileSelect: (file: DocumentFile) => void;
  selectedFileId?: string;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const DocumentsFileSection = ({
  files,
  onFileSelect,
  selectedFileId,
  viewMode,
  onViewModeChange,
}: DocumentsFileSectionProps) => {
  const handleStatusChange = (
    fileId: string,
    newStatus: "Aktif" | "Non-Aktif"
  ) => {
    console.log(`Changing file ${fileId} status to: ${newStatus}`);
  };

  return (
    <div className="flex flex-col gap-5">
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
        <div
          className={`grid gap-3 transition-all duration-500 ${
            selectedFileId ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
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
      ) : (
        <div className="overflow-x-auto rounded shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Tanggal Upload</TableHead>
                <TableHead>Versi</TableHead>
                <TableHead>Pemilik</TableHead>
                <TableHead>Ukuran</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((file) => (
                <TableRow
                  key={file.id}
                  className={`cursor-pointer${
                    selectedFileId === file.id ? "bg-primary-50" : ""
                  }`}
                  onClick={() => onFileSelect(file)}
                >
                  <TableCell className="font-medium">
                    {file.title.replace("📄 ", "")}
                  </TableCell>
                  <TableCell>{file.createdDate}</TableCell>
                  <TableCell>{file.version.replace("v", "")}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-semibold">
                        <Profile/>
                      </div>
                      {file.owner}
                    </div>
                  </TableCell>
                  <TableCell>{file.fileSize}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${
                        file.status === "Aktif"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {file.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        className="h-8 w-8 p-0 hover:bg-accent hover:text-accent-foreground flex items-center justify-center rounded-md transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <EllipsisVertical className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open file
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Unduh
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Ubah Judul
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <MoreHorizontal className="mr-2 h-4 w-4" />
                            Ubah Status
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent className="w-32">
                            <DropdownMenuItem
                              onClick={() =>
                                handleStatusChange(file.id, "Aktif")
                              }
                              className="p-2"
                            >
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 w-full justify-center">
                                Aktif
                              </Badge>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleStatusChange(file.id, "Non-Aktif")
                              }
                              className="p-2"
                            >
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 w-full justify-center">
                                Non-Aktif
                              </Badge>
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default DocumentsFileSection;
