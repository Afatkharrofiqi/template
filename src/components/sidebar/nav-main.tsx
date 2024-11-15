"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ChevronDown, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "../ui/badge";
import Rectangle from "./rectangle";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    endIcon?: LucideIcon;
    badge?: number;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const currentPath = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = currentPath === item.url;
          const hasActiveSubItem =
            item.items?.some((subItem) => currentPath === subItem.url) || false;

          return (
            <div key={item.title}>
              {item.items && item.items.length > 0 ? (
                <Collapsible
                  asChild
                  defaultOpen={isActive || hasActiveSubItem}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        isActive={hasActiveSubItem}
                        className="relative flex items-center w-full"
                      >
                        <Rectangle variant={"rounded"} />
                        {item.icon && <item.icon className="!w-5 !h-5" />}
                        <span>{item.title}</span>
                        <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => {
                          const subItemIsActive = currentPath === subItem.url;
                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={subItemIsActive}
                              >
                                <Link href={subItem.url}>
                                  <div className="absolute left-[-5px] h-2 w-2 rounded-full bg-white hidden"></div>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                    isActive={isActive}
                    className="flex items-center"
                  >
                    <Link
                      href={item.url}
                      className="relative flex items-center w-full"
                    >
                      <Rectangle variant={"rounded"} />
                      {item.icon && <item.icon className="!w-5 !h-5" />}
                      <span>{item.title}</span>
                      {item.endIcon && (
                        <item.endIcon className="ml-auto !w-5 !h-5" />
                      )}
                      {item.badge && (
                        <Badge
                          variant={"danger"}
                          className="ml-auto !w-5 !h-5 justify-center"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </div>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
