import { MobileHeader } from "@/components/mobile-header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
