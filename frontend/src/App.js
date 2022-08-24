import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

//Screens
import Home from "./screens/Home";
import Fourzerofour from "./screens/Custom404";
import Privacy from "./screens/Privacy";
import TermsAndConditions from "./screens/TermsAndConditions";
import Security from "./screens/Security";
import SearchList from "./screens/SearchList";
import FindTutor from "./screens/FindTutor";
import BecomeTutor from "./screens/BecomeTutor";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import Logout from "./screens/Logout";
import Signup from "./screens/Signup";
import Allusers from "./screens/Allusers";
import Question1 from "./screens/Question1";

//Components

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, [pathname]);
    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Fourzerofour />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/security" element={<Security />} />
        <Route path="/searchlist" element={<SearchList />} />
        <Route path="/becomeTutor" element={<BecomeTutor />} />
        <Route path="/findTutor" element={<FindTutor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/allusers" element={<Allusers />} />
        <Route path="/question1" element={<Question1 />} />
      </Routes>
    </Router>
  );
}

export default App;
