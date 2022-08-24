import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openHamburger, setOpenHamburger] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);

  useEffect(() => {
    setLoginStatus(localStorage.getItem("isLoggedIn"));
  }, []);

  return (
    <>
      <nav id="navbar">
        <figure>
          <Link to="/logout">
            <img src="/images/mainLogo.png" alt="LOGO" className="img-fluid" />
          </Link>
        </figure>

        <div className="navbar-nav">
          <ul>
            <li>
              <span>
                <Link to="/en"> EN </Link>
              </span>
              |
              <span>
                <Link to="/tw"> 中文 </Link>
              </span>
            </li>
            <li>
              <Link to="/searchlist">找工作Case</Link>
            </li>
            <li>
              <Link to="/findTutor">找家教</Link>
            </li>
            <li>
              <Link to="/becomeTutor">當家教</Link>
            </li>
            <li>
              <Link to="/contact">聯絡我們</Link>
            </li>
            <li>
              <Link to="/signup">註冊</Link>
            </li>
            <div>
              <li
                className="nav-item"
                style={
                  openDropDown
                    ? {
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px",
                      }
                    : {
                        borderBottomLeftRadius: "6px",
                        borderBottomRightRadius: "6px",
                      }
                }
              >
                <div
                  id="target"
                  className={openDropDown ? "cross" : "arrow"}
                  onClick={() => {
                    setOpenDropDown(!openDropDown);
                  }}
                >
                  <div
                    className={openDropDown ? "human" : ""}
                    style={{
                      animation: "mailframe 100ms ease-in-out 500ms forwards",
                    }}
                  >
                    <i
                      className="nonselect"
                      id="show-more"
                      style={{
                        animation: "mailframe 100ms ease-in-out 500ms forwards",
                      }}
                    >
                      {openDropDown ? "關閉" : "登入"}
                    </i>
                  </div>
                </div>
                <div id="dropItem" className={openDropDown ? "open" : ""}>
                  <form id="loginForm">
                    <h2 className="nonselect">登入</h2>
                    <div className="container-fluid errorMessageHere"></div>
                    <div className="input-group">
                      <button className="nonselect" id="facebook-login">
                        <img src="/images/fb.png" alt="" width="24px" />
                        <a href="/auth/facebook">Facebook 登入</a>
                      </button>
                      <p className="nonselect">或</p>
                      <button className="nonselect" id="google-login">
                        <img
                          src="/images/googlelogin.png"
                          alt=""
                          width="20px"
                        />
                        <a href="/auth/google">Google 登入</a>
                      </button>
                      <p className="nonselect">或</p>
                    </div>
                    <div className="form-group row">
                      <div className="input-group">
                        <label className="nonselect" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          autoComplete="off"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="input-group">
                        <label className="nonselect" htmlFor="password">
                          密碼
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <input type="checkbox" id="remember" name="remember" />

                      <label htmlFor="remember" className="nonselect">
                        記得我的資料
                      </label>
                    </div>
                    <div
                      className="form-group"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <p className="nonselect">
                        <a href="/forgotpassword" style={{ fontSize: "14px" }}>
                          忘記密碼?
                        </a>
                      </p>
                    </div>
                    <div className="form-group row">
                      <div className="input-group">
                        <input type="submit" id="login" value="登入" />
                      </div>
                    </div>
                    <p
                      style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        fontSize: "14px",
                      }}
                      className="nonselect"
                    >
                      還沒有註冊嗎?
                      <Link to="/signup" style={{ fontSize: "14px" }}>
                        請註冊
                      </Link>
                    </p>
                  </form>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <form style={{ display: "none" }} className="loginForm">
          <input type="email" id="email" style={{ display: "none" }} />
          <input type="checkbox" id="remember" name="remember" />
        </form>
        <i className="nonselect" style={{ display: "none" }} id="show-more"></i>
        <div
          id="hamburger"
          onClick={() => {
            setOpenHamburger(!openHamburger);
          }}
        ></div>
      </nav>

      <div id="ham-menu">
        {openHamburger && (
          <ul>
            {loginStatus ? (
              <>
                <li>
                  <Link to="/dashboard">帳戶彙總</Link>
                </li>

                <li>
                  <Link to="/searchlist">找工作Case</Link>
                </li>
                <li>
                  <Link to="/question1">找家教：新增刊登</Link>
                </li>
                <li>
                  <Link to="/listingmanager">找家教：刊登管理</Link>
                </li>
                <li>
                  <Link to="/security">安全設定</Link>
                </li>
                <li>
                  <Link to="/logout">登出</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/searchlist">找工作Case</Link>
                </li>
                <li>
                  <Link to="/findTutor">找家教</Link>
                </li>
                <li>
                  <Link to="/becomeTutor">當家教</Link>
                </li>
                <li>
                  <Link to="/contact">聯絡我們</Link>
                </li>
                <li>
                  <Link to="/signup">註冊</Link>
                </li>
                <li>
                  <Link to="/login">登入</Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>

      <style jsx>{`
        nav {
          background-color: #fff;
          width: 100%;
          height: 75px;
          margin: 0 auto;
          padding: 0;
          z-index: 2002;
          position: relative;
        }
        nav > figure > a {
          display: block;
        }
        nav h2 {
          font-weight: bold;
        }
        nav > figure {
          width: 200px;
          position: absolute;
          transform: translate(-50%, -50%);
          left: 10%;
          top: 50%;
        }
        nav .arrow {
          background-image: url("/images/arrow-down-white.png");
          background-repeat: no-repeat;
          background-position: 222px 22px;
          background-size: 15px;
          height: 100%;
        }
        nav .cross {
          background-image: url("/images/cross-white.png");
          background-repeat: no-repeat;
          background-position: 222px 22px;
          background-size: 15px;
          height: 100%;
        }

        nav .human {
          background-image: url("/images/login-human-white.png");
          background-repeat: no-repeat;
          background-position: 78px 16px;
          background-size: 23px;
          height: 100%;
        }

        .navbar-nav {
          float: right;
          position: absolute;
          width: 100%;
          top: 50%;
          left: 35%;
          height: 100%;
          transform: translate(0%, -50%);
          display: none;
        }

        .navbar-nav ul {
          padding: 0;
          margin: 0;
        }

        .navbar-nav ul li {
          float: left;
          text-align: center;
          text-decoration: none;
          list-style: none;
          padding: 8px 30px 0px;
          display: block;
          line-height: 56px;
        }

        .navbar-nav ul li a {
          font-weight: 800;
          font-size: 14px;
          color: #2b2b2b;
        }

        .nav-item {
          background-color: #a5ce0f;
          color: white;
          width: 320px;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
          z-index: 1;
          height: 80px;
          cursor: pointer;
          position: relative;
        }

        .nav-item p {
          height: 23px;
          line-height: 23px;
          font-size: 13px;
          font-weight: 600;
          margin: 3px 0 0px;
        }

        .navbar-nav ul .nav-item a {
          color: white;
        }

        .navbar-nav ul .nav-item i {
          color: white;
          font-weight: 700;
          font-style: normal;
        }

        .navbar-nav ul .nav-item {
          padding-left: 0px;
          padding-right: 0px;
        }

        .img-fluid {
          transform: translateX(36%);
        }
        .mainTitle .img-fluid {
          transform: translateX(0%);
        }
        @media screen and (min-width: 768px) {
          .navbar-nav {
            display: block;
          }
        }

        @media screen and (max-width: 668px) {
          nav .navbar-nav ul li:nth-child(3) {
            display: none;
          }
        }

        @media screen and (max-width: 868px) {
          nav .navbar-nav ul li:nth-child(3) {
            display: none;
          }
          nav .navbar-nav ul li:nth-child(4) {
            display: none;
          }
        }

        @media screen and (max-width: 1048px) {
          nav .navbar-nav ul li:nth-child(5) {
            display: none;
          }
          nav .nav-item {
            width: 220px;
          }
        }

        @media screen and (max-width: 1268px) {
          nav .navbar-nav ul li {
            padding: 8px 18px;
          }

          nav .navbar-nav ul li:nth-child(6) {
            display: none;
          }

          nav .nav-item {
            width: 250px;
          }
        }

        @media screen and (max-width: 1568px) {
          nav .nav-item {
            width: 280px;
          }
          nav #dropItem {
            width: 280px;
          }
        }

        #hamburger {
          background: url("/images/menu-black.png");
          background-repeat: no-repeat;
          background-size: 45%;
          background-position: center;
          cursor: pointer;
          position: absolute;
          height: 85px;
          width: 80px;
          display: block;
          transform: translate(-50%, -50%);
          top: 55%;
          left: 90%;
        }
        #ham-menu ul li a {
          color: white;
          position: relative;
          display: block;
          width: 100%;
        }
        #ham-menu ul {
          padding: 0px 0px 0px 0px;
          margin: 0px 1em 1em;
        }
        #ham-menu ul li {
          list-style: none;
          color: white;
          background-color: #2b2b2b;
          opacity: 0.8;
          height: 50px;
          line-height: 50px;
          width: 100%;
          padding-left: 30px;
          border-bottom: 1px solid #777;
          border-left: 3px solid transparent;
        }

        #ham-menu ul li:hover {
          border-left: 3px solid #a5ce0f;
          cursor: pointer;
        }
        #ham-menu ul li {
          display: block;
        }
        @media screen and (min-width: 768px) {
          #hamburger {
            display: none;
          }
          #ham-menu {
            display: none;
          }
        }

        #dropItem {
          width: 320px;
          background-color: #f4f5f6;
          color: #2b2b2b;
          border: 1px solid #ebebeb;
          border-top: none;
          display: none;
          padding: 8px 12px;
          z-index: 2500;
          cursor: default;
        }
        #dropItem.open {
          display: block;
        }

        #dropItem p {
          margin: 6px auto;
          font-size: 12px;
        }

        #dropItem .nonselect {
          line-height: 24px;
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
										supported by Chrome, Edge, Opera and Firefox */
        }
        #dropItem h2,
        #dropItem p,
        #dropItem label {
          text-align: left;
        }

        .smallPhoto {
          overflow: hidden;
          position: relative;
          border-radius: 50%;
          width: 39px;
          height: 39px;
          margin: 8px auto 0px;
          background: #eee;
          border: 2px solid white;
          cursor: pointer;
          margin: 8px auto 0px;
        }
        .smallPhoto img {
          position: absolute;
          max-width: 48px;
          height: auto;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
        }

        .smallPhoto .blankImage {
          position: relative;
          height: 40px;
          width: 40px;
          background-color: red;
        }

        #loginForm input[type="email"] {
          border: 2px solid rgb(218, 218, 218);
          width: 100%;
          height: 46px;
          outline: none;
          display: block;
          padding: 5px 15px;
          margin-bottom: 16px;
          font-size: 13px;
          font-weight: 500;
        }
        #loginForm input[type="password"] {
          border: 2px solid rgb(218, 218, 218);
          width: 100%;
          height: 46px;
          outline: none;
          display: block;
          padding: 5px 15px;
          font-size: 13px;
          font-weight: 500;
        }

        .updateNote {
          background-color: #fcebcd;
          margin: 5px auto 12px;
          padding: 7px;
        }
        #dropItem #login,
        #dropItem #facebook-login,
        #dropItem #google-login {
          border: 2px solid #a5ce0f;
          color: #fff;
          background-color: #a5ce0f;
          width: 100%;
          height: 46px;
          line-height: 40px;
          outline: none;
          display: block;
          font-weight: 800;
          border-radius: 4px;
        }
        #dropItem #login:hover {
          cursor: pointer;
        }
        #dropItem #facebook-login {
          background-color: #3a5ba0;
          border: 2px solid #3a5ba0;
          position: relative;
        }
        #dropItem #facebook-login a {
          font-size: 14px;
          font-weight: 700;
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 42px;
          color: white;
        }
        #dropItem #facebook-login:hover {
          cursor: pointer;
        }
        #dropItem #facebook-login img {
          float: left;
          margin-right: 10px;
          position: absolute;
          transform: translate(-90px, 7px);
        }

        #dropItem #google-login {
          background-color: #fff;
          color: #333;
          border: 1px solid #333;
          position: relative;
        }
        #dropItem #google-login a {
          font-size: 14px;
          font-weight: 700;
          color: #333;
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 42px;
        }
        #dropItem #google-login:hover {
          cursor: pointer;
        }
        #dropItem #google-login img {
          float: left;
          margin-right: 10px;
          position: absolute;
          transform: translate(-85px, 11px);
        }

        input[type="password"]:active,
        input[type="password"]:focus,
        input[type="email"]:focus,
        input[type="email"]:active {
          outline: 3px solid #a5ce0f;
        }
        .input-group label {
          display: block;
          line-height: 24px;
        }
        form .row {
          margin: 0px;
        }
        form h2 {
          font-family: "Noto Sans TC", sans-serif;
          font-size: 20px;
          font-weight: 700;
          margin: 20px auto;
        }
        #dropItem form a {
          color: #008489;
          text-decoration: none;
          font-weight: 700;
        }
        form p {
          font-weight: 500;
          color: #484848;
          margin: 13px auto;
        }
        form a:hover {
          color: #008489;
        }
        input[type="checkbox"] {
          display: none;
        }
        input[type="checkbox"] label {
          color: red;
        }
        #dropItem input[type="checkbox"] + label {
          position: relative;
          cursor: pointer;
          font-size: 14px;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
          margin: 2px 0px 8px 35px;
          width: 100%;
          display: block;
          color: #2b2b2b;
        }
        #dropItem input[type="checkbox"] + label::before {
          content: " ";
          position: relative;
          left: -33px;
          top: 21px;
          width: 24px;
          height: 24px;
          display: block;
          background: white;
          border-radius: 0px;
          border: 2px solid rgb(218, 218, 218);
        }
        #dropItem input[type="checkbox"] + label::after {
          content: " ";
          position: absolute;
          left: -31px;
          top: 24px;
          width: 19px;
          height: 19px;
          display: block;
          z-index: 1;
          background: url("/images/tick.png");
          background-repeat: no-repeat;
          background-size: 15px;
          background-position: center;
          -webkit-transform: scale(0);
          transform: scale(0);
          opacity: 0;
          outline: 3px solid #a5ce0f;
          border: none;
        }
        #dropItem input[type="checkbox"]:checked + label::after {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
        }

        @keyframes mailframe {
          from {
            visibility: hidden;
          }
          to {
            visibility: visible;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
