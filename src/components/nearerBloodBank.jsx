'use client'
import React from "react";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import '../componentCSS/nearbloodbank.css'
function FetchNearBloodBank(){
    const router=useRouter()
    const searchParams = useSearchParams();
    const [nearBloodBank,setNearBloodBank]=useState([])
    const [errors,setErrors]=useState([])
     useEffect(()=>{
       const bloodBanks=JSON.parse(decodeURIComponent(searchParams.get('bloodbanks')))
       setNearBloodBank(bloodBanks)
     },[])

    function navigateToBloodBank(bloodbank,distance){
      return (e)=>{
        e.preventDefault()
        const bloodbankString = encodeURIComponent(JSON.stringify(bloodbank));
        router.push(`/bloodbank/${bloodbank._id}?bloodbank=${bloodbankString}&distance=${distance}`);
      }
    }

    return (
      <div className="near-blood-bank">
      <h3>BloodBank Near you</h3>
      <div className="blood-bank-list">
        {nearBloodBank.length>0&&nearBloodBank.map((bloodbank, index) => (
          <div 
            key={index} 
            className="blood-bank-card"
            onClick={navigateToBloodBank(bloodbank.bloodbank, bloodbank.distance)}
          >
            <h4>{bloodbank.bloodbank.name}</h4>
            <p><strong>Contact Number:</strong> {bloodbank.bloodbank.contactNumber}</p>
            <p><strong>Distance:</strong> {bloodbank.distance}</p>
          </div>
        ))}
      </div>
    </div>
    )
}
export default FetchNearBloodBank