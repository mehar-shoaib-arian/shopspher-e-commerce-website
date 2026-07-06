import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="auth-page">
      <form className="auth-form">
        <p className="eyebrow">Welcome Back</p>
        <h1>Login</h1>

        <label htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="you@example.com" />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>

        <p className="form-footer">
          Do not have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
