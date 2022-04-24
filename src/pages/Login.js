import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './login.css';

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="login">
      <h1>Zaloguj się za pomocą Googla</h1>
      <button className="loginGoogle" onClick={signGoogle}>
        Sign in
      </button>
    </div>
  );
}
export default Login;
