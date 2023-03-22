import { ReactNode } from "react";
import { useRouter } from "next/router";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

type Props = { children: ReactNode };

export default function MainLayout({ children }: Props) {
  const { pathname } = useRouter();
  const isHome = pathname === "/";

  return (
    <div className="antialiased bg-body font-body text-body bg-[url('/images/pattern-white.svg')]  bg-center">
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
}
