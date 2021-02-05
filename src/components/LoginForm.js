import React, { useState } from "react";
import { connect } from "react-redux";
import { Login } from "../Action/actionUser";
import "./LoginForm.css";

function LoginForm(props) {
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const sessionMail = props?.log?.email;
  const sessionPwd = props?.log?.mdp;
  const InputMail = (e) => {
    setMail(e.target.value);
  };
  const InputPassword = (e) => {
    setPwd(e.target.value);
  };
  const handleLogin = (e) => {
    if (mail == sessionMail && pwd == sessionPwd) {
      props.Login(true);
    } else {
      alert("Merci de verifier votre email ou Mot de passe");
    }
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form className="box">
                <h1>Login</h1>
                <p className="text-muted">
                  {" "}
                  Please enter your login and password!
                </p>
                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  onChange={(e) => InputMail(e)}
                  required
                />
                <input
                  type="password"
                  name="Paswwod"
                  placeholder="Password"
                  onChange={(e) => InputPassword(e)}
                  required
                />
                <button onClick={(e) => handleLogin(e)} name="Login">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    log: state?.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Login: (text) => dispatch(Login(text)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
