import React from 'react'
import signup from '../svg/Signup.png'
import { Link } from 'react-router-dom'
import './SubmitOtp.css'

function SubmitOtp() {
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
                            <h1>Forgot Password</h1>
                            <span>Submit your OTP here</span>
                        </div>

                        <div class="form-group" style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "1em"
                        }}>
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <div class="container height-100 d-flex justify-content-center align-items-center">
                                        <div class="position-relative">
                                            <div class="card p-2 text-center" style={{backgroundColor:"#1b2845",border:"none"}}>
                                                <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> 
                                                <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" /> 
                                                <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" /> 
                                                <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> 
                                                <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> 
                                                <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> 
                                                <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group" style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <div class="col-md-4" style={{ textAlign: "center" }}>
                               <Link to="/reset"> <button type="submit" style={{
                                    height: "39px",
                                    borderRadius: "100px",
                                    width: "143px",
                                    marginLeft: "-10vw",
                                    margin: "1em"
                                }} class="btn btn-light">Submit</button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default SubmitOtp