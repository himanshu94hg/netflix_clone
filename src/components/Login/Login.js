import React, { useState } from "react";
import "./Login.css";
import SignUp from "./SignUp/SignUp";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  const showSignUp = (e) => {
    e.preventDefault();
    setSignIn(true);
  };

  return (
    <div className="login">
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button>Sign In</button>
      </div>
      <div className="login_body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more..</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form action="" className="login_form" onSubmit={showSignUp}>
              <input type="email" placeholder="Email address" />
              <button>Get Started</button>
            </form>
          </>
        )}
      </div>
      <div className="login_gradient"></div>
    </div>
  );
};

export default Login;
