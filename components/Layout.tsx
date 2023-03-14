import { useRouter } from "next/router";
import NavBar from "./NavBar";
import Seo from "./Seo";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Seo />
      <NavBar />
      <div>{children}</div>
    </>
  );
}
