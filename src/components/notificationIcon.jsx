'use client'
import React from "react";
import { FaBell } from 'react-icons/fa';
import { useRouter } from "next/navigation";
function NotificationIcon(){
    const router=useRouter()
    return (
        <FaBell className="icon"
           onClick={(e)=>router.push(`/profile/notification`)}
        />
    )
}
export default NotificationIcon