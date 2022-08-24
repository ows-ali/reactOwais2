import { Link } from "react-router-dom";

const Question1 = () => {
  return (
    <>
      <div className="wrap">
        <form id="formOne" action="">
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
            <h2>您需要什麼幫助？</h2>
            <div class="btnGroup">
              <button type="submit" className="btn">
                大學
              </button>
              <button type="submit" className="btn">
                學校
              </button>
              <button type="submit" className="btn">
                一般課程
              </button>
              <button type="submit" className="btn">
                語言
              </button>
              <button type="submit" className="btn">
                樂器
              </button>
            </div>
            <div className="bottomBtn">
              <button className="btn-cancel">
                <Link to="/dashboard">取消</Link>
              </button>
            </div>

            <input
              type="email"
              style={{ display: "none" }}
              id="email"
              value="<%=local.user.email%>"
            />
          </section>
        </form>
      </div>
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
          background: #a5ce0f;
          padding-bottom: 60px;
          padding-top: 60px;
        }

        .wrap .questionCard {
          width: 495px;
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

        .btn,
        .active,
        button {
          padding: 12px 20px;
          height: 50px;
          font-weight: 900;
          background: #fff;
          color: #2b2b2b;
          margin-bottom: 20px;
          border: none;
          outline: none;
          border-radius: 0px;
          cursor: pointer;
          font-size: 16px;
          -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .wrap .questionCard > figure {
          width: 200px;
          margin-bottom: 40px;
        }

        .wrap .questionCard > figure > a {
          display: block;
        }

        .wrap .questionCard h2 {
          font-family: "Noto Sans TC", sans-serif;
          text-align: center;
          font-weight: 800;
          font-size: 22px;
          width: 100%;
          margin: 0px auto 24px;
          padding-top: 8px;
          padding-bottom: 8px;
          color: #2b2b2b;
        }

        .wrap .questionCard .btnGroup {
          width: 90%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }

        .wrap .questionCard .btnGroup > button:hover {
          background: #a5ce0f;
          color: #fff;
        }

        .wrap .questionCard .btnGroup > button:active {
          background: #a5ce0f;
          color: #fff;
          border: none;
          outline: none;
        }
        .wrap .questionCard .btnGroup > button:focus {
          background: #a5ce0f;
          color: #fff;
          border: none;
          outline: none;
        }

        .bottomBtn {
          display: flex;
          display: -webkit-flex;
          width: 100%;
          justify-content: space-around;
        }
        .btn-cancel {
          position: relative;
          background-color: #e40000;
          color: white;
          cursor: pointer;
          font-weight: 800;
          width: 200px;
          height: 50px;
          line-height: 50px;
          outline: none;
          font-size: 20px;
          border-radius: 4px;
          padding: 0;
          margin-top: 20px;
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .btn-cancel:focus,
        .btn-cancel:active {
          outline: none;
          border: none;
        }
        .btn-cancel a {
          color: white;
          font-weight: 800;
          width: 100%;
          height: 100%;
          font-family: "Noto Sans TC", sans-serif;
          position: relative;
          display: block;
        }

        @media only screen and (min-width: 768px) {
          .wrap .questionCard {
            width: 710px;
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Question1;
