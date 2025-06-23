import FolderFill from "@/assets/icons/FolderFill.svg?react";
import Globe from "@/assets/icons/Globe.svg?react";
import Profile from "@/assets/icons/Profile.svg?react";
import { Separator } from "@/components/ui/separator";
import { Lock } from "lucide-react";

const DocumentsFolder = ({ i }: { i: number }) => {
  return (
    <div className="shadow-md p-4 rounded-xl flex flex-col gap-2" key={i}>
      <div className="flex gap-3">
        <FolderFill />
        <div className="">
          <h3 className="text-xs font-medium leading-[18px] ">perusahaan</h3>
          <p className="text-[10px] font-medium leading-4 text-neutral-500">
            9 file / 238 MB
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        {i === 1 && <Lock className="text-neutral-500" />}
        <div className="flex relative p-3 w-full">
          <Profile className="absolute top-0 bottom-0 right-9" />
          <Profile className="absolute top-0 bottom-0 right-6" />
          <Profile className="absolute top-0 bottom-0 right-3" />
          <Globe className="absolute top-0 bottom-0 right-0" />
        </div>
      </div>
    </div>
  );
};

export default DocumentsFolder;
