import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
  const router = useRouter();
  let movieName = "";
  const [title, id]: any = router.query.params || [];
  const titles: any = {
    "/": "Home",
    "/about": "About",
    "/movies/[...params]": title,
  };
  //if (router.pathname=="/movies/[...params]")  movieName = router.query.params[0];
  return (
    <Head>
      <title>{titles[router.pathname]} | Next Movies</title>
    </Head>
  );
}
