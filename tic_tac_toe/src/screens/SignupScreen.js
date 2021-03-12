import React, { useContext, useEffect } from "react";
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
    } else {
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
          if (res.data.success) {
            sessionStorage.setItem("token", res.data.token);
            setIsVaildUser(true);
            setTokenError(false);
            history.push("/game");
          } else {
            setTokenError(true);
          }
          setTokenLoading(false);
          setEmail("");
        });
    } catch (err) {
      setTokenError(true);
      setTokenLoading(false);
    }
  };

  useEffect(() => {
    fetchToken(email);
  }, []);

  useEffect(() => {
    if (tokenError) {
      setTimeout(() => {
        history.push("./error");
      }, 3000);
    }
  }, [tokenError]);

  if (tokenLoading) {
    return <Loading />;
  }

  if (tokenError) {
    return <Error />;
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
      </div>
    </div>
  );
};

export default SignupScreen;

/*
const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [isValidUser, setIsValidUser] = useState(false);
  const { isVaildEmail, setIsValidEmail } = useContext(UserContext);

  const handleSignup = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(isVaildEmail);
    if (isVaildEmail) {
      try {
        await axios
          .post(
            "https://zrp7d8y3q4.execute-api.us-east-2.amazonaws.com/dev/auth",
            {
              email: email
            }
          )
          .then(res => {
            console.log(res.data);
            if (res.data.success) {
              sessionStorage.setItem("token", res.data.token);
              setIsValidUser(true);
            }
            setEmail("");
          })
          .then(() => {
            console.log("use: ", isValidUser);
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Please input correct email address");
    }

    setEmail("");
  };

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
                onChange={e => {
                  handleSignup(e);
                  setIsValidEmail(e);
                }}
                placeholder="Email"
                className="input-field"
              />
            </div>
          </div>
          <input type="submit" value="Sign up" className="signup_btn" />
          {isValidUser && <Redirect to="/game" />}
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;
*/
