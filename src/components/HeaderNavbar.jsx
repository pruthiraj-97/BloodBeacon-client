'use client'
import React from "react";
import Link from "next/link";
import '@/componentCSS/HeaderNavbar.css'
import { useState,useEffect } from "react";
import { WEB_LOGO, PROFILE_LOGO } from "@/dataControl/imageUrls";
import { IoNotificationsSharp } from "react-icons/io5";
function HeaderNavbar(){
    const [profileDropdown, setProfileDropdown] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar-logo">
              <img src={WEB_LOGO} alt="Profile Logo" />
            </div>
            <div className="navbar-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/connect">Connect with BloodBank</Link>
            </div>
            <div className="navbar-icons">
                <IoNotificationsSharp className="navbar-icon" />
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
    );
}
export default HeaderNavbar