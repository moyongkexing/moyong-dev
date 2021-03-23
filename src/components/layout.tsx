import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="w-full md:w-11/12 xl:w-10/12 bg-wrapper flex flex-col justify-center items-center">
      <Header />
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
};
