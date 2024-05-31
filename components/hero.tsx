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
        "bg-neutral-400 text-white hero-home h-[500px] flex flex-col justify-center items-center text-center text-4xl",
        className
      )}
    >
      <h1 className="backdrop-blur-[3px] p-2 ">{title}</h1>
    </div>
  );
};
