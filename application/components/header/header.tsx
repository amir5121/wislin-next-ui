import style from "./header.module.scss";
import useUser from "../../swr/useUser";

export default function Header() {
  const { user, isLoading, isError, isAuthenticated } = useUser();

  return (
    <header
      className={"flex justify-between p-4 bg-indigo-500 bg-gradient-to-r"}
    >
      <span>S:</span>
      <span>What should i learn next</span>
      {isLoading ? (
        <p>Loading</p>
      ) : isAuthenticated ? (
        <span>{user.email}</span>
      ) : (
        <button>Login/Signup</button>
      )}
    </header>
  );
}
