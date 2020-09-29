import React, { useState, ReactElement } from "react";

interface Props {}

interface ILoginDetail {
  email: string | null;
  password: string | null;
}

export default function LoginForm(props: Props): ReactElement {
  const [loginDetail, setLoginDetail] = useState<ILoginDetail>({
    email: null,
    password: null,
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetail({ ...loginDetail, [e.target.id]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(loginDetail);
  };

  return (
    <div style={{ marginTop: 50, marginLeft: 50 }}>
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
