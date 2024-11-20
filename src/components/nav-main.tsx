import { MoreHorizontal } from "lucide-react";
import { type Icon } from "iconsax-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

export interface NavMainItem {
  title: string;
  url: string;
  Icon: Icon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

interface Props {
  items: NavMainItem[];
}

export function NavMain({ items }: Props) {
  const { isMobile, open } = useSidebar();
  const location = useLocation();

  return (
    <SidebarGroup className="flex flex-grow flex-col justify-center items-center ">
      <SidebarMenu className="space-y-9  ">
        {items.map((item) => {
          const isActive = item.url === location.pathname;

          return (
            <DropdownMenu key={item.title}>
              <SidebarMenuItem>
                <DropdownMenuTrigger asChild className="hover:bg-none">
                  <SidebarMenuButton
                    className={cn(
                      "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground p-0",
                      isActive && "hover:bg-inherit/90 "
                    )}
                    asChild
                  >
                    <a
                      href={item.url}
                      className={cn(
                        "relative transition-all delay-75 duration-75 text-xl font-medium  py-[25.5px] px-1 w-full",
                        open && "!rounded-3xl",
                        open && isActive && "bg-white",
                        isActive && " text-muted hover:text-muted"
                      )}
                    >
                      {item.Icon && (
                        <span
                          className={cn(
                            " flex items-center justify-center size-[38px] rounded-full",
                            open && "bg-muted"
                          )}
                        >
                          <item.Icon size={"22"} color={"#FFF"} />
                        </span>
                      )}
                      <span className={cn(open && "")}>{item.title}</span>
                      {item.items && item.items.length > 0 && (
                        <MoreHorizontal className="ml-auto" />
                      )}

                      <span
                        className={cn(
                          !isActive && "hidden",
                          open && "hidden",
                          "absolute bg-foreground h-full px-[1.5px] -right-px"
                        )}
                      />
                    </a>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                {item.items?.length ? (
                  <DropdownMenuContent
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                    className="min-w-56 rounded-lg"
                  >
                    {item.items.map((item) => (
                      <DropdownMenuItem asChild key={item.title}>
                        <a href={item.url}>{item.title}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                ) : null}
              </SidebarMenuItem>
            </DropdownMenu>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
