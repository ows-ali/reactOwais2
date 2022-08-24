import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import { StyledFormSubmit, StyledFormButton } from "../components/Styles";
// import { Cookies } from "react-cookie";

// set up cookies
// const cookies = new Cookies();

const Signup = () => {
  const history = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tickBox, setTickBox] = useState(false);
  const [vanishfirst, setVanishfirst] = useState(false);
  const [vanishlast, setVanishlast] = useState(false);
  const [vanishemail, setVanishemail] = useState(false);
  const [vanishpwd, setVanishpwd] = useState(false);
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState([]);

  // ========== ERROR MESSAGE ===============

  const [updateNote, setUpdateNote] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function outPutErrorMessagesInSignUp(errorMessage) {
    setUpdateNote(true);
    setErrorMsg(errorMessage);
  }
  // ========== POST ================
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      console.log(data, "data");
      if (data.prompt) {
        outPutErrorMessagesInSignUp(data.prompt);
      }
      if (data.invalid) {
        console.log("invalid");
        outPutErrorMessagesInSignUp(data.invalid);
      }
      if (data.user) {
        localStorage.setItem("firstName", data.user.firstName);
        localStorage.setItem("lastName", data.user.lastName);
        localStorage.setItem("userName", data.user.email);
        localStorage.setItem("userId", data.user._id);
        localStorage.setItem("nanoId", data.user.nanoId);
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", true);
        // cookies.set("accessToken", data.token);
        setProfile(data.user);
        history("/allusers");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>愛課網 | 註冊</title>
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

          <div className="container regCon">
            <h2>愛課網 註冊帳號 </h2>
            <form id="signupForm" onSubmit={onSubmit}>
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
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    id="lastname"
                    maxLength="2"
                    autoComplete="nope"
                    onBlur={() => {
                      setVanishlast(true);
                    }}
                    className={vanishlast && lastName !== "" ? "springbok" : ""}
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  <label htmlFor="lastname">姓氏</label>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    id="firstname"
                    maxLength="2"
                    autoComplete="nope"
                    value={firstName}
                    onBlur={() => {
                      setVanishfirst(true);
                    }}
                    className={
                      vanishfirst && firstName !== "" ? "springbok" : ""
                    }
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <label htmlFor="firstname">名字</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    onBlur={() => {
                      setVanishemail(true);
                    }}
                    className={vanishemail && email !== "" ? "springbok" : ""}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    maxLength="22"
                    value={password}
                    onBlur={() => {
                      setVanishpwd(true);
                    }}
                    className={vanishpwd && password !== "" ? "springbok" : ""}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
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

              <div className="form-group">
                <div className="col-sm-4"></div>
                <div className="col-sm-8">
                  <input
                    type="checkbox"
                    id="gridCheck"
                    checked={tickBox}
                    onChange={(e) => {
                      setTickBox(e.currentTarget.checked);
                    }}
                  />
                  <label htmlFor="gridCheck">
                    我同意愛課網的
                    <Link to="/termsAndconditions">使用條款</Link>
                  </label>
                </div>

                {lastName && firstName && email && password && tickBox ? (
                  <StyledFormSubmit
                    type="submit"
                    value="註冊"
                  ></StyledFormSubmit>
                ) : (
                  <StyledFormButton disabled>註冊</StyledFormButton>
                )}
              </div>
            </form>
          </div>
          <p>
            已經有愛課網帳號了?
            <Link to="/login">登入</Link>
          </p>
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
        }

        .wrap .questionCard > figure > a {
          display: block;
        }

        .wrap .questionCard h2 {
          font-family: "Noto Sans TC", sans-serif;
          text-align: left;
          font-weight: 400;
          font-size: 22px;
          width: 100%;
          margin: 15px auto;
          padding-top: 8px;
          padding-bottom: 8px;
          color: #2b2b2b;
        }

        .regCon {
          margin: 0px auto;
          width: 90%;
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
        #firstname,
        #lastname {
          background-image: url("/images/human.png");
          background-repeat: no-repeat;
          background-size: 17px;
          background-position: 320px;
        }

        .input-group input:focus + label {
          transform: translate(-8px, -32px) scale(0.9);
          font-size: 17px;
          opacity: 1;
        }
        .input-group input.springbok + label {
          transform: translate(-8px, -32px) scale(0.9);
          font-size: 17px;
          opacity: 0;
        }
        label {
          display: inline-block;
          font-size: 17px;
          margin-bottom: 10px;
          color: #1d1d1d;
          width: 150px;
          text-align: left;
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
        .questionCard p {
          margin: 10px auto;
          text-align: center;
          color: #777;
          width: 100%;
          font-size: 17px;
          font-weight: 500;
          font-family: "Noto Sans TC", sans-serif;
          top: 18px;
          position: relative;
        }

        .questionCard a {
          margin-bottom: 0;
          width: 100%;
          font-size: 17px;
          font-weight: 700;
          font-family: "Noto Sans TC", sans-serif;
          color: #008489;
        }
        input[type="checkbox"] {
          display: none;
          float: left;
        }
        input[type="checkbox"] + label {
          position: relative;
          cursor: pointer;
          font-size: 17px;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
          margin: 0px 0px 0px 50px;
          width: 100%;
          display: block;
          color: #2b2b2b;
        }
        input[type="checkbox"] + label::before {
          content: " ";
          position: relative;
          left: -55px;
          top: 16px;
          width: 20px;
          height: 20px;
          display: block;
          background: white;
          border-radius: 4px;
          -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
        }
        input[type="checkbox"] + label::after {
          content: " ";
          position: absolute;
          left: -60px;
          top: 13px;
          width: 30px;
          height: 30px;
          display: block;
          z-index: 1;
          background: url("/images/check.png");
          background-repeat: no-repeat;
          background-size: 15px;
          background-position: center;
          -webkit-transition: all 0.2s ease;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
          -webkit-transform: scale(0);
          transform: scale(0);
          opacity: 0;
        }
        input[type="checkbox"]:checked + label::after {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
        }

        .updateNote {
          background-color: #fcebcd;
          margin: 5px auto 12px;
          padding: 7px;
        }
        @media only screen and (min-width: 768px) {
          .wrap .questionCard {
            width: 468px;
            padding: 30px 0px;
          }
          .wrap .questionCard h2 {
            font-size: 28px;
          }
          .input-group input:focus + label {
            transform: translate(-8px, -32px) scale(0.9);
          }
          .input-group input.springbok + label {
            transform: translate(-8px, -32px) scale(0.9);
          }
          #firstname,
          #lastname {
            background-position: 360px;
          }
          #email {
            background-position: 360px;
          }
        }
      `}</style>
    </>
  );
};

export default Signup;
