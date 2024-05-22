import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
};
export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn("flex h-full px-4 border-r-2 flex-col", className)}>
      <Link href="/vehicle">
        <div className="pt-10 pl-6 pb-7 flex items-center gap-x-5">
          <Image alt="Logo" src="/logo.svg" width="80" height="40" />
        </div>
      </Link>
      <div className="flex flex-col gap-y-3 flex-1">
        <SidebarItem label="Vozila" href="/vehicle" iconSrc="/logo.svg" />
        <SidebarItem
          label="Rezervacije"
          href="/reservations"
          iconSrc="/logo.svg"
        />
        <SidebarItem label="Poslovnice" href="/branches" iconSrc="/logo.svg" />
        <SidebarItem label="Korisnički centar" href="#" iconSrc="/logo.svg" />
      </div>
      <div className="p-4 ">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
