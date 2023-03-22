import { ReactNode } from "react";
import MainLayout from "./Main";

type Props = {
  children: ReactNode;
  variant?: "main" | "logoOnly";
};

export default function Layout({ variant = "main", children }: Props) {
  if (variant === "logoOnly") {
    return (
      <>
        <div>LogoOnly Navbar</div>
        {children}
        <div>LogoOnly Footer</div>
      </>
    );
  }
  return <MainLayout>{children}</MainLayout>;
}
