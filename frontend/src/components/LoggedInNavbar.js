import { Link } from "react-router-dom";
import { useState } from "react";

const LoggedInNavbar = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <nav>
        <figure>
          <Link to="/">
            <img src="/images/mainLogo.png" alt="LOGO" className="img-fluid" />
          </Link>
        </figure>
        <div
          className="nav-box"
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          <figure className="smallPhoto">
            <img src="" alt="" />
          </figure>

          <div id="dropItem" className={dropDown ? "open" : ""}>
            <div className="dropwrap">
              <div>
                <Link to="/dashboard">帳戶彙總</Link>
              </div>
              <div>
                <Link to="/allusers">基本資料</Link>
              </div>
              <div>
                <Link to="/searchlist">找工作Case</Link>
              </div>
              <div>
                <Link to="/step1">當家教：建立檔案</Link>
              </div>
              <div>
                <Link to="/applicationsManager">Applications Manager</Link>
              </div>
              <div>
                <Link to="/question1">找家教：新增刊登</Link>
              </div>
              <div>
                <Link to="/listingManager">找家教：刊登管理</Link>
              </div>
              <div>
                <Link to="/securitySettings">安全設定</Link>
              </div>
              <div>
                <Link to="/subscription">訂閱選項</Link>
              </div>

              <div>
                <Link to="/logout">登出</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            background-color: #fff;
            width: 100%;
            height: 85px;
            margin: 0 auto;
            padding: 0;
            border-bottom: 1px solid #ebebeb;
            position: relative;
          }

          .navbar-nav {
            float: right;
            position: absolute;
            display: block;
          }

          .navbar-nav ul {
            padding: 0;
            margin: 0;
          }

          .navbar-nav ul li {
            text-decoration: none;
            list-style: none;
          }

          .navbar-nav ul li a {
            font-weight: 800;
            font-size: 14px;
            color: #2b2b2b;
          }

          .nav-box {
            width: 35px;
            height: 35px;
            position: absolute;
            transform: translate(-50%, -50%);
            left: 90%;
            top: 50%;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1000;
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
          .smallPhoto {
            overflow: hidden;
            position: relative;
            border-radius: 50%;
            width: 39px;
            height: 39px;
            background: #eee;
            border: 2px solid white;
            cursor: pointer;
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
          @media only screen and (min-width: 768px) {
            .nav-box {
              left: 96%;
            }
          }
          #dropItem {
            width: 280px;
            height: 458px;
            background-color: white;
            position: absolute;
            margin-top: 6px;
            transform: translateX(-75%);
            border: 1px solid #ebebeb;
            border-top: none;
            display: none;
          }
          #dropItem.open {
            display: block;
          }
          .dropwrap {
            padding-bottom: 0px;
            width: 88%;
            background-color: #fff;
            margin-top: 3%;
            margin-left: 6%;
          }
          .dropwrap div {
            border-bottom: 1px solid #ebebeb;
            height: 45px;
            line-height: 45px;
            font-weight: 500;
            color: #777;
            font-size: 13px;
          }
          .dropwrap div a {
            color: #777;
            font-weight: 500;
            font-size: 13px;
            font-family: "Noto Sans TC", sans-serif;
            height: 100%;
            width: 100%;
            position: relative;
            display: block;
          }
          .dropwrap div:hover {
            border-bottom: 1px solid #484848;
          }
          .img-fluid {
            transform: translateX(36%);
          }

          .wrap .location h2 {
            font-weight: 800;
            font-size: 28px;
            width: 440px;
            margin-top: 10px;
            padding-top: 8px;
            padding-bottom: 8px;
            margin-bottom: 40px;
            color: #2b2b2b;
          }

          input[type="text"]:invalid,
          input[type="date"]:invalid,
          input[type="tel"]:invalid {
            border: 3px solid #a5ce0f;
          }

          .noDetails_block {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: white;
            z-index: 3000;
            display: block;
            opacity: 0;
          }
        `}
      </style>
    </>
  );
};

export default LoggedInNavbar;
