import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import type { ReactNode } from "react";

interface BaseDialogProps {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

const AssetsDialog = ({
  trigger,
  title,
  children,
  footer,
}: BaseDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="my-4">{children}</div>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export default AssetsDialog;
