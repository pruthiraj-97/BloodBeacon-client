'use client'
import '@/componentCSS/userBloodBank.css'
import React from "react";
import { useState,useEffect } from "react";
import {useRouter} from 'next/navigation'
import { useSearchParams } from "next/navigation";
import UserBloodGroup from '@/components/userBloodGroup';
function BloodBank({params}){
    const router=useRouter()
    const searchParams=useSearchParams()
    const [bloodbankObj, setBloodbankObj] = useState(null);
    const [distance, setDistance] = useState(null);
    useEffect(()=>{
      const bloodBankParam=JSON.parse(decodeURIComponent(searchParams.get('bloodbank')))
      const distanceParam=searchParams.get('distance')
      setBloodbankObj(bloodBankParam)
      setDistance(distanceParam)
    },[])
    if(!bloodbankObj){
        return (
          <h6>loding...</h6>
        )
    }
    return (
        <>
        <div className="bloodbank-container">
        <h3>{bloodbankObj.name}</h3>
        <p>Contact Number: {bloodbankObj.contactNumber}</p>
        <p>Email: {bloodbankObj.email}</p>
        <p>State: {bloodbankObj.address.state}</p>
        <p>Region: {bloodbankObj.address.region}</p>
        <p>Country: {bloodbankObj.address.country}</p>
        <p>Distance: {distance} km</p>
        <div className='blood-groups'>
          {Object.entries(bloodbankObj.bloodGroups).map(([group, count]) => (
           <UserBloodGroup key={group} group={group} count={count} id={bloodbankObj._id}/>
          ))
         }
    </div>
    </div>
        </>
    )
}
export default BloodBank