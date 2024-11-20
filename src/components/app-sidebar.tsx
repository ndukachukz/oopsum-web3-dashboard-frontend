import * as React from "react";
import { NavMain, NavMainItem } from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Activity, Book1, Eye, Menu, Trade, Wallet2 } from "iconsax-react";

const data: Record<string, NavMainItem[]> = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      Icon: Menu,
      items: [],
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      Icon: Activity,
      items: [],
    },
    {
      title: "Trading",
      url: "/trading",
      Icon: Trade,
      items: [],
    },
    {
      title: "Watchlist",
      url: "/watchlist",
      Icon: Eye,
      items: [],
    },
    {
      title: "Academy",
      url: "/academy",
      Icon: Book1,
      items: [],
    },
    {
      title: "Wallet",
      url: "/wallet",
      Icon: Wallet2,
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" className="" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                {!open ? (
                  <img src="/oopsum-logo-icon.svg" alt="oopsum logo icon" />
                ) : (
                  <img src="/ooPsum logo.svg" alt="oopsum logo" />
                )}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <div className="p-1"></div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
