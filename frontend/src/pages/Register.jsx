import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="auth-page">
      <form className="auth-form">
        <p className="eyebrow">Create Account</p>
        <h1>Register</h1>

        <label htmlFor="name">Full name</label>
        <input id="name" type="text" placeholder="Your name" />

        <label htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="you@example.com" />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Minimum 6 characters"
        />

        <button type="submit">Create Account</button>

        <p className="form-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
