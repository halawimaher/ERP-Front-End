import React from 'react'
import './DashBoard.css'
function DashBoard() {
     return (
          <div className="sidebar">
               <div className="codi-team">
                    <img className="logo" src={require("../assets/images/mnmlogo.jpeg").default} alt="team logo"></img>
                    <p>MnM Software Solutions</p>
               </div>
               <div className="logged-in-user">
                    <div className="avatar">
                         <img className="user-avatar" src={require("../assets/images/avatar.webp").default} alt="user icon"></img>
                    </div>
                    <div className="user-details">
                         <p className="user-text">Logged in as:</p>
                         <p className="user-text" style={{ color: "cyan" }}>Maher</p>
                    </div>
               </div>
               <div className="side-bar">
                    <nav className="nav-bar">
                         <ul className="nav-menu">
                              <li className="nav-items"><a href="/" className="nav-links">Dashboard</a></li>
                              <li className="nav-items"><a href="/" className="nav-links">Staff</a></li>
                              <li className="nav-items"><a href="/" className="nav-links">Teams</a></li>
                              <li className="nav-items"><a href="/" className="nav-links">Projects</a></li>
                              <li className="nav-items"><a href="/" className="nav-links">KPIs</a></li>
                              <li className="nav-items"><a href="/" className="nav-links">Reports</a></li>
                         </ul>
                    </nav>
               </div>
          </div>
     )
}

export default DashBoard
