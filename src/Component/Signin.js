import React from 'react'
import signup from '../Signup.png'
import { Link } from 'react-router-dom'
function Signin() {
  return (
    <>
      <img src={signup} alt="signup" style={{ width: "100vw", height: "100vh" }} />
      {/* <div style={{
          color: "red",
          textAlign: "center",
          fontSize: "80px",
          marginTop: "-30%"
        }}> */}

      <div class="container" style={{
        marginTop: "-43%"
      }}>
        <form class="well form-horizontal" action=" " method="post" id="contact_form">
          <div class="block" style={{
            position: "fixed",
            top: "35vh",
            left: "22vw",
            width: "56vw"
          }}>
            <div class="form-group" style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input name="first_name" placeholder="Name" class="form-control" type="text" />
                </div>
              </div>
            </div>

            <div class="form-group" style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                  <input name="email" placeholder="movie@cafe.com" class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="form-group" style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input name="user_password" placeholder="Password" class="form-control" type="password" />
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
                  <input name="contact_no" placeholder="+91 XXXXX-XXXXX" class="form-control" type="text" />
                </div>
              </div>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <button type="submit" class="btn btn-primary">Sign in</button>
              <Link to="/"><button type="button" class="btn btn-primary">Go Back</button></Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signin