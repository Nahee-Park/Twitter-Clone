import React, { useState } from "react";
import { authService, firebaseInstance } from "fbase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [timer, setTimer] = useState(0);
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      if (timer) {
        console.log("clear timer");
        clearTimeout(timer);
      }
      const newTimer = setTimeout(() => {
        setEmail(value);
        setTimer(newTimer);
      }, 100);
      console.log(email);
    } else if (name === "password") {
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(() => {
        setPassword(value);
        setTimer(newTimer);
      }, 100);
      console.log(password);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        const data = await authService.signInWithEmailAndPassword(
          email,
          password
        );
        console.log(data);
      } else {
        const data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        console.log(data);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    if (name == "google") {
      // provider는 firebase에 접근해서 받음
      const provider = new firebaseInstance.auth.GoogleAuthProvider();
      // authService에 접근해서 팝업 방식으로 로그인하는 방식을 따름
      const data = await authService.signInWithPopup(provider);
      console.log(data);
    } else if (name == "github") {
      const provider = new firebaseInstance.auth.GithubAuthProvider();
      const data = await authService.signInWithPopup(provider);
      console.log(data);
    }
  };
  const toggleAccount = () => {
    // 값을 받아서 반대값으로 리턴
    setNewAccount((prev) => !prev);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* input창에 name속성을 줌으로써 함수 하나로 운용할 수 있도록 함 */}
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Sign In" : "Create Account"}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Create Account" : "Sign In"}
      </span>
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
}

export default Auth;
