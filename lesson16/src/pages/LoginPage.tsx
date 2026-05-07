import { fakeAuth } from "@/components/fakeAuth";
import {  useState } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fakeAuth.login(() => navigate("/secret"))
  };

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center max-w-45"
      >
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            className="border-2"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            className="border-2"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          
          ></input>
        </label>
        <br />
        <button
          type="submit"
          className="flex justify-center border-4 border-color bg-amber-200"
        >
          Skrá inn
        </button>
      </form>
    </>
  );
}
