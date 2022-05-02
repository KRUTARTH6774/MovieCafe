import React from 'react'
import signup from '../svg/Signup.png'
import { Link } from 'react-router-dom'

function ResetPassword() {
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
                            <h1>Reset Password</h1>
                        </div>

                        <div class="form-group" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input name="user_password" style={{ borderRadius: "100px" }} placeholder="New Password" class="form-control" type="password" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group" style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1em"
                        }}>
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input name="user_password" style={{ borderRadius: "100px" }} placeholder="Confirm New Password" class="form-control" type="password" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group" style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <div class="col-md-4" style={{ textAlign: "center" }}>
                                <Link to="/LogIn"><button type="submit" style={{
                                    height: "39px",
                                    borderRadius: "100px",
                                    width: "143px",
                                    marginLeft: "-10vw",
                                    margin: "1em"
                                }} class="btn btn-light">Reset</button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default ResetPassword