import "../styles/globals.css";
import useSWR from "swr";
import fetcher from "../utils/fetch";

function MyApp({ Component, pageProps }) {
  const { data, error } = useSWR("/api/user/self/", fetcher);
  console.log("dataaaaa", data, error);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <Component {...pageProps} user={data} />;
}

export default MyApp;
