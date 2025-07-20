import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import TopBar from "@/components/top-bar";

export default function ProtectedLayout({ children }: React.PropsWithChildren) {
  return (
    <SidebarProvider className="h-screen">
      <AppSidebar />

      <SidebarInset className="flex flex-col h-full">
        <TopBar />
        <div className="flex-1 overflow-auto px-6 py-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
