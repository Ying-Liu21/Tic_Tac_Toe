import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import axios from "axios";
import signupImg from "../images/signup.png";
import { UserContext } from "../context/user_context";
import Loading from "../components/Loading";
import Error from "../components/Error";
import "./SignupScreen.css";

const SignupScreen = () => {
  const {
    email,
    setEmail,
    isVaildEmail,
    setIsValidEmail,
    tokenError,
    tokenLoading,
    setIsVaildUser,
    setTokenLoading,
    setTokenError
  } = useContext(UserContext);

  const [message, setMessage] = useState("");

  let history = useHistory();

  const handleSignup = e => {
    e.preventDefault();
    setEmail(e.target.value);
    setIsValidEmail(e);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isVaildEmail) {
      fetchToken(email);
      setMessage("");
    } else {
      setMessage("Please enter a valid email address!");
      setEmail("");
    }
  };
  const fetchToken = async email => {
    setTokenLoading(true);

    try {
      await axios
        .post(
          "https://zrp7d8y3q4.execute-api.us-east-2.amazonaws.com/dev/auth",
          {
            email: email
          }
        )
        .then(res => {
          sessionStorage.setItem("token", res.data.token);
          setIsVaildUser(true);
          history.push("/game");
          setTokenLoading(false);
          setEmail("");
        });
    } catch (err) {
      setTokenError(true);
      setTokenLoading(false);
    }
  };

  if (tokenLoading) {
    return <Loading />;
  }

  const handleClickError = () => {
    setTokenError(false);
    history.push("./");
  };
  if (tokenError) {
    return <Error clickError={handleClickError} />;
  }

  return (
    <div className="signup-container">
      <div className="img-container">
        <img src={signupImg} alt="Sign up" className="signup-img" />
      </div>
      <div className="signup-content">
        <form onSubmit={handleSubmit} className="signup-form">
          <h1 className="form-title">Tic-Tac-Toe</h1>
          <div className="form-input">
            <div className="icon-container">
              <MailOutlineIcon className="signup-icon" />
            </div>
            <div className="input-container">
              <input
                type="text"
                value={email}
                onChange={handleSignup}
                placeholder="Email"
                className="input-field"
              />
            </div>
          </div>
          <input type="submit" value="Sign up" className="signup_btn" />
        </form>
        {message ? <p>{message}</p> : ""}
      </div>
    </div>
  );
};

export default SignupScreen;
