import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import {
  Building,
  CalendarCheck,
  Car,
  HeartHandshake,
  Loader,
} from "lucide-react"; // Importing the CalendarCheck icon
import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn("flex h-full px-4 border-r-2 flex-col", className)}>
      <Link href="/home">
        <div className="pt-10 pl-6 pb-10 flex items-center ">
          <Image alt="Logo" src="/logo.svg" width="80" height="40" />
        </div>
      </Link>
      <div className="flex flex-col gap-y-6 flex-1">
        <SidebarItem label="Vozila" href="/vehicle" icon={<Car size={32} />} />
        <hr></hr>
        <SidebarItem
          label="Rezervacije"
          href="/reservation"
          icon={<CalendarCheck size={32} />} // Using the CalendarCheck icon from Lucide React
        />
        <hr></hr>
        <SidebarItem
          label="O nama"
          href="/about-us"
          icon={<Building size={32} />}
        />
        <hr></hr>
        <SidebarItem
          label="Korisnički centar"
          href="/contact"
          icon={<HeartHandshake size={32} />}
        />
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
