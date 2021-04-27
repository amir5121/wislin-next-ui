import Head from "next/head";
import configurations from "../config";

export default function Home(props) {
  const { user } = props;
  console.log(props);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-9xl">S:</h1>
        <h1 className="text-xl">What should i learn next?</h1>
        {user ? (
          <p>Welcom {user.email}</p>
        ) : (
          <a
            href={configurations.baseUrl + "/api/user/auth/google/"}
            className="btn--primary"
          >
            Log in With Google
          </a>
        )}
        <p>
          Have you ever wondered what's best to learn to advance in your career?
        </p>
      </main>
    </div>
  );
}
