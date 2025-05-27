"use client"

import * as React from "react"
import { BarChart3, FolderOpen, Home, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { ProjectsManager } from "@/components/project-manager"
const menuItems = [
  {
    title: "Overview",
    icon: Home,
    id: "overview",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    id: "analytics",
  },
  {
    title: "Projects",
    icon: FolderOpen,
    id: "projects",
  },
  {
    title: "Users",
    icon: Users,
    id: "users",
  },
  {
    title: "Settings",
    icon: Settings,
    id: "settings",
  },
]

export function AdminDashboard() {
  const [activeSection, setActiveSection] = React.useState("analytics")

  const renderContent = () => {
    switch (activeSection) {
      case "analytics":
        return <AnalyticsDashboard />
      case "projects":
        return <ProjectsManager />
      case "overview":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
            <p className="text-muted-foreground">
              Welcome to your admin dashboard. Select a section from the sidebar to get started.
            </p>
          </div>
        )
      default:
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{menuItems.find((item) => item.id === activeSection)?.title}</h1>
            <p className="text-muted-foreground">This section is coming soon.</p>
          </div>
        )
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BarChart3 className="h-4 w-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Admin Dashboard</span>
                <span className="truncate text-xs text-muted-foreground">Management Portal</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton isActive={activeSection === item.id} onClick={() => setActiveSection(item.id)}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-2 text-xs text-muted-foreground">Admin Dashboard v1.0</div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</span>
            </div>
          </header>
          <main className="flex-1 overflow-auto">{renderContent()}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
