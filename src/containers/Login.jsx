import { useRef } from "react";
import { i18n } from "../constants/i18n-ES";
import { useAuth } from "../hooks/useAuth";
import "./styles/Login.css";

export const Login = () => {
  const form = useRef(null);
  const { createSession } = useAuth();

  const handleSubmit = () => {
    console.log({
      usuario: "eve.holt@reqres.in",
      password: "cityslicka",
    });
    const formData = new FormData(form.current);
    const userData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    createSession(userData);
  };

  return (
    <form ref={form}>
      <div className="login">
        <header>{i18n.login}</header>
        <label>
          <p>{i18n.userName}</p>
          <input
            type="text"
            placeholder={i18n.userName}
            name="username"
            id="username"
          />
        </label>
        <label>
          <p>{i18n.password}</p>
          <input
            type="password"
            placeholder={i18n.password}
            name="password"
            id="password"
          />
        </label>
        <div>
          <button type="button" onClick={handleSubmit}>
            {i18n.signIn}
          </button>
        </div>
      </div>
    </form>
  );
};
