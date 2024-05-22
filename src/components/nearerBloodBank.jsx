'use client'
import React from "react";
import { useState,useEffect } from "react";
import { getLocation } from "@/dataControl/getLocation";
import { backend_url } from "./BackenUrl";
import { useRouter } from "next/navigation";
import '../componentCSS/nearbloodbank.css'
function FetchNearBloodBank(){
    const router=useRouter()
    const [latitude,setLatitude]=useState('')
    const [longitude,setLongitude]=useState('')
    const [bloodGroup,setBloodGroup]=useState('A+')
    const [nearBloodBank,setNearBloodBank]=useState([])
    const [errors,setErrors]=useState([])
      useEffect(()=>{
        (async ()=>{
          const position=await getLocation()
          const response=await fetch(`${backend_url}/userbloodbank/searchbloodbank`,{
             method:'POST',
             headers:{
                'Content-Type':'application/json',
                'x-access-token':localStorage.getItem('token')
             },
             body:JSON.stringify({
                longitude:position.lon,
                latitude:position.lat,
                bloodGroup
             })
          })
          const data=await response.json()
          console.log(data)
          if(data.status==500){
            throw new Error(data.message)
          }else if(data.status==401){
            router.push('/login')
          }else if(data.status==400){
            setErrors(data.message)
          }else{
            setNearBloodBank(data.searchBloodBanks)
          }
        })()
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
        {nearBloodBank.map((bloodbank, index) => (
          <div key={index} className="blood-bank-card"
             onClick={navigateToBloodBank(bloodbank.bloodbank,bloodbank.distance)}
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