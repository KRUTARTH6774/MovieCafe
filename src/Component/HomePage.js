import React from 'react'
import batman from '../svg/batman.png'
import drStrange from '../svg/drStrange.jpeg'
import kgf2 from '../svg/kgf2.png'
import morbious1 from '../svg/morbious1.png'
import ContinueWatching from './ContinueWatching'
import './Homepage.css'
import NavBar from './NavBar'
import PopularReleases from './PopularReleases'
import RecommendedMovie from './RecommendedMovie'
import SeriesYoullLove from './SeriesYoullLove'
function HomePage({signoutUser}) {
  // if(document.getElementById("mySidebar").style.display === "none"){
  //   document.getElementsByClassName("carousel-control-next").style.zIndex === "2";
  // }
  // else{
  //   document.getElementsByClassName("carousel-control-next").style.zIndex === "-1";
  // }
  return (
    <div className="homepage">

      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" >
        <NavBar signoutUser={signoutUser}/>
        <div className="carousel-indicators" style={{zIndex:"1"}}>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={drStrange} className="d-block w-100" style={{ marginBottom: "-20%" }} alt="..." />
            <div className="carousel-caption d-none d-md-block fs-2">
              <h5>Doctor Strange in the Multiverse of Madness</h5>
              {/* <p>2022 ‧ Adventure/Action ‧ 2h 6m</p> */}
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={kgf2} className="d-block w-100" style={{ marginBottom: "-20%" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>K.G.F. 2</h5>
              <p>2022 ‧ Action/Drama </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={batman} className="d-block w-100" style={{ marginBottom: "-20%" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>The Batman</h5>
              <p>2022 ‧ Action/Adventure</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={morbious1} className="d-block w-100" style={{ marginBottom: "-20%" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Morbius</h5>
              <p>2022 ‧ Action/Adventure</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{ top: "10vh", bottom: "0vh" }}>
          {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{ top: "10vh", bottom: "0vh",zIndex:"1" }}>
          {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
          <span className="visually-hidden">Next</span>
        </button>

      </div>

      <ContinueWatching />

      <RecommendedMovie />

      <PopularReleases />

      {/* <SeriesYoullLove /> */}


      {/* <h6>Bootstrap 4 horizontally scrollable card groups</h6> */}
      {/* <div className="d-flex flex-row flex-nowrap">
        <div className="card card-block mx-2" style={{ minWidth: "300px" }}>Card</div>
        <div className="card card-block mx-2" style={{ minWidth: "300px" }}>Card</div>
        <div className="card card-block mx-2" style={{ minWidth: "300px" }}>Card</div>
        <div className="card card-block mx-2" style={{ minWidth: "300px" }}>Card</div>
        <div className="card card-block mx-2" style={{ minWidth: "300px" }}>Card</div>
        <div className="card card-block mx-2" style={{ minWidth: "300px" }}>Card</div>
        <div className="card card-block mx-2" style={{ minWidth: "300px" }}>Card</div>
        <div className="card card-block mx-2" style={{ minWidth: "300px" }}>Card</div>
      </div> */}

    </div>
  )
}

export default HomePage