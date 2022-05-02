import React from 'react'
import signup from '../svg/Signup.png'
import { Link } from 'react-router-dom'

function ForgetPassword() {
    return (
        <>
            <img src={signup} alt="signup" style={{ width: "100vw", height: "100vh" }} />
            <div class="container" style={{
                marginTop: "-43%"
            }}>
                <Link to="/"> <div className="block" style={{
                    position: "absolute",
                    padding: "2%",
                    top: "9.5vh",
                    left: "3.8vw"
                }}>
                    
                </div></Link>
                <form class="well form-horizontal" id="contact_form">
                    <div class="block" style={{
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
                            <h1>Yo! Forgot Password</h1>
                            <span>No worries! Enter your email and we will send you a reset.</span>
                        </div>

                        <div class="form-group" style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "1em"
                        }}>
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                    <input name="email" placeholder="movie@cafe.com" style={{ borderRadius: "100px" }} class="form-control" type="text" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group" style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <div class="col-md-4" style={{ textAlign: "center" }}>
                                <Link to="/request"><button type="submit" style={{
                                    height: "39px",
                                    borderRadius: "100px",
                                    width: "143px",
                                    marginLeft: "-10vw",
                                    margin: "1em"
                                }} class="btn btn-light">Send Request</button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default ForgetPassword