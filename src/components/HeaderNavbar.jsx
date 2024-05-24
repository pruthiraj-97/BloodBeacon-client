'use client'
import React from "react";
import Link from "next/link";
import '@/componentCSS/HeaderNavbar.css'
import { useState } from "react";
import { WEB_LOGO, PROFILE_LOGO } from "@/dataControl/imageUrls";
import { FaBars } from 'react-icons/fa';
import NotificationIcon from "./notificationIcon";
import SideBarComponent from "./leftSideBar";
function HeaderNavbar(){
    const [profileDropdown, setProfileDropdown] = useState(false);
    const[isSideBar,SetIsSideBar]=useState(false)
    function toggleSideBar(){
      SetIsSideBar(!isSideBar)
    }
    return (
        <>
          <div className="side-bar-div">
          <FaBars className="sidebar-icon"
             onClick={toggleSideBar}
          />
          <h4>Wellcome to BloogBeacon</h4>
           <NotificationIcon/>
          </div>
          {
            isSideBar?<SideBarComponent/>:""  
          }
        <div className="navbar">
            <div className="navbar-logo">
              <img src={WEB_LOGO} alt="Profile Logo" />
            </div>
            <h3 className="web-name">Blood Beacon</h3>
           <div className="navbar-container">
           <div className="navbar-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/bloodbank/searchbloodbank">Near BloodBank</Link>
            </div>
            <div className="navbar-icons">
                <NotificationIcon/>
                <div className="profile-menu">
                    <img src={PROFILE_LOGO} 
                      onClick={() => setProfileDropdown(!profileDropdown)}
                    alt="Profile" className="profile-logo" />
                    {profileDropdown && (
                        <div className="profile-dropdown">
                            <Link href="/profile">Profile</Link>
                            <Link href="/login">Login</Link>
                            <Link href="/signup">Signup</Link>
                        </div>
                    )}
                </div>
            </div>
           </div>
        </div>
        </>
    );
}
export default HeaderNavbar