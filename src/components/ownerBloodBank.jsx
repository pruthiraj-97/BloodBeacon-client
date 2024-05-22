'use client'
import { useState, useEffect } from 'react';
import '../componentCSS/ownerBloodBank.css';
import { backend_url } from './BackenUrl';
import BloodGroupCompo from './BloodGroupcom';
const BloodBankDetailsComponent = () => {
  const [bloodBank, setBloodBank] = useState(null);
  const [loding,setLoding]=useState(false)
  useEffect(() => {
    ( async ()=>{
      setLoding(true)
       const response=await fetch(`${backend_url}/bloodbank/getbloodbank`,{
           method:'GET',
           headers:{
               'Content-Type':'application/json',
               'x-access-token':localStorage.getItem('token')
           }
       })
       const data=await response.json()
       console.log(data)
       setBloodBank(data.bloodBank)
       setLoding(false)
    })()
  }, []);

  if (loding||!bloodBank) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="blood-bank-container">
      <h1>Blood Bank Details</h1>
      <div className="blood-bank-details">
        <p><strong>Name:</strong> {bloodBank.name}</p>
        <p><strong>Email:</strong> {bloodBank.email}</p>
        <p><strong>Contact Number:</strong> {bloodBank.contactNumber}</p>
        <p><strong>Address:</strong> {bloodBank.address.state}, {bloodBank.address.country}, {bloodBank.address.region}</p>
        <div className='blood-groups'>
          {bloodBank && bloodBank.bloodGroups && (
           Object.entries(bloodBank.bloodGroups).map(([group, count]) => (
          <BloodGroupCompo key={group} group={group} count={count} id={bloodBank._id}/>
        ))
       )}
    </div>
      </div>
    </div>
  );
};

export default BloodBankDetailsComponent;
