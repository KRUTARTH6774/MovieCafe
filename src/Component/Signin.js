import React from 'react'
import signup from '../svg/Signup.png'
import { Link } from 'react-router-dom'
function Signin() {
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
              <h1>Sign-in to MovieCafe</h1>
              <h6>enter your details below</h6>
            </div>
            <div class="form-group" style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2em",
              marginTop: "1em"
            }}>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input name="first_name" style={{ borderRadius: "100px" }} placeholder="Name" class="form-control" type="text" />
                </div>
              </div>
            </div>

            <div class="form-group" style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2em"
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
              justifyContent: "center",
              marginBottom: "2em"
            }}>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input name="user_password" style={{ borderRadius: "100px" }} placeholder="Password" class="form-control" type="password" />
                </div>
              </div>
            </div>

            <div class="form-group" style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                  <input name="contact_no" style={{ borderRadius: "100px" }} placeholder="+91 XXXXX-XXXXX" class="form-control" type="text" />
                </div>
              </div>
            </div>

            <div class="form-group" style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <div class="col-md-4" style={{ textAlign: "center" }}>
                <button type="submit" style={{
                  height: "39px",
                  borderRadius: "100px",
                  width: "143px",
                  marginLeft: "-10vw",
                  margin: "1em"
                }} class="btn btn-light">Sign in</button>
              </div>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems :"baseline"
            }}>
              <h5 style={{
                color: "#ffffff",
                fontFamily: 'Inter',
                fontStyle: "normal"
              }}>Already member ? </h5>
              <Link to="/LogIn" style={{color: "#66afff"}}>Login</Link>
            </div>

          </div>
        </form>
      </div >
    </>
  )
}

export default Signin