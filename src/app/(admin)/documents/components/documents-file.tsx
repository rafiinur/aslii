import { EllipsisVertical, Download, Edit, MoreHorizontal, ExternalLink } from "lucide-react";
import Sertif from "@/assets/icons/sertif_ec.svg?react";
import { DocumentFile } from "@/types/documents";
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

interface DocumentsFileProps {
  file: DocumentFile;
  onClick: () => void;
  isSelected: boolean;
}

const DocumentsFile = ({ file, onClick, isSelected }: DocumentsFileProps) => {
  const handleStatusChange = (newStatus: 'Aktif' | 'Nonaktif') => {
    console.log(`Changing status to: ${newStatus}`);
  };

  return (
    <div
      className={`flex flex-col shadow-md p-4 rounded-xl gap-2 hover:ring-2 hover:ring-primary-300 transition-all duration-300 cursor-pointer ${
        isSelected ? 'ring-2 ring-primary-300' : ''
      }`}
      onClick={onClick}
    >
      <h3 className="truncate text-xs font-semibold">
        {file.title.replace('📄 ', '')}
      </h3>
      <Sertif className="w-full object-cover rounded-md" />
      <div className="flex items-center justify-between">
        <p className="truncate text-[10px] font-semibold text-neutral-400">
          Milik {file.owner} | {file.createdDate}
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-neutral-500 h-4 w-4 hover:text-neutral-700 transition-colors flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <EllipsisVertical className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <ExternalLink className="mr-2 h-4 w-4"/>
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
                  onClick={() => handleStatusChange('Aktif')}
                  className="p-2"
                >
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 w-full justify-center">
                    Aktif
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleStatusChange('Nonaktif')}
                  className="p-2"
                >
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100 w-full justify-center">
                    Non - Aktif
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DocumentsFile;