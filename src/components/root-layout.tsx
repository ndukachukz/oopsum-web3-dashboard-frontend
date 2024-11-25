import { Outlet } from "react-router-dom";
import { ArrowDown2, NotificationBing, SearchNormal1 } from "iconsax-react";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RootLayout = () => {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />

          <div className=" w-full flex md:justify-between justify-end">
            <div className="flex md:flex-grow max-w-sm max-h-[50px] items-center gap-x-3 p-1 lg:min-w-64 rounded-[34px] relative bg-muted">
              <div className="size-[42px] lg:size-[50px] flex justify-center items-center rounded-full bg-[#212325] ">
                <SearchNormal1 size="22" color="#fff" />
              </div>

              <input
                type="text"
                placeholder="Search for your coins..."
                className="hidden md:block bg-transparent leading-[50px] focus:outline-none placeholder-muted-foreground placeholder:italic text-xs font-thin "
              />
            </div>

            <div className="flex gap-[10px] items-center">
              <button className="relative flex justify-center size-[42px] lg:size-[50px] items-center rounded-full bg-muted ">
                <NotificationBing size="22" color="#FFF" />
                <div className="absolute size-2 bg-[#EA2D2D] rounded-full top-2 right-3" />
              </button>

              <div className="flex items-center gap-x-3">
                <Avatar className="size-[42px] lg:size-[50px]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex items-center gap-x-2">
                  <p className="text-base hidden md:block">John</p>
                  <ArrowDown2 size="14" color="#FFF" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default RootLayout;
