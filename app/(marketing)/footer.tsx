import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="block h-20 w-full border-t-2 border-neutral-500  p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Image
          src="/mercedes-logo.png"
          alt="Mercedes logo"
          height={32}
          width={40}
          className="mr-4 rounded-md"
        />

        <Image
          src="/bmw-logo.png"
          alt="BMW logo"
          height={52}
          width={70}
          className="mr-4 rounded-md"
        />

        <Image
          src="/renault-logo.png"
          alt="Renault logo"
          height={32}
          width={70}
          className="mr-4 rounded-md"
        />

        <Image
          src="/porsche-logo.png"
          alt="Porsche Logo"
          height={72}
          width={70}
          className="mr-4 rounded-md"
        />

        <Image
          src="/audi-logo.png"
          alt="Audi logo"
          height={32}
          width={70}
          className="mr-4 rounded-md"
        />
      </div>
    </footer>
  );
};
