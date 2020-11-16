import React, { Component } from "react";

class Join extends Component {
  state = {
    userId: "",
    password: "",
    check: "",
    name: "",
    birthday: "",
    gender: "",
    phone: "",
  };
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleOnCLick = () => {
    alert(
      "id: " +
        this.state.userId +
        "\n이름: " +
        this.state.name +
        "\n생년월일: " +
        this.state.birthday +
        "\n성별: " +
        this.state.gender +
        "\n전화번호: " +
        this.state.phone
    );
    this.setState({
      userId: "",
      password: "",
      check: "",
      name: "",
      birthday: "",
      gender: "",
      phone: "",
    });
  };
  render() {
    return (
      <div>
        <h1>회원가입</h1>
        <input
          type="text"
          name="userId"
          placeholder="아이디"
          value={this.state.userId}
          onChange={this.handleOnChange}
        ></input>
        <br />
        <input type="password" name="password" placeholder="비밀번호"></input>
        <br />
        <input
          type="password"
          name="check"
          placeholder="비밀번호 재확인"
        ></input>
        <br />
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleOnChange}
        ></input>
        <br />
        <input
          type="date"
          name="birthday"
          value={this.state.birthday}
          onChange={this.handleOnChange}
        ></input>
        <br />

        <select
          name="gender"
          value={this.state.gender}
          onChange={this.handleOnChange}
        >
          <option value="여">여</option>
          <option value="남">남</option>
        </select>
        <input
          type="text"
          name="phone"
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleOnChange}
        ></input>
        <br />
        <button onClick={this.handleOnCLick}>가입하기</button>
      </div>
    );
  }
}
export default Join;
