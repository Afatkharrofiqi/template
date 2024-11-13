"use client";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Bell, Bolt, Cpu, Globe, LayoutDashboard } from "lucide-react";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import NavHeader from "./nav-header";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Tracking",
      url: "/tracking",
      icon: Globe,
    },
    {
      title: "Alerts",
      url: "/alerts",
      icon: Bell,
      badge: 20,
    },
    {
      title: "Configuration",
      url: "/configuration",
      icon: Bolt,
      items: [
        {
          title: "User Management",
          url: "/configuration/user-management",
        },
        {
          title: "Vehicles",
          url: "/configuration/vehicles",
        },
        {
          title: "Devices",
          url: "/configuration/devices",
        },
        {
          title: "Drivers",
          url: "/configuration/drivers",
        },
        {
          title: "Locations",
          url: "/configuration/locations",
        },
        {
          title: "Tags",
          url: "/configuration/tags",
        },
      ],
    },
    {
      title: "Minehaul AI",
      url: "/minehaul-ai",
      icon: Cpu,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="p-4">
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="rounded-md">
          <NavMain items={data.navMain} />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
