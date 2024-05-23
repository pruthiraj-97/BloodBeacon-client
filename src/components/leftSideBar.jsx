'use client'
import React from "react";
import Link from "next/link";
import '@/componentCSS/sidebar.css'
import { WEB_LOGO } from "@/dataControl/imageUrls";
import { FaHome, FaInfo, FaHeartbeat, FaUser, FaSignInAlt } from 'react-icons/fa';
function SideBarComponent(){
    return (
        <div className="container">
         <aside className="sidebar">
        <div className="logo">
          <img className="logo-image" src={WEB_LOGO} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <FaHome className="icon" />
              <Link href={`/`} className="sidebar-link">Home</Link>
            </li>
            <li>
              <FaInfo className="icon" />
              <Link href={`/about`} className="sidebar-link">About</Link>
            </li>
            <li>
              <FaHeartbeat className="icon" />
              <Link href={`/bloodbank/searchbloodbank`} 
                className="sidebar-link"
              >BloodBank</Link>
            </li>
            <li>
              <FaUser className="icon" />
              <Link href={`/profile`} className="sidebar-link">Profile</Link>
            </li>
            <li>
            <FaSignInAlt className="icon" />
              <Link href={`/login`} className="sidebar-link">Login</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
    )
}
export default SideBarComponent