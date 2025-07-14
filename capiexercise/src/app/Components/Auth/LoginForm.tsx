"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styles from './LoginForm.module.css'

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validEmail = "example@gmail.com";
    const validPassword = "12345678";

    if (email === validEmail && password === validPassword) {
      toast.success("Login exitoso");
      router.push("/dashboard")
    } else {
      toast.error("Email o contraseña incorrectos");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2 className={styles.formTitle}>Iniciar sesión</h2>

        <label htmlFor="email" className={styles.srOnly}>Correo electrónico</label>
        <div className={styles.inputGroup}>
          <i className="bx bx-envelope"></i>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label htmlFor="password" className={styles.srOnly}>Contraseña</label>
        <div className={styles.inputGroup}>
          <i className="bx bx-lock"></i>
          <input
            id="password"
            type="password"
            name="password"
            required
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.formButton}>Login</button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
