import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="bg-background/50">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8">
          <div className="flex items-center gap-2 flex-1">
            <SidebarTrigger className="-ml-1 h-9 w-9 rounded-lg hover:bg-muted/50 transition-colors" />
            <Separator orientation="vertical" className="mr-2 h-4 hidden md:block" />
            <Breadcrumb className="hidden md:block">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard" className="text-muted-foreground hover:text-foreground">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-foreground">Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden lg:flex items-center px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider animate-pulse">
                System Live
             </div>
             <div className="size-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors cursor-pointer ring-1 ring-border">
                <span className="text-xs font-bold">HQ</span>
             </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-8 max-w-[1600px] mx-auto w-full">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
