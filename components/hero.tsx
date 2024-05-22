import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  title: string;
};
export const Hero = ({ className, title }: Props) => {
  return (
    <div
      className={cn(
        "bg-neutral-400 h-[600px] flex flex-col justify-center items-center text-center text-4xl",
        className
      )}
    >
      <h1>{title}</h1>
      <div className="space-x-10 py-5 ">
        <Link href="/vehicle">
          <Button>Iznajmite</Button>
        </Link>
        <Link href="#">
          <Button>Informirajte se</Button>
        </Link>
      </div>
    </div>
  );
};
