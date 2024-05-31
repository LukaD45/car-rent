import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="hidden lg:block sticky top-0 bg-blue-500 text-white w-full h-20 z-50 ">
      <div className="max-w-[1480px] mx-auto">
        <div className="flex justify-between items-center h-20">
          <Link href="/home">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </Link>
          <div className="space-x-20 text-lg">
            <Link href="/vehicle">Vozila</Link>
            <Link href="/reservation">Rezervacije</Link>
            <Link href="/about-us">O nama</Link>
            <Link href="/contact">Korisnički centar</Link>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
