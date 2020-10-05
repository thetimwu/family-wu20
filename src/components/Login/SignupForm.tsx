import React, { useState, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { loginWithEmailAndPassword } from "../../features/auth/authSlice";
import { ILoginDetail } from "../../features/auth/types";

interface Props {}

export default function LoginForm(props: Props): ReactElement {
  const [loginDetail, setLoginDetail] = useState<ILoginDetail>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetail({ ...loginDetail, [e.target.id]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(loginDetail);
    dispatch(loginWithEmailAndPassword(loginDetail));
  };

  return (
    <div style={{ marginTop: 50, marginLeft: 50 }}>
      <h1>Signup</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>Email:</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) => changeHandler(e)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="text"
          id="password"
          name="password"
          onChange={(e) => changeHandler(e)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
