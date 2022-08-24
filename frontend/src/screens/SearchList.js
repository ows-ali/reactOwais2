import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SearchList = () => {
  const [ascDesc, setAscDesc] = useState(false);
  const [backDrop, setBackdrop] = useState(false);

  return (
    <>
      <Helmet>
        <title>愛課網</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <meta name="description" content="愛課網" />
      </Helmet>
      <Navbar />
      <section className="filter">
        <div className="fix-Container">
          <div className="row">
            <div
              className="nonselect"
              onClick="clickOnFilters()"
              id="filterPanel"
            >
              <div id="filter"></div>
              <span>快搜選項</span>
            </div>

            <form style={{ marginRight: "118px" }}>
              {ascDesc ? (
                <button
                  id="arrow-up"
                  onClick={() => {
                    setAscDesc(!ascDesc);
                  }}
                >
                  <Link to="?sortBy=desc&city=<%=city%>&location=<%=location%>&contract=<%=contract%>&subjects=<%=subjects%>&page=<%=page%>">
                    由舊到新排序
                  </Link>
                </button>
              ) : (
                <button
                  id="arrow-down"
                  onClick={() => {
                    setAscDesc(!ascDesc);
                  }}
                >
                  <Link to="?sortBy=asc&city=<%=city%>&location=<%=location%>&contract=<%=contract%>&subjects=<%=subjects%>&page=<%=page%>">
                    由新到舊排序
                  </Link>
                </button>
              )}
            </form>

            <div className="results">目前找到 個工作Case</div>
          </div>
        </div>
      </section>
      <div className="wrap">
        <div className="filterCard container">
          <div className="filterTitle">
            <img
              onclick="disappear()"
              style={{ width: "20px", cursor: "pointer", verticalAlign: "top" }}
              src="/images/cross-black.png"
              alt=""
            />
            <h2>快搜選項</h2>
          </div>

          <form id="filterForm" action="/searchlist">
            <div className="modal-box-contract">
              <h2 style={{ margin: "0" }}>課程類別</h2>
              <div className="row">
                <div className="contract_flex">
                  <input
                    id="university"
                    type="checkbox"
                    name="contract"
                    value="大學"
                  />
                  <label for="university">大學</label>
                  <input
                    id="school"
                    type="checkbox"
                    name="contract"
                    value="學校"
                  />
                  <label for="school">學校</label>
                  <input
                    id="standard"
                    type="checkbox"
                    name="contract"
                    value="一般課程"
                  />
                  <label for="standard">一般課程</label>
                  <input
                    id="language"
                    type="checkbox"
                    name="contract"
                    value="語言"
                  />
                  <label for="language">語言</label>
                  <input
                    id="music"
                    type="checkbox"
                    name="contract"
                    value="樂器"
                  />
                  <label for="music">樂器</label>
                </div>
              </div>
            </div>

            <div className="modal-box-roletype">
              <h2 style={{ margin: "0" }}>科目</h2>
              <div className="row">
                <div className="role_flex">
                  <input
                    id="english"
                    type="checkbox"
                    name="subjects"
                    value="英文"
                  />
                  <label for="english">英文</label>
                  <input
                    id="maths"
                    type="checkbox"
                    name="subjects"
                    value="數學"
                  />
                  <label for="maths">數學</label>
                  <input
                    id="tech"
                    type="checkbox"
                    name="subjects"
                    value="歷史"
                  />
                  <label for="tech">歷史</label>
                </div>
              </div>
            </div>
            <div class="modal-box-location">
              <h2 style={{ margin: "0" }}>縣市位置</h2>
              <div className="row">
                <div className="states_flex">
                  <input
                    id="a"
                    type="checkbox"
                    name="location"
                    value="台北市"
                  />
                  <label for="a">台北市</label>
                  <input
                    name="location"
                    id="b"
                    type="checkbox"
                    value="新北市"
                  />
                  <label for="b">新北市</label>
                  <input
                    id="c"
                    type="checkbox"
                    name="location"
                    value="桃園市"
                  />
                  <label for="c">桃園市</label>
                  <input id="d" type="checkbox" name="city" value="新竹縣" />
                  <label for="d">新竹縣</label>
                  <input id="e" type="checkbox" name="city" value="苗栗縣" />
                  <label for="e">苗栗縣</label>
                  <input id="f" type="checkbox" name="city" value="南投縣" />
                  <label for="f">南投縣</label>
                  <input
                    id="g"
                    type="checkbox"
                    name="location"
                    value="台中市"
                  />
                  <label for="g">台中市</label>
                  <input id="h" type="checkbox" name="city" value="彰化縣" />
                  <label for="h">彰化縣</label>
                  <input id="i" type="checkbox" name="city" value="雲林縣" />
                  <label for="i">雲林縣</label>
                  <input id="j" type="checkbox" name="city" value="嘉義縣" />
                  <label for="j">嘉義縣</label>
                  <input
                    id="k"
                    type="checkbox"
                    name="location"
                    value="台南市"
                  />
                  <label for="k">台南市</label>
                  <input
                    id="l"
                    type="checkbox"
                    name="location"
                    value="高雄市"
                  />
                  <label for="l">高雄市</label>
                  <input id="m" type="checkbox" name="city" value="屏東" />
                  <label for="m">屏東縣</label>
                  <input id="n" type="checkbox" name="city" value="宜蘭縣" />
                  <label for="n">宜蘭縣</label>
                  <input id="o" type="checkbox" name="city" value="花蓮縣" />
                  <label for="o">花蓮縣</label>
                  <input id="p" type="checkbox" name="city" value="台東縣" />
                  <label for="p">台東縣</label>
                  <input id="q" type="checkbox" name="city" value="澎湖縣" />
                  <label for="q">澎湖縣</label>
                </div>
              </div>
            </div>
            <input type="submit" class="btn-search" value="搜索" />
          </form>
        </div>
        <div
          onClick={() => {
            setBackdrop(true);
          }}
          className="backdrop"
        ></div>
        <div className="wrap">
          <section className="listContent container-fluid">
            <div className="wrapper">
              <div className="adList">
                <div className="wrapper-ads">
                  <div className="app-photo-1"></div>
                  <div className="ads">
                    <Link to="/api/listings/adPosts/<%=post.slug%>">
                      <div className="rightmessage">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h2>
                            <span className="highlight_music"></span>
                          </h2>
                          <div
                            style={{
                              height: "30px",
                              width: "130px",
                              display: "block",
                              color: "#2b2b2b",
                            }}
                          ></div>
                        </div>
                        <h3>刊登日期:</h3>
                        <p></p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        html,
        body {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .wrap {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          min-height: 100vh;
          padding-top: 0px;
          background-color: #f0eff5;
        }

        .wrapper {
          display: grid;
          grid-column-gap: 0.1em;
          background-size: cover;
          grid-auto-rows: 796px;
          grid-template-columns: 100%;
          position: relative;
          padding: 0px 0px 0px 15px;
          overflow: hidden;
        }
        .wrapper .adList {
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          position: relative;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        ::-moz-scrollbar {
          display: none;
        }
        :-ms-scrollbar {
          display: none;
        }
        .scrollbar {
          display: none;
        }

        .wrapper-ads .ads {
          height: 150px;
          width: 100%;
          border-radius: 0px;
          border: none;
          margin: 15px 10px 10px 0px;
          position: relative;
          overflow: hidden;
        }

        .highlight_school {
          color: white;
          background: #a5ce0f;
          border-radius: 4px;
          height: 25px;
          line-height: 21px;
          text-align: center;
          padding: 2px 8px;
          display: inline-block;
        }

        .highlight_university {
          color: white;
          background: #54c8e8;
          border-radius: 4px;
          height: 25px;
          line-height: 21px;
          text-align: center;
          padding: 2px 8px;
          display: inline-block;
        }
        .highlight_standard {
          color: white;
          background: deeppink;
          border-radius: 4px;
          height: 25px;
          line-height: 21px;
          text-align: center;
          padding: 2px 8px;
          display: inline-block;
        }
        .highlight_language {
          color: white;
          background: #ffa500;
          border-radius: 4px;
          height: 25px;
          line-height: 21px;
          text-align: center;
          padding: 2px 8px;
          display: inline-block;
        }
        .highlight_music {
          color: white;
          background: #a020f0;
          border-radius: 4px;
          height: 25px;
          line-height: 21px;
          text-align: center;
          padding: 2px 8px;
          display: inline-block;
        }

        .ads p {
          height: 46px;
          overflow: hidden;
        }

        .applicant-ads .ads {
          height: 110px;
          width: 100%;
          border-radius: 4px;
          border: 1px solid #ebebeb;
          background-color: rgba(35, 35, 35, 0.2);
          margin: 15px 10px 10px 0px;
          position: relative;
          overflow: hidden;
        }

        .wrapper-ads .rightmessage {
          margin-left: 0px;
          cursor: pointer;
          position: relative;
          padding: 10px 15px;
          display: block;
          margin-right: 15px;
          width: 97%;
          height: 100%;
          background-color: white;
          border-bottom: 1px solid #777;
        }
        .wrapper-ads .ads:hover {
          -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .wrapper-ads .rightmessage h2 {
          font-size: 18px;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 600;
          color: #2b2b2b;
        }
        .rightmessage h3 {
          font-size: 14px;
          font-family: "Noto Sans TC", sans-serif;
          color: #2b2b2b;
          font-weight: 800;
          margin: 15px 0px;
        }
        .rightmessage p {
          font-size: 14px;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 100;
          color: #2b2b2b;
          margin: 5px 0px;
        }

        .no-listings {
          text-align: center;
          margin-top: 20px;
          padding: 0px auto;
        }
        .no-listings h2 {
          color: 333;
          font-weight: 800;
          margin: 0;
          font-size: 18px;
        }
        @media screen and (max-width: 768px) {
          .wrap .listContent .adList {
            width: 100%;
          }
        }
        @media only screen and (min-width: 768px) {
          .wrapper {
            grid-template-columns: 56% 44%;
            padding: 0px 0px 0px 15px;
          }
          .wrapper-ads .rightmessage {
            margin-left: 0px;
            width: 100%;
          }
        }

        .filter {
          height: 56px;
          display: block;
          background: #fff;
          border-bottom: 1px solid #ebebeb;
          position: fixed;
          margin-top: 0px;
          width: 100%;
          z-index: 2000;
          position: relative;
        }
        .fix-Container {
          width: 100%;
          height: 56px;
          position: relative;
        }
        .results {
          position: relative;
          height: 56px;
          line-height: 56px;
          width: 200px;
          font-weight: 600;
          font-size: 13px;
          font-family: "Noto Sans TC", sans-serif;
          color: rgb(51, 63, 72);
          display: none;
        }

        .wrap .filterCard {
          width: 420px;
          height: 95vh;
          padding: 20px 10px;
          align-items: center;
          border-radius: 0px;
          background: #fff;
          -webkit-box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
          box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
          z-index: 3000;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          position: absolute;
          display: none;
          animation: filterframe 1200ms ease-in 0ms;
          overflow: scroll;
        }
        @keyframes filterframe {
          from {
            transform: translate(-50%, -30%);
            opacity: 0;
          }
          to {
            transform: translateY(-50%, -50%);
            opacity: 1;
          }
        }

        .wrap .filterCard .filterTitle {
          position: relative;
          height: 42px;
          line-height: 42px;
          border-bottom: 1px solid rgb(210, 213, 218);
        }

        .wrap .filterCard .filterTitle h2 {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          font-weight: 600;
          font-size: 18px;
          font-family: "Noto Sans TC", sans-serif;
          color: rgb(51, 63, 72);
        }

        .wrap .filterCard .filterTitle img:hover {
          background-color: #dedede;
        }
        .wrap .modal-box-roletype {
          display: block;
          background: white;
          width: 100%;
          padding-bottom: 20px;
          margin: 30px auto;
          position: relative;
          font-size: 13px;
          border-bottom: 1px solid rgb(210, 213, 218);
        }
        .wrap .modal-box-roletype h2 {
          color: rgb(51, 63, 72);
          font-size: 16px;
          font-weight: 600;
          font-family: "Noto Sans TC", sans-serif;
        }

        .wrap .modal-box-contract {
          display: block;
          background: white;
          width: 100%;
          padding-bottom: 20px;
          margin: 30px auto;
          position: relative;
          font-size: 13px;
          border-bottom: 1px solid rgb(210, 213, 218);
        }
        .wrap .modal-box-contract h2 {
          color: rgb(51, 63, 72);
          font-size: 16px;
          font-weight: 600;
          font-family: "Noto Sans TC", sans-serif;
        }

        .wrap .modal-box-location {
          display: block;
          background: white;
          width: 100%;
          padding-bottom: 20px;
          margin: 30px auto;
          position: relative;
          font-size: 13px;
          border-bottom: 1px solid rgb(210, 213, 218);
        }

        .wrap .modal-box-location h2 {
          color: rgb(51, 63, 72);
          font-size: 16px;
          font-weight: 600;
          font-family: "Noto Sans TC", sans-serif;
        }

        .filterCard .btn-search {
          height: 48px;
          border-radius: 4px;
          width: 120px;
          font-weight: 800;
          font-size: 20px;
          background-color: #a5ce0f;
          text-align: center;
          border-color: #a5ce0f;
          box-sizing: border-box;
          margin-top: 0px;
          cursor: pointer;
          padding: 1px auto;
          line-height: 32px;
          color: #fff;
          position: relative;
          outline: none;
          border: none;
        }

        .filterCard .btn-search:active,
        .filterCard .btn-search:focus {
          outline: none;
          border: none;
        }

        #filterPanel {
          width: 150px;
          height: 40px;
          padding: 5px 16px;
          line-height: 30px;
          font-size: 13px;
          border-radius: 4px;
          background-color: white;
          color: #484848;
          border: 1px solid #dce0e0;
          text-align: center;
          cursor: pointer;
          display: inline-block;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
          position: relative;
          left: 30px;
          top: 7px;
        }

        #filterPanel span {
          margin-left: 26px;
          font-weight: 500;
        }

        #filterPanel:hover,
        #arrow-down:hover {
          background-color: #f7f8f9;
          border-color: #353f47;
        }

        #arrow-up {
          background-image: url(./../../images/arrow-up.png);
          height: 40px;
          width: 150px;
          line-height: 32px;
          font-size: 13px;
          border-radius: 4px;
          border: 1px solid #dce0e0;
          position: relative;
          left: 50px;
          top: 7px;
          text-align: center;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
          cursor: pointer;
          display: inline-block;
          background-repeat: no-repeat;
          background-position: 19px 14px;
          background-size: 13px;
          padding: 0;
          background-color: #a5ce0f;
          border: 1px solid #a5ce0f;
        }

        #arrow-down {
          background-image: url(./../../images/arrow-down.png);
          height: 40px;
          width: 150px;
          line-height: 32px;
          font-size: 13px;
          border-radius: 4px;
          border: 1px solid #dce0e0;
          text-align: center;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
          cursor: pointer;
          background-color: white;
          background-repeat: no-repeat;
          background-position: 19px 14px;
          background-size: 13px;
          display: inline-block;
          position: relative;
          left: 50px;
          top: 7px;
          padding: 0;
        }
        #arrow-up a {
          height: 100%;
          width: 100%;
          color: #fff;
          position: relative;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
          display: block;
          line-height: 40px;
        }
        #arrow-down a {
          height: 100%;
          width: 100%;
          color: #484848;
          position: relative;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 500;
          display: block;
          line-height: 40px;
        }
        #filter {
          background-image: url(./../../images/filters-small.png);
          height: 30px;
          width: 30px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 22px;
          display: block;
          position: absolute;
        }
        .backdrop {
          position: fixed;
          display: none;
          background-color: rgba(33, 40, 46, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2500;
        }

        .checkboxes {
          background-color: #a5ce0f;
          cursor: pointer;
          color: white;
          border: 1px solid #a5ce0f;
          position: relative;
          width: 250px;
          font-size: 16px;
          text-align: center;
          height: 40px;
          margin-top: 18px;
          border-radius: 4px;
          transform: translateX(19%);
          outline: none;
        }

        .checkboxes:focus,
        .checkboxes:active {
          outline: none;
        }

        .modal-box-location input[type="checkbox"],
        .modal-box-roletype input[type="checkbox"],
        .modal-box-contract input[type="checkbox"] {
          display: none;
          margin: 0;
          width: 0;
        }
        @media only screen and (min-width: 768px) {
          .wrap .filterCard {
            width: 680px;
            padding: 30px 16px;
            z-index: 3500;
          }
          .results {
            display: block;
          }
        }

        .states_flex {
          display: -webkit-box;
          display: -ms-flexbox;
          display: block;
          -ms-flex-pack: distribute;
          justify-content: space-around;
          margin: 1px 0px 0px 80px;
          height: 100%;
        }
        .contract_flex {
          display: -webkit-box;
          display: -ms-flexbox;
          display: block;
          -ms-flex-pack: distribute;
          justify-content: space-around;
          margin: 1px 0px 0px 80px;
          height: 100%;
        }
        .role_flex {
          display: -webkit-box;
          display: -ms-flexbox;
          display: block;
          -ms-flex-pack: distribute;
          justify-content: space-around;
          margin: 1px 0px 0px 80px;
          height: 100%;
        }

        input::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #555 !important;
          font-weight: bold;
        }
        input::-moz-placeholder {
          /* Firefox 19+ */
          color: #555 !important;
          font-weight: bold;
        }
        input :-ms-input-placeholder {
          /* IE 10+ */
          color: #555 !important;
          font-weight: bold;
        }
        input:-moz-placeholder {
          /* Firefox 18- */
          color: #555 !important;
          font-weight: bold;
        }
        input[type="checkbox"] {
          opacity: 0;
          float: left;
        }
        /*Checboxes*/
        input[type="checkbox"] + label {
          margin: 0 0 0 20px;
          position: relative;
          cursor: pointer;
          font-size: 14px;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 200;
          float: left;
          margin: 0px;
          width: 100%;
        }
        input[type="checkbox"] + label::before {
          content: " ";
          position: relative;
          left: -45px;
          top: 19px;
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
          left: -50px;
          top: 15px;
          width: 30px;
          height: 30px;
          display: block;
          z-index: 1;
          background: url("./../../images/check.png");
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

        .fixMap {
          display: none;
          width: 100%;
          height: 100%;
        }
        #map {
          position: center;
          width: 100%;
          height: 100%;
          display: block;
        }

        @media screen and (min-width: 768px) {
          .fixMap {
            display: block;
          }
        }

        .paginate {
          width: 100%;
          height: 30px;
          display: flex;
          justify-content: center;
          border: none;
          z-index: 500;
          margin: 22px auto;
          background-color: #f0eff5;
        }
        .paginate ul li,
        .paginate ul li a {
          width: 35px;
          height: 35px;
          background-color: #fff;
          color: #2b2b2b;
          font-weight: 700;
          float: left;
          border-radius: 50%;
          line-height: 35px;
          text-align: center;
          margin: 0px 10px;
          list-style-type: none;
          cursor: pointer;
        }
        .paginate .active {
          background-color: #2b2b2b;
          color: #fff;
        }

        .paginate .next {
          background-image: url(./../../images/arrow-down.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: 15px;
          background-color: #fff;
          transform: rotate(-90deg);
        }
        .paginate .previous {
          background-image: url(./../../images/left.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: 15px;
          background-color: #fff;
        }

        .pagination ul li:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default SearchList;
