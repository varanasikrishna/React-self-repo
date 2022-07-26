import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState({ userName: "", password: "" });
  const { userName, password } = data;
  const changeHandler = (e) =>
    setData({ ...data, [e.target.name]: [e.target.value] });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Username"
            value={userName}
            name="userName"
            onChange={changeHandler}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={changeHandler}
          />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </center>
    </div>
  );
}
