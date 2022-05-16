import React from 'react'
import movie1 from '../svg/continueWatching/Movie1.png'
import movie2 from '../svg/continueWatching/Movie2.png'
import { Link } from 'react-router-dom'
function ContinueWatching() {
  return (
    <>
      <h2>ContinueWatching</h2>
      <div className="scrolling-wrapper" style={{ margin: "2% 2%" }}>
        <div className="card" style={{ width: "30rem", border: "none" }}>
          <Link to="">
            <img onClick={() => window.open('https://drive.google.com/file/d/1DVogu7zPjPG1_GXru7-mM14J_TREvSnW/view?usp=sharing', '_self')} src={movie1} style={{ width: "100%" }} alt="..." />
          </Link>
          {/* </button> */}
          {/* </div> */}



        </div>
        <div className="card" style={{ width: "30rem", border: "none" }}>
          <Link to="">
            <img onClick={() => window.open('https://youtu.be/JKa05nyUmuQ?t=80', '_self')} src={movie2} style={{ width: "100%" }} alt="..." /></Link>
          {/* </button> */}
          {/* </div> */}
        </div>




      </div>
    </>
  )
}

export default ContinueWatching