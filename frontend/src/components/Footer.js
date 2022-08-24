import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ExternalLink } from "react-external-link";

const Footer = () => {
  const [thisyear, setThisyear] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

  useEffect(() => {
    const ditjaar = new Date();
    const year = ditjaar.getFullYear();
    setThisyear(year);
    setLoginStatus(localStorage.getItem("isLoggedIn"));
    setFirstName(localStorage.getItem("firstName"));
  }, []);

  return (
    <>
      <div
        className="pageBottom container-fluid"
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="mainTitle">
            <figure>
              <Link to="/">
                <span className="navbar-brand">
                  <img
                    src="/images/logo-footer.png"
                    className="img-fluid"
                    alt=""
                    style={{ height: "100px", width: "200px" }}
                  />
                </span>
              </Link>
            </figure>
            <div className="tonBtn">
              <Link to="/findTutor">找家教</Link>
              <Link to="/becomeTutor">當家教</Link>
              <Link to="/contact">聯絡我們</Link>
              {loginStatus ? (
                <>
                  <Link to="/logout">登出</Link>
                  <Link to="/">妳好, {firstName}</Link>
                </>
              ) : (
                <>
                  <Link to="/signup">註冊</Link>
                  <Link to="/login">登入</Link>
                </>
              )}
            </div>
          </div>
          <p className="title mb-4">導師按科目</p>
          <div
            style={{ borderBottom: "1px solid #fff" }}
            className="container pb-4"
          >
            <div className="row">
              <div className="col-md-3">
                <div className="bigClass">
                  <Link to="/#">數學</Link>
                  <Link to="/#">科學</Link>
                  <Link to="/#">會計</Link>
                  <Link to="/#">歷史</Link>
                  <Link to="/#">化學</Link>
                  <Link to="/#">社會</Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bigClass">
                  <Link to="/#">化學</Link>
                  <Link to="/#">經濟學</Link>
                  <Link to="/#">工程</Link>
                  <Link to="/#">媒體</Link>
                  <Link to="/#">物理</Link>
                  <Link to="/#">統計</Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bigClass">
                  <Link to="/#">大提琴</Link>
                  <Link to="/#">鼓</Link>
                  <Link to="/#">吉他</Link>
                  <Link to="/#">鋼琴</Link>
                  <Link to="/#">唱歌</Link>
                  <Link to="/#">小提琴</Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bigClass last">
                  <Link to="/#">英語</Link>
                  <Link to="/#">法語</Link>
                  <Link to="/#">西班牙語</Link>
                  <Link to="/#">日文</Link>
                  <Link to="/#">韓語</Link>
                  <Link to="/#">義大利語</Link>
                </div>
              </div>
            </div>
          </div>
          <p className="title my-4">依地區找家教</p>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="bigClass">
                  <Link to="/#">台北市中正區</Link>
                  <Link to="/#">台北市大同區</Link>
                  <Link to="/#">台北市中山區</Link>
                  <Link to="/#">台北市松山區</Link>
                  <Link to="/#">台北市大安區</Link>
                  <Link to="/#">台北市萬華區</Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bigClass">
                  <Link to="/#">台北市信義區</Link>
                  <Link to="/#">台北市士林區</Link>
                  <Link to="/#">台北市北投區</Link>
                  <Link to="/#">台北市內湖區</Link>
                  <Link to="/#">台北市南港區</Link>
                  <Link to="/#">台北市文山區</Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bigClass">
                  <Link to="/#">新北市</Link>
                  <Link to="/#">桃園市</Link>
                  <Link to="/#">台中市</Link>
                  <Link to="/#">台南市</Link>
                  <Link to="/#">高雄市</Link>
                  <Link to="/#">新竹縣</Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bigClass last">
                  <Link to="/#">南投縣</Link>
                  <Link to="/#">彰化縣</Link>
                  <Link to="/#">嘉義縣</Link>
                  <Link to="/#">屏東縣</Link>
                  <Link to="/#">宜蘭縣</Link>
                  <Link to="/#">花蓮縣</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="container-fluid" style={{ position: "relative" }}>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span className="font-weight-light">
            版權所有 <span>{thisyear}</span> © ACABOOK All Rights Reserved.
          </span>
          <Link to="/privacy">隱私政策</Link>
          <Link to="/termsAndConditions">使用條款</Link>
          <Link to="/security">安全政策</Link>
          <ExternalLink href="https://www.facebook.com" target="_blank">
            <div id="fbicon">
              <img src="/images/facebook.png" alt="" width="22px" />
              Facebook
            </div>
          </ExternalLink>
        </div>
        <span
          className="font-weight-light-mobile"
          style={{ marginTop: "20px" }}
        >
          版權所有 <span>{thisyear}</span> © ACABOOK All Rights Reserved.
        </span>
      </footer>
      <style jsx>{`
        html,
        body {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        button a:active,
        button:focus {
          border: none;
          outline: none;
        }

        #subscribe-btn a:hover {
          color: white;
        }
        #subscribe-btn a {
          height: 100%;
          width: 100%;
          display: block;
          color: white;
        }

        footer .font-weight-light-mobile {
          display: block;
        }
        footer .font-weight-light {
          display: none !important;
        }

        footer #fbicon {
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
        }

        @media screen and (min-width: 768px) {
          footer .font-weight-light-mobile {
            display: none;
          }
          footer .font-weight-light {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
