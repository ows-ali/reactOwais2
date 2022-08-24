import Footer from "../components/Footer";
import { useState } from "react";
import { Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [springbok, setSpringbok] = useState(false);
  return (
    <>
      <Helmet>
        <title>愛課網</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <meta name="description" content="愛課網" />
      </Helmet>
      <Navbar />
      <div className="wrap">
        <section className="contactUs container-fluid">
          <div className="container">
            <div className="contactTop">
              <h2>聯絡我們</h2>
              <div className="find">
                <p>有興趣找老師嗎?</p>
                <Link to="/#">請完成此詢問回函單</Link>
              </div>
            </div>
            <div className="contactBottom">
              <p>我們的聯繫方式</p>
              <p>
                家教問答 : <span>07 - 552 - 2251</span>
              </p>
              <p>
                EMAIL我們 : <span>hello@acabook.com.tw</span>
              </p>
            </div>
          </div>
        </section>
        <section className="contactForm container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="font-weight-bold mb-4">填寫回函單</h3>
              <form method="POST" action="/sendmail">
                <div className="form-group cusInput">
                  <input
                    className={`form-contact form-contact-lg ${
                      springbok && name !== "" ? "springbok" : ""
                    }`}
                    name="name"
                    type="text"
                    autoComplete="none"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onBlur={() => {
                      setSpringbok(true);
                    }}
                  />
                  <label for="name">您的姓名</label>
                </div>
                <div className="form-group cusInput">
                  <input
                    className={`form-contact form-contact-lg ${
                      springbok && email !== "" ? "springbok" : ""
                    }`}
                    name="email"
                    type="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onBlur={() => {
                      setSpringbok(true);
                    }}
                  />
                  <label for="email">E-mail</label>
                </div>
                <div className="form-group cusInput">
                  <input
                    className={`form-contact form-contact-lg ${
                      springbok && phone !== "" ? "springbok" : ""
                    }`}
                    name="mobile"
                    type="tel"
                    autoComplete="none"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    onBlur={() => {
                      setSpringbok(true);
                    }}
                  />
                  <label for="mobile">行動電話</label>
                </div>
                <div className="form-group">
                  <textarea
                    style={{ whiteSpace: "pre-wrap;" }}
                    className="form-contact"
                    rows="9"
                    name="dropline"
                    placeholder="寫下您的訊息"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  >
                    {message}
                  </textarea>
                </div>
                {name && email && phone && message ? (
                  <input
                    type="submit"
                    className="btn-aca"
                    value="寄給我們吧!"
                  />
                ) : (
                  <button disabled>寄給我們吧!</button>
                )}
              </form>
            </div>
            <div className="contactInfo col-md-6">
              <h3 className="font-weight-bold">關注我們</h3>
              <div className="d-flex align-items-center mb-5">
                <img width="30" src="/images/fb.png" alt="facebook" />
                <Link to="/#">Facebook</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <style jsx>{`
        .wrap .contactUs {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          background: #333;
          height: 600px;
        }
        .wrap .contactUs .contactTop {
          margin-bottom: 30px;
        }
        .wrap .contactUs .contactTop > h2 {
          font-size: 6em;
          color: #fff;
          font-weight: bold;
        }
        .wrap .contactUs .contactTop > .find {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          font-size: 2.8em;
        }
        .wrap .contactUs .contactTop > .find > p {
          font-weight: normal;
          color: #a5ce0f;
          margin-right: 15px;
        }
        .wrap .contactUs .contactTop > .find > a {
          color: #4183c4;
          font-weight: normal;
        }
        .wrap .contactUs .contactBottom {
          color: #fff;
        }
        .wrap .contactUs .contactBottom p:first-child {
          font-size: 1.5em;
        }
        .wrap .contactUs .contactBottom span {
          margin-left: 5px;
          color: #4183c4;
        }
        .wrap .contactUs .contactBottom p {
          font-size: 20px;
          font-weight: 800;
        }

        .wrap .contactForm {
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .wrap .contactForm .contactInfo {
          padding-left: 80px;
        }
        .wrap .contactForm .contactInfo > h3 {
          margin-bottom: 20px;
        }
        .wrap .contactForm .contactInfo > p {
          font-size: 18px;
        }
        .wrap .contactForm .contactInfo a {
          color: #4183c4;
          font-size: 20px;
          margin-left: 5px;
          font-weight: 500;
        }
        .cusInput {
          display: block;
          margin-right: 20px;
          position: relative;
        }
        .cusInput input {
          padding: 15px 10px;
        }
        .cusInput label {
          position: absolute;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          top: 50%;
          font-family: sans-serif;
          font-size: 16px;
          left: 20px;
          color: #2b2b2b;
          pointer-events: none;
          -webkit-transition: all 1500ms ease-in-out 100ms;
          transition: all 1500ms ease-in-out 100ms;
        }
        .cusInput input:focus + label {
          left: 420px;
          font-size: 16px;
        }
        .cusInput input.springbok + label {
          left: 420px;
          font-size: 16px;
          opacity: 0;
        }
        .form-contact {
          display: block;
          width: 100%;
          height: calc(2rem+ 1px);
          padding: 0.375rem 0.75rem;
          font-size: 17px;
          line-height: 1.5;
          color: #2b2b2b;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: 2px;
          appearance: none;
          -webkit-transition: border-color 0.15s ease-in-out,
            -webkit-box-shadow 0.15s ease-in-out;
          transition: border-color 0.15s ease-in-out,
            -webkit-box-shadow 0.15s ease-in-out;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
        }
        .form-contact-lg {
          height: calc(2.35rem+ 2px);
          padding: 0.5rem 1rem;
          font-size: 17px;
          line-height: 1.5;
          border-radius: 2px;
          width: 472px;
          -webkit-appearance: none;
          -moz-appearance: textfield;
          appearance: none;
          outline: none;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"] {
          height: 42px;
          border-radius: 0px;
          text-decoration: none;
          outline: none !important;
          background: none;
          border: 1px solid #e0e0e0;
          padding: 12px 20px;
          font-weight: 500;
          width: 100%;
          font-size: 15px;
          color: #2b2b2b;
          font-family: sans-serif;
          margin-top: 6px;
          background-color: white;
        }
        .form-group textarea {
          display: block;
          width: 100%;
          height: 100%;
          padding: 0.375rem 0.75rem;
          font-size: 16px;
          line-height: 1.5;
          color: #2b2b2b;
          font-weight: 500;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #e0e0e0;
          border-radius: 0px;
          outline: 0;
        }
        .btn-aca {
          font-weight: 800;
          font-size: 20px;
          border-radius: 4px;
          border: none;
          outline: none;
        }
        .btn-aca:focus,
        .btn-aca:active {
          border: none;
          outline: none;
        }
        .btn-aca:hover {
          cursor: pointer;
        }
        button {
          font-weight: 800;
          font-size: 20px;
          border-radius: 4px;
          border: none;
          outline: none;
          background-color: #ddd;
          color: #888;
          cursor: default;
          padding: 10px 30px;
          letter-spacing: 2px;
          min-width: 140px;
        }
      `}</style>
    </>
  );
};

export default Contact;
