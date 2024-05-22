import { Sidebar } from "./sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import { Menu } from "lucide-react";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="right">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
