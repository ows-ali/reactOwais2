import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// set up cookies
const cookies = new Cookies();
const Logout = () => {
  const history = useNavigate();

  useEffect(() => {
    cookies.remove("authToken");
    cookies.remove("connect.sid");
    localStorage.setItem("firstName", "");
    localStorage.setItem("lastName", "");
    localStorage.setItem("nanoId", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("username", "");
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("token", "");
    localStorage.clear();
    history("/");
  },[]);
  return <div></div>;
};

export default Logout;
