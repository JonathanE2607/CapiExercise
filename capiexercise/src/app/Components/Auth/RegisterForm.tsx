"use client";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubdmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coiniciden");
      return;
    }

    const newUser = {
      email,
      password,
    };

    try {
      const res = await axios.post("http://localhost:3001/register", newUser);
      alert(res.data.message);
      console.log("Respuesta:", res.data);
    } catch (error) {
      console.error("Error en la peticion:", error);
      alert("Ocurrio un error al registrar");
    }
  };

  return (
    <>
      <form>
        <h2>Register</h2>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="password">Email</label>
        <input
         id="email" 
         value={email}
         type="email" 
         name="email" 
         onChange={(e) => setEmail(e.target.value)}
         required />

        <label htmlFor="password">Password</label>
        <input
         id="password" 
         value={password}
         type="password" 
         name="password" 
         onChange={(e) => setPassword(e.target.value)}
         required />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
        value={confirmPassword}
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={handleSubdmit}>Register</button>
      </form>
    </>
  );
}
