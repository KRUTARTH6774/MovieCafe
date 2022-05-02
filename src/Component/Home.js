import React from 'react'
import img from '../svg/home.png'
import { Link } from 'react-router-dom' 

function Home() {
  return (
    <>
      <div >
        <img src={img} alt="img" style={{ width: "100vw" }} />
        <h1 style={{
          color: "red",
          textAlign: "center",
          fontSize: "80px",
          marginTop: "-30%"
        }}>
          <Link to="/SignIn"><button type="button" style={{
            padding: "0px 7%",
            fontSize: "50%",
            borderRadius: "122px",
            backgroundColor: "#6cb7fa",
            color: "black"
          }} class="btn btn-primary btn-lg">Let's get started </button></Link>
        </h1>
      </div>
      {/* <Signin/> */}
    </>
  )
}

export default Home