import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignInButton,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const words = ["BRZO.", "JEDNOSTAVNO.", "SIGURNO.", "BEZBRIŽNO."];

  return (
    <div className="hero-marketing1 mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-around p-10 gap-x-10">
      <div className="relative w-[240px] h-[0px] lg:w-[600px] lg:h-[500px] mb-8 lg:mb-0">
        <Image src="/tako.png" width={1500} height={1500} alt="Hero" />
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col justify-center space-y-5 text-neutral-400">
          <h1 className="text-4xl text-black md:text-white lg:text-5xl font-bold max-w-[480px] text-center">
            Pronađite auto
          </h1>
          <FlipWords words={words} />
        </div>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  variant="primaryoutline"
                  className=" font-bold w-full"
                >
                  Get started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="lg" variant="default" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/home">
                <Button size="lg" variant="primaryoutline">
                  {" "}
                  Enter
                </Button>
              </Link>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
