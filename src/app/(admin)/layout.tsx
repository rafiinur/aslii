import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import TopBar from "@/components/top-bar";

export default function ProtectedLayout({ children }: React.PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <TopBar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
