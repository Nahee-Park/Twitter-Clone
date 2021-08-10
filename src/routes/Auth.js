import React, { useState, useEffect } from "react";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [timer, setTimer] = useState(0);
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
      }, 500);
      console.log(email);
    } else if (name === "password") {
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(() => {
        setPassword(value);
        setTimer(newTimer);
      }, 500);
      console.log(password);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
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
          // value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={onChange}
        />
        <input type="submit" value="Log In" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
}

export default Auth;
