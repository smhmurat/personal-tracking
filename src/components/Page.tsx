import Head from "next/head";
import { forwardRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

// eslint-disable-next-line react/display-name
const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, title = "", meta, ...other }, ref) => (
    <>
      <Head>
        <title>{`${title} | Personel Takip Kontrol Sistemi`}</title>
        {meta}
      </Head>

      <div ref={ref} {...other}>
        {children}
      </div>
    </>
  )
);

export default Page;
