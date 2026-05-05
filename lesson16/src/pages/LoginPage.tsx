export default function LoginPage() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label>
          Username:  <input name="username"></input>
        </label>
        <br />
        <label>
          Password:  <input name="password"></input>
        </label>
        <br />
        <button>Skrá inn</button>
      </form>
    </>
  );
}
