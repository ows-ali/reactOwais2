import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import {   useNavigate, } from "react-router-dom";

const Allusers = () => {
  let navigate = useNavigate();

  useEffect(() => {

    // if a user is logged in 
    // step 1. send request to server (using cookies), nd check if logged in or not - and keep it in localstorage if logged in or not
    // step 2. conditional rendering

    //you can replace below condition. instead of checking from localstorage, you can get the status/token from Context or Redux
    
    let status =  localStorage.getItem("isLoggedIn")
    // alert(localStorage.getItem("isLoggedIn"))
    console.log('islogged in ', status )
    if (JSON.parse(localStorage.getItem("isLoggedIn")) != true)
    // if (constextState.isLoggedIn != true)
    {
      navigate('/')
      return 
    }

    setUserId(localStorage.getItem("userId"));

    const options = {
      url: "http://localhost:4000/api/users/allusersdummy/" +      localStorage.getItem("userId"),
      method: 'GET', // in capital
      headers: {
        'Authorization': "Bearer mytokenherefromlocalstorage" ,
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        name: 'David',
        age: 45
      }
    };
    axios(options)
    .then(response => {
      console.log(response.status);
    })
    .catch(err=>{
      console.log('err', err)
    });

    const options2 = {
      url: "http://localhost:4000/api/users/allusersdummypost/" +      localStorage.getItem("userId"),
      method: 'POST',
      headers: {
        'Authorization': "Bearer mytokenherefromlocalstorage",
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        name: 'David',
        age: 45
      }
    };
    axios(options2)
    .then(response => {
      console.log(response.status);
    })
    .catch(err=>{
      console.log('err', err)
    });



    // always write a catch block
    axios
      .get(
        "http://localhost:4000/api/users/allusers/" +
          localStorage.getItem("userId")
      )
      .then((response) => {
        if (response.status === 200) {
          setUserInfo(response.data);
        }
      });


  }, []);

  const [userInfo, setUserInfo] = useState({});
  const [userId, setUserId] = useState("");
  const [updateNote, setUpdateNote] = useState(false);

  useEffect(() => {}, [updateNote]);

  // ============ GENDER (Disable and enable submit) =========

  const [showGender, setShowGender] = useState(false);
  const handleShowGender = () => {
    setShowGender(false);
  };
  const handleSetGender = (e) => {
    const innerHTML = e.target.innerHTML;
    setUserInfo({ ...userInfo, gender: innerHTML });
  };

  // ========== SURVEY (Disable and enable submit) ===========
  const [showSurvey, setShowSurvey] = useState(false);
  const handleShowSurvey = () => {
    setShowSurvey(false);
  };
  const handleSetSurvey = (e) => {
    const innerHTML = e.target.innerHTML;
    setUserInfo({ ...userInfo, survey: innerHTML });
  };

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // ========== ALERT MESSAGE ===============
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  function outPutErrorMessagesInAllusers(errorMessage) {
    setAlert(true);
    window.scrollTo({
      top: 30,
      behavior: "smooth",
    });
    setAlertMsg(errorMessage);
  }

  // ============ HIGHLIGHT ADDRESS SEARCH FIELD ==========
  var has_focus = false;
  $("#search").click(function (e) {
    if (!has_focus) {
      $(this).select();
      has_focus = true;
    }
  });

  $("#search").blur(function (e) {
    has_focus = false;
  });

  //==== ID PHOTO (disable and enable save photo button) ====
  const [savePhoto, setSavePhoto] = useState(false);

  function imageUploadActivateButton() {
    setSavePhoto(true);
  }

  // =============== UPLOAD PHOTO ===============
  const [previewImage, setPreviewImage] = useState(false);
  const [previewText, setPreviewText] = useState(false);
  const [imageFacebook, setImageFacebook] = useState(false);
  const [imageHere, setImageHere] = useState("");

  const imageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      setPreviewText(true);
      setImageFacebook(true);
      setPreviewImage(true);
      reader.onload = function (event) {
        setImageHere(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // ======= PUT REQUEST TO UPDATE TO AUTH.JS ======
  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/users/allusers", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        survey: userInfo.survey,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        phone: userInfo.phone,
        nationalId: userInfo.nationalId,
        gender: userInfo.gender,
        birth: userInfo.birth,
        email: userInfo.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.invalid) {
          outPutErrorMessagesInAllusers(data.invalid);
        } else {
          setUpdateNote(true);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setTimeout(function () {
            setUpdateNote(false);
          }, 4000);
          const alert = document.querySelector(".alert");
          alert.removeAttribute("class", "alert");
          alert.innerHTML = "";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ============= INCOMPLETE PROFILE ALERT CARD =============

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [survey, setSurvey] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [nationalId, setNationalId] = useState("");

  // =========== BACKDROP ============//

  const [backdrop, setBackdrop] = useState(true);
  const [alertBanner, setAlertBanner] = useState(true);

  return (
    <>
      <Helmet>
        <title>愛課網</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <meta name="description" content="愛課網" />
      </Helmet>
      <LoggedInNavbar />

      {userInfo.survey === "" ||
      userInfo.gender === "" ||
      userInfo.phone === "" ||
      userInfo.nationalId === "" ||
      userInfo.birth === "" ? (
        <>
          {backdrop && alertBanner ? (
            <>
              <div className="backdrop"></div>
              <div className="alertCard">
                <img
                  onClick={() => {
                    setBackdrop(false);
                    setAlertBanner(false);
                  }}
                  src="/images/cross-black.png"
                  alt=""
                />
                <h3>愛課網使用前說明</h3>
                <p>
                  請填寫所有綠色標示的必填空白欄位.
                  <img
                    style={{ width: "390px", marginLeft: "20px" }}
                    src="/images/nationalId.png"
                    alt=""
                  />
                </p>
                <br />
                <p>
                  填寫完畢後, 請點擊頁面下方的「儲存」鍵.
                  <img
                    style={{ width: "200px", marginLeft: "20px" }}
                    src="/images/save_button.png"
                    alt=""
                  />
                </p>
                <br />
                <p>必填欄位填寫完畢後, 將可以啟用愛課網全功能之平台.</p>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      <div className="wrap">
        <div className="personContent">
          {updateNote ? (
            <section className="updateNote container-fluid">
              <div className="container-fluid ">
                <img src="/images/tick.png" width="12px" />
                <span>儲存完畢</span>
              </div>
            </section>
          ) : null}
        </div>

        <form
          id="formZero"
          action="http://localhost:4000/upload"
          method="POST"
          enctype="multipart/form-data"
        >
          <div className="personContent">
            <section className="questionCard container-fluid">
              <h2>頭像照片</h2>
              <div className="container-fluid regCon">
                <div className="bigHead">
                  <figure id="imagePreview">
                    <div id="bin">
                      <input
                        type="submit"
                        id="embedBin"
                        style={{ visibility: "hidden" }}
                      />
                    </div>
                    {imageFacebook ? (
                      ""
                    ) : (
                      <img
                        src=""
                        alt=""
                        name="image-File"
                        id="image-facebook"
                      />
                    )}
                    {previewImage ? (
                      <img
                        src={imageHere}
                        alt=""
                        name="imageFile"
                        id="image-preview"
                      />
                    ) : (
                      ""
                    )}

                    {previewText ? "" : <span id="text-preview"></span>}
                  </figure>
                  <div className="rp">
                    <span className="ex">
                      可接受 JPG, JPEG, PNG 和 GIF 檔. 最大檔案限制需小於:
                      600kb.
                    </span>{" "}
                    <br />
                    <div className="buttonsEven">
                      <label htmlFor="photoUpload" className="upload-btn">
                        上傳照片
                      </label>
                      <input
                        type="file"
                        accept="image/gif, image/jpeg, image/jpg, image/png"
                        className="form-control-file headUp"
                        id="photoUpload"
                        onChange={(event) => {
                          imageUpload(event);
                          imageUploadActivateButton();
                        }}
                        name="gameFile"
                      />

                      {savePhoto ? (
                        <button
                          style={{
                            backgroundColor: "#a5ce0f",
                            cursor: "pointer",
                            color: "#fff",
                            border: "1px solid #a5ce0f",
                          }}
                          type="submit"
                          id="savePhoto"
                        >
                          儲存照片
                        </button>
                      ) : (
                        <button type="submit" disabled id="savePhoto">
                          儲存照片
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
        <form id="formOne" onSubmit={onSubmit}>
          <div className="personContent">
            <section className="middleQuestionCard container-fluid">
              <h2>基本資料</h2>
              <div className="container-fluid regCon">
                <div className="errorMessageHere">
                  {alert ? (
                    <div className="alert">
                      <img
                        src="/images/cross-black.png"
                        style={{ width: "12px" }}
                      />
                      <span
                        dangerouslySetInnerHTML={{ __html: alertMsg }}
                      ></span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label
                        htmlFor="lastName"
                        className="col-sm-3 col-form-label"
                      >
                        姓氏
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          required
                          className="form-control-lg"
                          id="lastName"
                          name="lastName"
                          autoComplete="off"
                          value={userInfo.lastName ? userInfo.lastName : ""}
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="firstName"
                        className="col-sm-3 col-form-label"
                      >
                        名字
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          required
                          className="form-control-lg"
                          id="firstName"
                          name="firstName"
                          autoComplete="none"
                          value={userInfo.firstName ? userInfo.firstName : ""}
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="email"
                        className="col-sm-3 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control-lg"
                          id="email"
                          disabled
                          value={userInfo.email}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="phone"
                        className="col-sm-3 col-form-label"
                      >
                        行動電話
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          required
                          className="form-control-lg"
                          autoComplete="nope"
                          maxLength="10"
                          minLength="10"
                          placeholder="例如：0938 666 888"
                          value={userInfo.phone ? userInfo.phone : ""}
                          id="phone"
                          name="phone"
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group row">
                      <label
                        htmlFor="nationalId"
                        className="col-sm-3 col-form-label"
                      >
                        身分證字號
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          required
                          className="form-control-lg"
                          id="nationalId"
                          name="nationalId"
                          autoComplete="nope"
                          maxLength="10"
                          value={userInfo.nationalId ? userInfo.nationalId : ""}
                          placeholder="例如：E123456789"
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="gender"
                        className="col-sm-3 col-form-label"
                      >
                        性別
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          required
                          className="form-control-lg"
                          id="gender"
                          name="gender"
                          autoComplete="off"
                          value={userInfo.gender ? userInfo.gender : ""}
                          onFocus={() => setShowGender(true)}
                        />
                        {showGender && (
                          <div className="genderList">
                            <ul>
                              <li
                                onClick={(e) => {
                                  handleSetGender(e);
                                  handleShowGender();
                                }}
                              >
                                男
                              </li>
                              <li
                                onClick={(e) => {
                                  handleSetGender(e);
                                  handleShowGender();
                                }}
                              >
                                女
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="birth"
                        className="col-sm-3 col-form-label"
                      >
                        出生日期
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="date"
                          required
                          className="form-control-lg"
                          id="birth"
                          name="birth"
                          autoComplete="off"
                          value={userInfo.birth ? userInfo.birth : ""}
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="survey"
                        className="col-sm-3 col-form-label"
                      >
                        問卷調查
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          required
                          className="form-control-lg"
                          id="survey"
                          name="survey"
                          autoComplete="off"
                          value={userInfo.survey ? userInfo.survey : ""}
                          onFocus={() => setShowSurvey(true)}
                        />
                        {showSurvey && (
                          <div className="surveyList">
                            <ul>
                              <li
                                onClick={(e) => {
                                  handleSetSurvey(e);
                                  handleShowSurvey();
                                }}
                              >
                                搜索引擎
                              </li>
                              <li
                                onClick={(e) => {
                                  handleSetSurvey(e);
                                  handleShowSurvey();
                                }}
                              >
                                廣告刊登
                              </li>
                              <li
                                onClick={(e) => {
                                  handleSetSurvey(e);
                                  handleShowSurvey();
                                }}
                              >
                                Facebook
                              </li>
                              <li
                                onClick={(e) => {
                                  handleSetSurvey(e);
                                  handleShowSurvey();
                                }}
                              >
                                口耳交接
                              </li>
                              <li
                                onClick={(e) => {
                                  handleSetSurvey(e);
                                  handleShowSurvey();
                                }}
                              >
                                其他
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="personContent">
            <section className="bottomQuestionCard container-fluid">
              <h2>居住位置</h2>
              <div className="container-fluid regCon">
                <div className="location">
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="search">
                        搜索您的街道地址，附近的熱門地標或下面的一般區域.
                      </label>

                      <input
                        id="search"
                        required
                        onfocus="myTest(this.id)"
                        type="text"
                        autoComplete="none"
                        className="form-control-lg"
                      />

                      <div className="bottomTips">
                        <p>
                          <b>找不到地址?</b>
                        </p>
                        <span>
                          搜索您的街道或點擊地圖右上角的 <b>「使用當前位置」</b>
                          .
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div id="map"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="personContent">
            <section className="bottomQuestionCard container-fluid">
              <h2>帳號開關</h2>
              <div className="container-fluid regCon">
                <div className="rp">
                  <div className="checkbox-btn">
                    <input type="checkbox" id="ipt_profile_toggle" />
                    <div>
                      <span id="span_slide" className="slidekey"></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="personContent">
            <section className="buttonCard container-fluid">
              {userInfo.lastName &&
              userInfo.firstName &&
              userInfo.nationalId &&
              userInfo.phone &&
              userInfo.birth &&
              userInfo.gender &&
              userInfo.survey ? (
                <input
                  type="submit"
                  id="bottom_submit"
                  className="btn-vori"
                  value="儲存"
                />
              ) : (
                <button disabled>儲存</button>
              )}
            </section>
          </div>
        </form>
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
          padding: 0;
          background-color: #f4f5f6;
        }

        .btn-vori {
          position: relative;
          background-color: #a5ce0f;
          color: #fff;
          border: 1px solid #a5ce0f;
          font-weight: 800;
          width: 150px;
          height: 50px;
          line-height: 50px;
          outline: none;
          font-size: 20px;
          border-radius: 4px;
          padding: 0;
          width: 100%;
          cursor: pointer;
        }

        .buttonCard button {
          position: relative;
          background-color: #ddd;
          color: #888;
          border: 1px solid #ddd;
          font-weight: 800;
          width: 150px;
          height: 50px;
          line-height: 50px;
          outline: none;
          font-size: 20px;
          border-radius: 4px;
          padding: 0;
          width: 100%;
        }

        .regCon {
          width: 85% !important;
          padding: 20px 0;
        }
        .regCon h2 {
          margin-bottom: 20px;
        }
        .regCon .form-group {
          margin-bottom: 25px;
        }

        #notShow {
          display: none;
        }

        @media only screen and (min-width: 768px) {
          .wrap {
            padding-top: 60px;
          }
          .btn-vori {
            width: 200px;
          }
          .buttonCard button {
            width: 200px;
          }
        }

        /* ======== POST-SAVE MESSAGE ========== */
        .wrap .personContent {
          width: 90%;
          margin: 0 auto;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .wrap .updateNote {
          width: 80%;
          background-color: #bff4f2;
          margin-bottom: 8px;
          height: 40px;
          line-height: 40px;
          padding: 0px 15px 0px 28px;
          display: block;
        }
        .wrap .updateNote span {
          margin-left: 5px;
        }

        .wrap .alert {
          background-color: #fcebcd;
          margin: 5px auto 12px;
          padding: 7px;
          width: 80%;
        }

        /* ========= 頭像照片 =========== */
        .wrap .questionCard {
          width: 80%;
          min-height: 270px;
          padding: 30px 20px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          margin-top: 40px;
          border-radius: 0px;
          background: #fff;
        }

        .wrap .questionCard h2 {
          position: absolute;
          transform: translate(0%, -200%);
          font-weight: 800;
          font-size: 24px;
          width: 440px;
          margin-top: 10px;
          padding-top: 8px;
          padding-bottom: 8px;
          margin-bottom: 40px;
          color: #2b2b2b;
        }
        .bigHead {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          width: 85%;
          margin: 0 auto;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #ebebeb;
        }
        .bigHead #savePhoto {
          background-color: #ddd;
          color: #888;
          border: 1px solid #ddd;
          height: 40px;
          margin: 0px auto;
          width: 130px;
        }
        .bigHead #imagePreview {
          width: 150px;
          height: 150px;
          border: 1px solid #ddd;
          margin-top: 15px;
          display: flex;
          justify-content: center;
          background-color: #eee;
          color: #ccc;
          align-items: center;
          overflow: hidden;
          position: relative;
        }
        .bigHead #imagePreview img {
          position: absolute;
          height: 150px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
        }

        .bigHead #bin {
          margin: 4px 0px 0px 1px;
          height: 24px;
          width: 24px;
          cursor: pointer;
          position: relative;
          left: -42%;
          top: -43%;
          border-radius: 2px;
          background-color: #484848;
          background-image: url(./../../Images/bin.png);
          background-position: center;
          background-size: 12px;
          background-repeat: no-repeat;
          z-index: 200;
        }

        .bigHead #bin:hover {
          background-color: #2b2b2b;
          cursor: pointer;
        }

        .bigHead #bin:active,
        .bigHead #bin:focus {
          border: none;
          background-color: #2b2b2b;
        }

        .bigHead .rp {
          margin-left: 50px;
        }
        .bigHead .ex {
          margin-bottom: 16px;
          display: inline-block;
        }

        #photoUpload {
          display: none;
        }
        .upload-btn,
        .photo-btn {
          color: #484848;
          width: 130px;
          height: 40px;
          text-align: center;
          line-height: 36px;
          cursor: pointer;
          border: 2px solid #dadada;
          background-color: white;
        }

        .bigHead .buttonsEven {
          display: flex;
          justifycontent: space-evenly;
          width: 60%;
        }
        .bigHead #savePhoto {
          margin-left: 5px;
        }

        @media screen and (max-width: 768px) {
          .wrap .questionCard {
            margin: 90px 0px 0px;
            width: 100%;
          }

          .bigHead .buttonsEven {
            display: block;
          }
          .bigHead #savePhoto {
            margin-left: 0px;
          }

          .bigHead {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }
          .bigHead > .rp {
            margin: 0 auto;
            text-align: center;
          }
          .bigHead > .rp .headUp {
            padding-left: 40px;
            margin-top: 10px;
          }
          .bigHead > .rp label {
            display: block;
          }
          .bigHead > .rp .ex {
            display: none;
          }
        }

        /* ============= 基本資料 居住位置 ============== */
        .wrap .bottomQuestionCard,
        .wrap .middleQuestionCard {
          width: 80%;
          min-height: 325px;
          padding: 30px 20px;
          margin-top: 90px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          border-radius: 0px;
          background: #fff;
        }

        .wrap .bottomQuestionCard h2,
        .wrap .middleQuestionCard h2 {
          position: absolute;
          font-size: 24px;
          font-weight: 800;
          transform: translate(10%, -260%);
          color: #2b2b2b;
        }
        .wrap .middleQuestionCard {
          min-height: 240px;
        }

        .middleQuestionCard .row {
          position: relative;
          top: 5%;
          width: 100%;
          left: 3%;
        }

        #email:disabled {
          background-color: #ebebeb;
        }
        input[type="text"],
        input[type="date"],
        input[type="tel"],
        input[type="email"] {
          height: 42px;
          border-radius: 0px;
          text-decoration: none;
          outline: none !important;
          background: none;
          border: 2px solid #dadada;
          padding: 12px 15px;
          font-weight: 500;
          width: 100%;
          font-size: 14px;
          color: #2b2b2b;
          font-family: "Noto Sans TC", sans-serif;
        }

        .genderList {
          position: absolute;
          z-index: 2000;
          width: 93%;
          display: block;
        }
        .genderList ul {
          position: relative;
          margin: 0px;
          padding: 0;
          width: 100%;
        }
        .genderList ul li {
          background-color: #f4f5f6;
          text-decoration: none;
          cursor: pointer;
          list-style-type: none;
          display: inline-block;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #dadada;
          border-left: 2px solid #dadada;
          border-right: 2px solid #dadada;
          padding-left: 18px;
          position: relative;
          width: 100%;
        }

        .genderList ul li:hover {
          background-color: white;
          border-left: 3px solid #a5ce0f;
          padding-left: 17px;
        }

        .surveyList {
          position: absolute;
          z-index: 2000;
          width: 94%;
          display: block;
        }
        .surveyList ul {
          position: relative;
          margin: 0px;
          padding: 0;
          width: 100%;
        }
        .surveyList ul li {
          background-color: #f4f5f6;
          text-decoration: none;
          cursor: pointer;
          list-style-type: none;
          display: inline-block;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #dadada;
          border-left: 2px solid #dadada;
          border-right: 2px solid #dadada;
          padding-left: 18px;
          position: relative;
          width: 100%;
        }
        .surveyList ul li:hover {
          background-color: white;
          border-left: 3px solid #a5ce0f;
          padding-left: 17px;
        }
        .wrap .buttonCard {
          width: 80%;
          margin: 30px auto;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          border-radius: 0px;
          background: #fff;
          background-color: #f4f5f6;
        }
        #map {
          width: 100%;
          height: 300px;
        }
        .useCurrentButton {
          background-color: #a5ce0f;
          color: white;
          font-weight: 800;
          width: 150px;
          height: 36px;
          outline: none;
          border: none;
          font-size: 12px;
          cursor: pointer;
        }
        .useCurrentButton:active,
        .useCurrentButton:focus {
          outline: none;
          border: none;
        }

        .regCon .location > p {
          color: #777;
          font-size: 22px;
        }
        .regCon .location .bottomTips span {
          color: #2b2b2b;
          font-size: 14px;
          font-weight: 500;
        }
        .regCon .location .bottomTips p {
          color: #2b2b2b;
          margin: 10px auto;
          font-size: 16px;
          font-weight: 800;
        }

        @media screen and (max-width: 768px) {
          .wrap .bottomQuestionCard,
          .wrap .middleQuestionCard {
            margin: 90px 0px 0px;
            width: 100%;
          }
          .wrap .personContent {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }
          .wrap .buttonCard {
            width: 410px;
            margin: 25px auto;
          }
          .genderList {
            width: 95%;
          }
          .container {
            text-align: center;
          }
        }

        /* ======= INCOMPLETE PROFILE ALERT POP UP ========== */

        .backdrop {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: #3f3f3f;
          z-index: 100;
          opacity: 0.8;
          cursor: auto;
          z-index: 2000;
        }
        .alertCard {
          position: fixed;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          width: 1140px;
          padding: 28px 30px;
          display: -webkit-box;
          display: -ms-flexbox;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-radius: 0px;
          background: rgba(255, 255, 255, 0.9);
          z-index: 2000;
        }
        .alertCard img {
          margin-left: -50%;
          width: 25px;
          cursor: pointer;
        }

        .alertCard h3 {
          color: #333;
          font-size: 42px;
          font-family: "Noto Sans TC", sans-serif;
          font-weight: 900;
          margin-bottom: 40px;
          text-align: center;
        }

        .alertCard p {
          color: #333;
          font-size: 33px;
          font-family: "Noto Sans TC", sans-serif;
          text-align: left;
        }

        @media screen and (max-width: 768px) {
          .alertCard {
            width: 500px;
            margin: 0 auto;
          }
        }

        /* =========== 帳號開關 ========== */
        .checkbox-btn {
          position: relative;
          width: 130px;
          height: 50px;
          background-color: white;
          transform: translate(-2%, -50%);
          border: 3px solid transparent;
          overflow: hidden;
          border-radius: 0px;
        }
        .checkbox-btn input {
          height: 100%;
          width: 100%;
          position: relative;
          cursor: pointer;
          opacity: 0;
          top: 0;
          left: 0;
          z-index: 3;
        }
        .checkbox-btn div {
          top: 0;
          left: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: black;
          border-radius: 4px;
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
        }
        .checkbox-btn div .slidekey {
          position: absolute;
          width: 50px;
          height: 50px;
          top: 0;
          left: 0;
          text-align: center;
          background-color: #000;
          transition: 0.5s ease-in-out 0ms;
        }
        .checkbox-btn input:checked + div .slidekey {
          transform: translateX(76px);
        }
        .checkbox-btn .slidekey:before {
          content: "開放中";
          position: absolute;
          height: 100%;
          width: 76px;
          text-align: center;
          top: 0;
          left: -76px;
          line-height: 47px;
          background-color: #a5ce0f;
          color: white;
          font-size: 14px;
          font-weight: bold;
        }
        .checkbox-btn .slidekey:after {
          content: "關閉中";
          background-color: #2b2b2b;
          color: white;
          position: absolute;
          height: 100%;
          width: 76px;
          text-align: center;
          top: 0;
          right: -76px;
          line-height: 47px;
          font-size: 14px;
          font-weight: bold;
        }

        @media screen and (max-width: 768px) {
          .checkbox-btn {
            transform: translate(0%, 16%);
          }
        }
      `}</style>
    </>
  );
};
export default Allusers;
