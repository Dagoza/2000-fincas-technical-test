import React, { useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import "./styles/Login.css";

export const Login = () => {
  const form = useRef(null);
  const { createSession } = useAuth();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const userData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    createSession(userData);
  };

  return (
    <form ref={form}>
      <div class="login">
        <header>Inicia sesión</header>
        <label>
          <p>Nombre de usuario</p>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value="eve.holt@reqres.in"
            id="username"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            name="password"
            value="cityslicka"
            id="password"
          />
        </label>
        <div>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
