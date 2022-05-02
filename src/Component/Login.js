import React, { useState, useEffect } from 'react'
import signup from '../svg/Signup.png'
import { Link, useNavigate } from 'react-router-dom'

function Login({ setIsAuth }) {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (userEmail === "" || userPassword === "") {
            setIsAuth(false);
            alert('fill the data');
        }
        else {
            if (userEmail === "test@test.com" && userPassword === "12345") {
                setUserEmail("");
                setUserPassword("");
                // console.log(userEmail);
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                navigate("/in");
            }
            else {
                setIsAuth(false);
                alert('wrong info');
            }
        }
    }
    useEffect(() => {
        if (window.location.pathname === "/LogIn" && localStorage.getItem("isAuth") === "true") {
            if(window.confirm("Are You sure want to leave this page ?")){
                window.location.reload();
                localStorage.clear();
            }
            else{
                navigate("/in");
            }
        }
    }, [])
    return (
        <>
            <img src={signup} alt="signup" style={{ width: "100vw", height: "100vh" }} />
            <div className="container" style={{
                marginTop: "-43%"
            }}>
                <Link to="/"> <div className="block" style={{
                    position: "absolute",
                    padding: "2%",
                    top: "9.5vh",
                    left: "3.8vw"
                }}>

                </div></Link>
                <form className="well form-horizontal" id="contact_form">
                    <div className="block" style={{
                        position: "fixed",
                        top: "35vh",
                        left: "22vw",
                        width: "56vw"
                    }}>
                        <div style={{
                            position: "fixed",
                            color: "#65AFFF",
                            top: "20vh",
                            left: "40vw",
                            fontFamily: 'Inter'
                        }}>
                            <h1>Log-in to MovieCafe</h1>
                            <h6>enter your details below</h6>
                        </div>

                        <div className="form-group" style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "2em"
                        }}>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                    <input name="email" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} placeholder="movie@cafe.com" style={{ borderRadius: "100px" }} className="form-control" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input name="user_password" style={{ borderRadius: "100px" }} value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} placeholder="Password" className="form-control" type="password" />
                                </div>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1em"
                        }}>
                            <Link to="/ForgetPassword">forget password</Link>
                        </div>

                        <div className="form-group" style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <div className="col-md-4" style={{ textAlign: "center" }}>
                                <button type="submit" className="btn btn-light" style={{
                                    height: "39px",
                                    borderRadius: "100px",
                                    width: "143px",
                                    marginLeft: "-10vw",
                                    margin: "1em"
                                }} onClick={handleLogin} >Log-in</button>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <h5 style={{
                                color: "#ffffff",
                                fontFamily: 'Inter',
                                fontStyle: "normal"
                            }}>New member ? </h5>
                            <Link to="/SignIn">Signin</Link>
                        </div>

                    </div>
                </form>
            </div >
        </>
    )
}

export default Login