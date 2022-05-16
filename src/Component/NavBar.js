import React from 'react'
import account_circle from '../svg/account_circle.svg'
import logo from '../svg/logo.svg'
import mic from '../svg/mic.svg'
import search from '../svg/search.svg'
import { AiOutlineClose } from 'react-icons/ai'
import './Homepage.css'
function NavBar({ signoutUser }) {
    const w3_open = () => {
        // document.getElementById("mySidebar").style.display = "block";
        // document.getElementById("sidebarButton").style.display = "none";
        document.getElementById("content").style.zIndex = "2";
        document.getElementById("content").style.height = "20rem";
        document.getElementById("content").style.width = "200px";
        document.getElementById("content").style.transition = "height 300ms,width 300ms";
        document.getElementById("sidebarButton").style.height = "0vh";
        document.getElementById("sidebarButton").style.transition = "height 300ms,transform 550s";
    }

    const w3_close = () => {
        // document.getElementById("mySidebar").style.display = "none";
        // document.getElementById("sidebarButton").style.display = "flex";
        document.getElementById("sidebarButton").style.height = "9vh";
        document.getElementById("content").style.zIndex = "0";
        document.getElementById("content").style.height = "0vh";
        document.getElementById("content").style.width = "0px";
        // document.getElementById("content").style.transition = "height 550ms,width 550ms";
    }
    return (
        <>
            <div id="sidebarButton">
                <img src={logo} style={{ marginBottom: "0%" }} alt="..." />
                <div className="searchBar">
                    <input type="text" placeholder='Search' />
                    <div className="ms">
                        <img src={search} style={{ marginBottom: "0%", width: "5vh" }} alt="..." />
                        <img src={mic} style={{ marginBottom: "0%", width: "5vh" }} alt="..." />
                    </div>
                </div>
                <div className="profile" style={{display:"flex"}} >
                    <h4 >Person 1</h4>
                    <button className="account-b" onClick={() => w3_open()}>
                        <img src={account_circle} style={{ marginBottom: "0%" }} alt="..." />
                    </button>
                </div>
            </div>
            <div id="mySidebar" style={{ display: "block" }}>
                <div className="w3-sidebar w3-bar-block w3-collapse" id='content' style={{ height: "0vh", width: "0px", right: "0", zIndex: "2" }} >
                    <div className='container'>
                        <button id="close" className="btn" style={{ marginLeft: "9rem" }}
                            onClick={() => w3_close()}><AiOutlineClose size="1.5rem" /></button>
                        {/* <button ><AiOutlineClose/></button> */}
                        <button href="#" class="w3-bar-item w3-button">Change Profile</button>
                        <button href="#" class="w3-bar-item w3-button">Your Favourites</button>
                        <button href="#" class="w3-bar-item w3-button">Your Watchlist</button>
                        <button href="#" class="w3-bar-item w3-button">Your Downloads</button>
                        <button href="#" class="w3-bar-item w3-button">Settings</button>
                        <button onClick={signoutUser} style={{ color: "red" }} class="w3-bar-item w3-button">Logout</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar