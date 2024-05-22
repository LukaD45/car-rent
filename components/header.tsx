import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="hidden lg:block sticky top-0 bg-red-500 w-full h-20  ">
      <div className="max-w-[1024px] mx-auto">
        <div className="flex justify-between items-center h-20">
          <Link href="/home">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </Link>
          <div className="space-x-10 text-lg">
            <Link href="/vehicle">Vehicle</Link>
            <Link href="/vozila">Rezervacije</Link>
            <Link href="/vozila">Poslovnice</Link>
            <Link href="/vozila">Korisnički centar</Link>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
