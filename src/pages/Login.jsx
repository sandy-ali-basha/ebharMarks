import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import logo from "../assets/images/ebhar-logo.svg";
function Login() {
  return (
    <div className="loginPage">
      <Header />
      <main className="login">
        <form>
          <img src={logo} alt="" />
          <h1>Login</h1>
          <div className="w-full">
            <div className="input_wrapper">
              <label htmlFor="uesrName">Uesr Name</label>
              <input
                id="uesrName"
                type="text"
                placeholder="Khaled@Marklit.sa"
              />
            </div>
            <div className="input_wrapper">
              <label htmlFor="Password">Password</label>
              <input id="Password" type="password" />
            </div>
          </div>
          <div className="btns">
            <button className="loginBtn">Login</button>
            <button className="newAccountBtn">New account</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
