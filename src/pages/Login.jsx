import { useState } from "react";
import Button from "../ui/Button";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit() {
    console.log("hi");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        // This makes this form better for password managers
        autoComplete="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button size="large">Login</Button>
    </form>
  );
}
export default Login;
