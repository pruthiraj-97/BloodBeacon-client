'use client'
import '@/componentCSS/searchBloodBank.css'
import React from "react"
import { useState,useEffect } from "react"
import { bloodGroup } from "./BloodGroup"
import { getLocation } from '@/dataControl/getLocation'
import { backend_url } from './BackenUrl'
import { useRouter } from 'next/navigation'
function SearchBloodBankCompo(){
    const router=useRouter()
    const [maxDistance,setMaxDistance]=useState('')
    const [BloodGroup,setBloodBank]=useState('')
    const [errors,setErrors]=useState([])
    async function getNearBloodbank(e){
        e.preventDefault()
        const posttion=await getLocation()
        const response=await fetch(`${backend_url}/userbloodbank/searchbloodbank`,{
          method:'POST',
          headers:{
             'Content-Type':'application/json',
             'x-access-token':localStorage.getItem('token')
          },
          body:JSON.stringify({
             longitude:posttion.lon,
             latitude:posttion.lat,
             bloodGroup:BloodGroup
          })
        })
        const data=await response.json()
        console.log(data)
        if(data.status==200){
           console.log(data)
           const bloodBanks=encodeURIComponent(JSON.stringify(data.searchBloodBanks))
           router.push(`/bloodbank/nearbloodbank?bloodbanks=${bloodBanks}`)
        }else if(data.status==400){
            setErrors(data.message)
        }else{
            throw new Error(data.message)
        }
      }
    return (
  <div className="search-bloodBank">
    {
        errors.length>0&&errors.map((error,index)=>(
            <p key={index}>{error}</p>
        ))
    }
    <h3>Search BloodBank near you</h3>
    <form className="distance-filter">
        <input 
          type="number" 
          placeholder="Enter max distance (KM)" 
          value={maxDistance} 
          onChange={(e) => setMaxDistance(e.target.value)} 
        />
           <select onChange={(e) => setBloodBank(e.target.value)}>
          <option value="">Select Blood Group</option>
           {bloodGroup.map((group, index) => (
              <option key={index} value={group}>{group}</option>
           ))}
        </select>
        <button type="submit" onClick={getNearBloodbank}>Search</button>
      </form>
        </div>
    )
}

export default SearchBloodBankCompo