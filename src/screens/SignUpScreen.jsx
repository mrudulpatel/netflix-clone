import React from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const register = (e) => {
    e.preventDefault();
  }

  const signIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    });
  }


  return (
    <div className="signUp">
      <form onSubmit={signIn}>
        <h1>Sign Up</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" className="signUp__button">Sign Up</button>
        <h4>
          <span className="signUp__gray">New to Netflix? </span>
          <span className="signUp__link" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
