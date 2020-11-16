import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    userid: "",
    password: "",
  });
  const { userid, password } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert("id: " + userid);
    setForm({
      userid: "",
      password: "",
    });
  };
  return (
    <center>
      <div>
        <h1>로그인</h1>
        <input
          type="text"
          name="userid"
          placeholder="아이디"
          value={userid}
          onChange={onChange}
        ></input>
        <br />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
        ></input>
        <br />
        <button onClick={onClick}>로그인</button>
        <br />
        <button onClick={onClick}>회원가입</button>
      </div>
    </center>
  );
};
export default Login;
