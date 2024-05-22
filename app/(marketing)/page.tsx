import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignInButton,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" hero-marketing mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-around p-10 gap-x-10">
      <div className="relative w-[240px] h-[240px] lg:w-[600px] lg:h-[500px] mb-8 lg:mb-0">
        <Image src="/next.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col space-y-1 text-neutral-400">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
            Bez briga.
          </h1>
          <p>Brzo i jednostavno.</p>
        </div>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="lg" variant="default" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
