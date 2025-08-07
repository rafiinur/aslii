import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ConfirmAnnouncementDeleteDialog = (
  announcementId: number,
  announcementTitle: string
) => {
  return (
    <AlertDialog>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Hapus announcement &quot;{announcementTitle}&quot;?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Aksi ini akan menghapus announcement secara permanen. Aksi ini tidak
            dapat dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
            Ya, Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmAnnouncementDeleteDialog;
