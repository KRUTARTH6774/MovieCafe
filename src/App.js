// import Signin from './Component/Signin';
import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from "./Component/ForgetPassword";
import Home from "./Component/Home";
import HomePage from "./Component/HomePage";
import Login from "./Component/Login";
import ResetPassword from "./Component/ResetPassword";
import Signin from './Component/Signin';
import SubmitOtp from "./Component/SubmitOtp";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<Signin />} />
        <Route path="/LogIn" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/request" element={<SubmitOtp />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/in" element={<HomePage  />} />
      </Routes>
    </Router>
  );
}

export default App;
