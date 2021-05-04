import style from "./header.module.scss";
import useUser from "../../swr/useUser";
import Button from "../button/button";

export default function Header() {
  const { user, isLoading, isError, isAuthenticated } = useUser();

  return (
    <header className={style.header}>
      <span>S:</span>
      <span>What should i learn next</span>
      {isLoading ? (
        <p>Loading</p>
      ) : isAuthenticated ? (
        <span>{user.email}</span>
      ) : (
        <Button>Login/Signup</Button>
      )}
    </header>
  );
}
