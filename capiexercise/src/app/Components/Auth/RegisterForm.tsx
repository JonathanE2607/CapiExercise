"use client";

export default function RegisterForm() {
  return (
    <form>
      <h2>Register</h2>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" required />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}
