import { MobileSidebar } from "@/components/mobile-sidebar";
import Image from "next/image";
import Link from "next/link";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-4 h-20 flex justify-between items-center bg-blue-500 border-b fixed top-0 w-full z-50">
      <Link href="/home">
        <Image src="/logo.svg" alt="Logo" height={100} width={100} />
      </Link>
      <MobileSidebar />
    </nav>
  );
};
