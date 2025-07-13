"use client";
import React from "react";

export default function LoginForm() {
  return (
    <form>
      <h2>Login</h2>

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" required />

      <button type="submit">Login</button>
    </form>
  );
}
