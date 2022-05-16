import React from 'react'
import movie1 from '../svg/RecommendedMovies/blackWidow2.png'
import movie2 from '../svg/RecommendedMovies/alita_battle_angel.png'
import movie3 from '../svg/RecommendedMovies/freedom2.png'
import movie4 from '../svg/RecommendedMovies/kingsoffuture2.png'
import movie5 from '../svg/RecommendedMovies/lesmiserables2.png'
import movie6 from '../svg/RecommendedMovies/nightingale.png'
import movie7 from '../svg/RecommendedMovies/thegrey2.png'
import { Link } from 'react-router-dom'

function RecommendedMovie() {
    return (
        <>
            <h2>Recommended Movie for you</h2>
            <div className="scrolling-wrapper" style={{ margin: "2% 2%" }}>

                <div className="card" style={{ width: "18rem", border: "none" }}>
                    {/* <div className="card-body"> */}
                    {/* <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example </p> */}
                    {/* <button href="#" className="card-link">Card link</button>
                        <button href="#" className="card-link">Another link</button> */}
                    {/* <button onClick={()=>window.open('https://drive.google.com/file/d/1aLfEJXbJhmlc4REoPhk6kbPiXH6HSMOB/view?usp=sharing','_self')}> */}
                        <Link to="">
                            <img onClick={()=>window.open('https://drive.google.com/file/d/1aLfEJXbJhmlc4REoPhk6kbPiXH6HSMOB/view?usp=sharing','_self')} src={movie1} style={{ width: "100%" }} alt="..." /></Link>
                    {/* </button> */}
                    {/* </div> */}
                </div>
                <div className="card" style={{ width: "18rem", border: "none" }}>
                    {/* <div className="card-body"> */}
                    {/* <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example </p> */}
                    {/* <button href="#" className="card-link">Card link</button>
                        <button href="#" className="card-link">Another link</button> */}
                    <Link to="">
                            <img onClick={()=>window.open('https://drive.google.com/file/d/1aLfEJXbJhmlc4REoPhk6kbPiXH6HSMOB/view?usp=sharing','_self')} src={movie2} style={{ width: "100%" }} alt="..." /></Link>
                    {/* </div> */}
                </div>
                <div className="card" style={{ width: "18rem", border: "none" }}>
                    {/* <div className="card-body"> */}
                    {/* <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example </p> */}
                    {/* <button href="#" className="card-link">Card link</button>
                        <button href="#" className="card-link">Another link</button> */}
                    <Link to="">
                            <img onClick={()=>window.open('https://drive.google.com/file/d/1aLfEJXbJhmlc4REoPhk6kbPiXH6HSMOB/view?usp=sharing','_self')} src={movie3} style={{ width: "100%" }} alt="..." /></Link>
                    {/* </div> */}
                </div>
                <div className="card" style={{ width: "18rem", border: "none" }}>
                    {/* <div className="card-body"> */}
                    {/* <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example </p> */}
                    {/* <button href="#" className="card-link">Card link</button>
                        <button href="#" className="card-link">Another link</button> */}
                    <Link to="">
                            <img onClick={()=>window.open('https://drive.google.com/file/d/1aLfEJXbJhmlc4REoPhk6kbPiXH6HSMOB/view?usp=sharing','_self')} src={movie4} style={{ width: "100%" }} alt="..." /></Link>
                    {/* </div> */}
                </div>
                <div className="card" style={{ width: "18rem", border: "none" }}>
                    {/* <div className="card-body"> */}
                    {/* <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example </p> */}
                    {/* <button href="#" className="card-link">Card link</button>
                        <button href="#" className="card-link">Another link</button> */}
                    <Link to="">
                            <img onClick={()=>window.open('https://drive.google.com/file/d/1aLfEJXbJhmlc4REoPhk6kbPiXH6HSMOB/view?usp=sharing','_self')} src={movie5} style={{ width: "100%" }} alt="..." /></Link>
                    {/* </div> */}
                </div>
                <div className="card" style={{ width: "18rem", border: "none" }}>
                    {/* <div className="card-body"> */}
                    {/* <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example </p> */}
                    {/* <button href="#" className="card-link">Card link</button>
                        <button href="#" className="card-link">Another link</button> */}
                    <Link to="">
                            <img onClick={()=>window.open('https://drive.google.com/file/d/1aLfEJXbJhmlc4REoPhk6kbPiXH6HSMOB/view?usp=sharing','_self')} src={movie6} style={{ width: "100%" }} alt="..." /></Link>
                    {/* </div> */}
                </div>
                <div className="card" style={{ width: "18rem", border: "none" }}>
                    {/* <div className="card-body"> */}
                    {/* <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example </p> */}
                    {/* <button href="#" className="card-link">Card link</button>
                        <button href="#" className="card-link">Another link</button> */}
                    <Link to="">
                            <img onClick={()=>window.open('https://drive.google.com/file/d/1aLfEJXbJhmlc4REoPhk6kbPiXH6HSMOB/view?usp=sharing','_self')} src={movie7} style={{ width: "100%" }} alt="..." /></Link>
                    {/* </div> */}
                </div>
                



            </div>
        </>
    )
}

export default RecommendedMovie