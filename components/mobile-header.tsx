import { MobileSidebar } from "@/components/mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-4 h-20 flex justify-end items-center bg-indigo-600 border-b fixed top-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
};
