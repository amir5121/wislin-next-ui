import Head from "next/head";
import configurations from "../config";
import Header from "../components/header/header";
import useUser from "../swr/useUser";

export default function Home(props) {
  const { user, isLoading, isError, isAuthenticated } = useUser();
  console.log(props);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="text-center">
        <h1 className="text-9xl">S:</h1>
        <h1 className="text-xl">What should i learn next?</h1>
        {isLoading ? (
          <p>Loading</p>
        ) : isError ? (
          <p> something went wrong </p>
        ) : isAuthenticated ? (
          <p>hello there {user.email}</p>
        ) : (
          <a href={configurations.baseUrl + "/api/user/auth/google/"}>
            Log in With Google
          </a>
        )}
        <p>
          Have you ever wondered what's best to learn to advance in your career?
        </p>
        <div className="input">
          <input className="input__input" placeholder=" " />
          <label className="input__label">Email Address</label>
        </div>
      </main>
    </>
  );
}
