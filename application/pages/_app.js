import "../styles/globals.css";
import useSWR from "swr";
import wfetch from "../utils/fetch";

function MyApp({ Component, pageProps }) {
  const { data, error } = useSWR("/api/user/self/", wfetch);
  console.log("dataaaaa", data);
  return <Component {...pageProps} user={data} />;
}

export default MyApp;
