"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Calendar,
  ChevronRight,
  ClipboardList,
  FileCheck,
  LayoutDashboard,
  LocateFixed,
  Map,
  PlusCircle,
  Route,
  Settings,
  ShieldCheck,
  Truck,
  UserCircle,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Operations",
      items: [
        {
          title: "Dispatch Center",
          url: "/dashboard/dispatch",
          icon: LayoutDashboard,
        },
        {
          title: "Jobs Queue",
          url: "/dashboard/jobs",
          icon: ClipboardList,
        },
        {
          title: "Create Job",
          url: "/dashboard/jobs/new",
          icon: PlusCircle,
        },
        {
          title: "Route Planner",
          url: "/dashboard/route-planner",
          icon: Route,
        },
      ],
    },
    {
      title: "Fleet Management",
      items: [
        {
          title: "Drivers Grid",
          url: "/dashboard/drivers",
          icon: Users,
        },
        {
          title: "POD Gallery",
          url: "/dashboard/pod",
          icon: FileCheck,
        },
      ],
    },
    {
      title: "Insights",
      items: [
        {
          title: "Reports & Analytics",
          url: "/dashboard/analytics",
          icon: BarChart3,
        },
      ],
    },
    {
      title: "System Settings",
      items: [
        {
          title: "Customer Portal",
          url: "/dashboard/customer-portal",
          icon: ShieldCheck,
        },
        {
          title: "Zones & SLAs",
          url: "/dashboard/settings",
          icon: Map,
        },
      ],
    },
  ],
}

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50 bg-sidebar/50 backdrop-blur-xl" {...props}>
      <SidebarHeader className="h-16 flex items-center px-6 border-b border-border/50">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Truck className="size-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground group-data-[collapsible=icon]:hidden">
            Fleet<span className="text-primary">Flow</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      tooltip={item.title}
                      className="group/menu-button h-11 px-6 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                    >
                      <Link href={item.url} className="flex items-center gap-3">
                        <item.icon className="size-5 transition-transform group-hover/menu-button:scale-110" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border/50">
         <SidebarMenu>
            <SidebarMenuItem>
               <SidebarMenuButton className="h-12 px-2 hover:bg-muted/50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                     <div className="size-8 rounded-full bg-gradient-to-tr from-brand-orange to-amber-400 flex items-center justify-center text-white font-bold text-xs ring-2 ring-background">
                        JD
                     </div>
                     <div className="flex flex-col items-start group-data-[collapsible=icon]:hidden">
                        <span className="text-sm font-semibold leading-none">John Doe</span>
                        <span className="text-[10px] text-muted-foreground mt-1">Ops Manager</span>
                     </div>
                  </div>
               </SidebarMenuButton>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
