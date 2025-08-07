import { X } from "lucide-react";
import Sertif from "@/assets/icons/sertif_ec.svg?react";
import Globe from "@/assets/icons/Globe.svg?react";
import Profile from "@/assets/icons/Profile.svg?react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { DocumentFile } from "@/types/documents";

interface DocumentsAsideProps {
  file: DocumentFile;
  onClose: () => void;
}

const DocumentsAside = ({ file, onClose }: DocumentsAsideProps) => {
  return (
    <div className="fixed inset-0 w-full borderl md:w-1/4 h-screen bg-neutral-600/60 flex items-center justify-center md:static md:h-auto md:bg-transparent md:items-start md:justify-start">
      <div className="absolute bottom-0 right-0 w-full md:relative rounded-xl shadow-md p-5 flex flex-col gap-3 animate-in slide-in-from-right duration-300 bg-white">
        <div className="flex items-start justify-between">
          <h4 className="font-semibold text-sm leading-5">{file.title}</h4>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-6 w-6 p-0 hover:bg-neutral-100 cursor-pointer border"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <Sertif className="w-full object-cover rounded-md" />

        <div className="flex flex-col gap-1">
          <h5 className="text-xs font-medium leading-5">Akses</h5>
          <div className="flex items-center gap-2 h-5">
            <Profile className="" />
            <Separator orientation="vertical" />
            <Globe className="" />
          </div>
          <p className="text-xs leading-5 text-neutral-900">
            Dimiliki oleh {file.owner}
          </p>
        </div>

        <Separator />

        <div className="flex flex-col gap-1">
          <h5 className="text-xs font-medium leading-5">Detail File</h5>
          <table className="text-xs text-neutral-900 border-none w-full">
            <tbody>
              <tr>
                <td className="font-medium w-1/4 pb-2 pr-2 text-start">
                  Deskripsi
                </td>
                <td className="pb-2">{file.description}</td>
              </tr>
              <tr>
                <td className="font-medium pb-2">Versi</td>
                <td className="pb-2">{file.version}</td>
              </tr>
              <tr>
                <td className="font-medium pb-2">Status</td>
                <td className="pb-2">
                  <span
                    className={`${
                      file.status === "Aktif"
                        ? "bg-success-100 text-success-600"
                        : "bg-error-100 text-error-600"
                    } text-sm leading-5 text-center rounded px-2 py-1 inline-block`}
                  >
                    {file.status}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="font-medium pb-2">Dibuat</td>
                <td className="pb-2">{file.createdDate}</td>
              </tr>
              <tr>
                <td className="font-medium pb-2">Ukuran File</td>
                <td className="pb-2">{file.fileSize}</td>
              </tr>
              <tr>
                <td className="font-medium pb-2">Lokasi</td>
                <td className="pb-2">
                  <span className="bg-white border border-neutral-500 text-neutral-900 rounded px-2 py-1 inline-block">
                    {file.location}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DocumentsAside;
