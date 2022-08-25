import axios from "axios";
import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// set up cookies
const cookies = new Cookies();
const Logout = () => {
  
  // const navigate = useNavigate();
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

    const options = {
      url: "http://localhost:4000/api/users/logout/" ,
      method: 'POST', // in capital
      headers: {
        // 'Authorization': "Bearer mytokenherefromlocalstorage" ,
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
      console.log('logged out')
    })
    .catch(err=>{
      console.log('err', err)
    });

    // you can use navigate 
    history("/");
  },[]);
  return <div></div>;
};

export default Logout;
