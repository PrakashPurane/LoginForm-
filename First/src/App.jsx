import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { GoEyeClosed } from "react-icons/go";

import "./App.css";
import { useState } from "react";

function App() {
  const [eyee, setEyee] = useState(false);

  const toggleEyee = () => {
    setEyee((prevState) => !prevState);
  };
  return (
    <>
      <div className="container ">
        <header>Welcome Back!</header>
        <p>To get started,create your account.</p>
        <form action="#">
          <div className="input-field">
            <input type="text" required />
            <label>Enter your email</label>
          </div>
          <div className="input-field">
            <input type={eyee ? "text" : "password"} required />

            {eyee ? (
              <BsEye className="eye" onClick={toggleEyee} />
            ) : (
              <GoEyeClosed className="eyeclose" onClick={toggleEyee} />
            )}

            <label>Password</label>
          </div>
          <a href="#">Forget Password</a>
          <div className="button">
            <button>Sign up</button>
          </div>
        </form>
        <div className="auth">
          <hr />
          <div className="auths">Or sign up with</div>
        </div>
        <div className="links">
          <div className="google">
            <FcGoogle className="googles" /> Sign up with Google
          </div>
          <div className="apple">
            <FaApple className="apples" /> Sign up with Apple
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
