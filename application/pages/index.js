import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-9xl" style={{ transform: "rotate(-90deg)" }}>
          S:
        </h1>
        <h1 className="text-xl">What should i learn next?</h1>
        <a href="/users/auth/google/" className="btn--primary">
          Log in With Google
        </a>
        <p>
          Have you ever wondered what's best to learn to advance in your career?
        </p>
      </main>
    </div>
  );
}
