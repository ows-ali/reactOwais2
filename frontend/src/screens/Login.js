import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
// import { Cookies } from "react-cookie";

// set up cookies
// const cookies = new Cookies();

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vanishemail, setVanishemail] = useState(false);
  const [vanishpwd, setVanishpwd] = useState(false);
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState([]);

  // ========== ERROR MESSAGE ===============

  const [updateNote, setUpdateNote] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function outPutErrorMessagesInQuestionCard(errorMessage) {
    setUpdateNote(true);
    setErrorMsg(errorMessage);
  }

  // ========== POST ================
  const onSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.invalid) {
          outPutErrorMessagesInQuestionCard(data.invalid);
        }
        if (
          data.user.survey === "" ||
          data.user.phone === "" ||
          data.user.nationalId === "" ||
          data.user.birth === "" ||
          data.user.street === "" ||
          data.user.gender === ""
        ) {
          localStorage.setItem("firstName", data.user.firstName);
          localStorage.setItem("lastName", data.user.lastName);
          localStorage.setItem("nanoId", data.user.nanoId);
          localStorage.setItem("userId", data.user._id);
          localStorage.setItem("username", data.user.email);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("token", data.token);
          // cookies.set("accessToken", data.token);
          setProfile(data.user);
          history("/allusers");
        } else {
          localStorage.setItem("firstName", data.user.firstName);
          localStorage.setItem("lastName", data.user.lastName);
          localStorage.setItem("nanoId", data.user.nanoId);
          localStorage.setItem("userId", data.user._id);
          localStorage.setItem("username", data.user.email);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("token", data.token);
          // cookies.set("accessToken", data.token);
          setProfile(data.user);
          history("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>愛課網 | 登入</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <meta name="description" content="愛課網" />
      </Helmet>

      <div className="wrap">
        <section className="questionCard container">
          <figure>
            <Link to="/">
              <img
                src="/images/mainLogo.png"
                alt="LOGO"
                className="img-fluid"
              />
            </Link>
          </figure>
          <h2>登入</h2>
          <div className="container regCon">
            <div className="errorMessageHereInQuestionCard">
              {updateNote ? (
                <div className="updateNote">
                  <img
                    src="/images/cross-black.png"
                    style={{ width: "12px" }}
                  />
                  <span dangerouslySetInnerHTML={{ __html: errorMsg }}></span>
                </div>
              ) : (
                ""
              )}
            </div>
            <form id="loginForm" onSubmit={onSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onBlur={() => {
                      setVanishemail(true);
                    }}
                    className={vanishemail && email !== "" ? "springbok" : ""}
                    autoComplete="off"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onBlur={() => {
                      setVanishpwd(true);
                    }}
                    className={vanishpwd && password !== "" ? "springbok" : ""}
                  />
                  <label htmlFor="password">密碼</label>
                  <span
                    onClick={() => {
                      setShow(!show);
                    }}
                    style={{ position: "absolute", top: "9px", right: "12px" }}
                  >
                    {show ? (
                      <FiEye style={{ color: "#888", fontSize: "20px" }} />
                    ) : (
                      <FiEyeOff style={{ color: "#888", fontSize: "20px" }} />
                    )}
                  </span>
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "0" }}>
                <p>
                  <Link to="/forgotpassword">忘記密碼?</Link>
                </p>
              </div>
              {password && email ? (
                <input type="submit" className="btn-login" value="登入" />
              ) : (
                <input
                  type="submit"
                  className="btn-login"
                  value="登入"
                  disabled
                />
              )}

              <hr />
              <p>或</p>
              <button id="facebook-login">
                <a href="/auth/facebook">
                  <img src="/images/fb.png" alt="" width="28px" />
                  Facebook 登入
                </a>
              </button>
              <p>或</p>
              <button id="google-login">
                <a href="/auth/google">
                  <img src="/images/googlelogin.png" alt="" width="22px" />
                  Google 登入
                </a>
              </button>
            </form>
            <p>
              還沒有註冊嗎?
              <Link to="/signup">請註冊</Link>
            </p>
          </div>
        </section>
      </div>
      <Footer />
      <style jsx>{`
        .wrap {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          min-height: 100vh;
          background: #333;
          background-image: url("/images/languages.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        .wrap .questionCard {
          width: 400px;
          min-height: 80vh;
          padding: 20px 10px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-radius: 0px;
          background: #fff;
          -webkit-box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
          box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
        }
        .wrap .questionCard > figure {
          width: 200px;
          margin: 0px auto 16px;
        }
        .wrap .questionCard > figure > a {
          display: block;
        }

        .wrap .questionCard h2 {
          font-family: "Noto Sans TC", sans-serif;
          text-align: center;
          font-weight: 400;
          font-size: 28px;
          width: 100%;
          margin: 10px auto;
          padding-top: 8px;
          padding-bottom: 8px;
          color: #2b2b2b;
        }
        .regCon {
          margin: 0px auto;
          width: 90%;
        }
        .updateNote {
          background-color: #fcebcd;
          margin: 5px auto 12px;
          padding: 7px;
        }
        .questionCard p {
          margin: 10px auto;
          text-align: center;
          color: #777;
          width: 100%;
          font-size: 17px;
          font-weight: 500;
          font-family: "Noto Sans TC", sans-serif;
        }
        .questionCard a {
          margin-bottom: 0;
          width: 100%;
          font-size: 17px;
          font-weight: 700;
          font-family: "Noto Sans TC", sans-serif;
          color: #008489;
        }
        @media screen and (max-width: 768px) {
          .regCon {
            width: 100%;
          }
        }
        .input-group {
          display: block;
          margin-right: 20px;
          position: relative;
        }

        .input-group label {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          left: 0%;
          font-family: "Noto Sans TC", sans-serif;
          font-size: 14px;
          color: #777;
          font-weight: 500;
          padding: 0px 0px;
          pointer-events: none;
          transition: all 300ms ease-in-out 0ms;
        }
        #email {
          background-image: url("/images/mail.png");
          background-repeat: no-repeat;
          background-size: 16px;
          background-position: 320px;
        }

        .input-group input:focus + label {
          transform: translate(-8px, -32px) scale(0.9);
          font-size: 14px;
          opacity: 1;
        }
        .input-group input.springbok + label {
          transform: translate(-8px, -32px) scale(0.9);
          font-size: 14px;
          opacity: 0;
        }
        label {
          display: inline-block;
          font-size: 16px;
          margin-bottom: 10px;
          color: #1d1d1d;
          width: 150px;
          text-align: left;
        }
        .questionCard .btn-login,
        #facebook-login,
        #google-login {
          height: 48px;
          border-radius: 4px;
          width: 100%;
          font-weight: 800;
          font-size: 20px;
          background-color: rgb(165, 206, 15);
          text-align: center;
          box-sizing: border-box;
          margin-top: 0px;
          cursor: pointer;
          padding: 1px auto;
        }
        .questionCard .btn-login {
          line-height: 32px;
          color: #fff;
          border: none;
        }
        .questionCard .btn-login:disabled {
          color: #888;
          background-color: #ddd;
        }
        .questionCard .btn-login:disabled:hover {
          cursor: default;
          color: #888;
          background-color: #ddd;
        }

        #facebook-login {
          background-color: #3a5ba0;
          border: 2px solid #3a5ba0;
          position: relative;
          cursor: pointer;
          color: white;
        }
        #facebook-login a {
          font-weight: 800;
          font-size: 20px;
          color: #fff;
          position: relative;
          display: block;
          width: 100%;
        }
        #google-login {
          background-color: #fff;
          border: 1px solid #333;
          position: relative;
          cursor: pointer;
        }
        #google-login a {
          font-weight: 800;
          font-size: 20px;
          color: #333;
          position: relative;
          display: block;
          width: 100%;
        }
        .form-group {
          height: 52px;
        }
        input[type="text"],
        input[type="password"],
        input[type="email"] {
          height: 42px;
          text-decoration: none;
          outline: none;
          background: none;
          border: none;
          border-bottom: 2px solid #dadada;
          font-weight: 500;
          width: 100%;
          font-size: 14px;
          color: #2b2b2b;
          font-family: "Noto Sans TC", sans-serif;
        }

        .form-check-input {
          position: absolute;
          margin-top: 0.3rem;
          margin-left: 0.5rem;
        }
        .form-check-label {
          margin-bottom: 10px;
          color: #777;
          width: 100%;
          font-size: 15px;
          font-weight: 500;
          font-family: "Noto Sans TC", sans-serif;
        }
        @media only screen and (min-width: 768px) {
          .wrap .questionCard {
            width: 468px;
            padding: 30px 0px;
          }
          .form-check-input {
            margin-left: -1.25rem;
          }
          .form-check-label {
            margin-left: 0px;
            font-size: 16px;
          }
          .input-group input:focus + label {
            transform: translate(-8px, -32px) scale(0.9);
          }
          .input-group input.springbok + label {
            transform: translate(-8px, -32px) scale(0.9);
          }
          #email {
            background-position: 360px;
          }
        }
      `}</style>
    </>
  );
};

export default Login;
