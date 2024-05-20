import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../componentCSS/signup.css';
import { backend_url } from './BackenUrl';
import { bloodGroup } from './BloodGroup';
import axios from 'axios';
const SignUpComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber,setContactNumber]=useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [bloodgroup,setBloodGroup]=useState('');
  async function signupUser(e){
    e.preventDefault();
    try {
        const response=await fetch(`${backend_url}/auth/signup`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:username,
                email:email,
                password:password,
                contactNumber:contactNumber,
                bloodGroup:bloodgroup
            })
        })
        const data=await response.json();
        console.log(data)
    } catch (error) {
        console.log('error is ',error)
    }
  };

  return (
    <div className="signup-container">
      <form  className="signup-form">
        <h3 className='signup-title'>Sign Up</h3>
        <div className='signup-div'>
        <label htmlFor="">username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        />
        </div>
        <div className='signup-div'>
            <label htmlFor="">email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        </div>
        <div className='signup-div'>
            <label htmlFor="">contacnumber :</label>
        <input
          type="contactNumber"
          placeholder="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="signup-input"
        />
        </div>
        <div className='signup-div'>
          <label htmlFor="bloodGroup">Blood Group:</label>
          <select
            id="bloodGroup"
            value={bloodgroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="signup-input"
          >
            <option value="">Select Blood Group</option>
            {bloodGroup.map((group, index) => (
              <option key={index} value={group}>{group}</option>
            ))}
          </select>
        </div>
        <div className='signup-div'>
        <label htmlFor="">password</label>
        <div className='password-div'>
        <input
          type={showPassword?"text":"password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
         {
            showPassword?
            <FaEyeSlash onClick={()=>setShowPassword(false)}/>
            :<FaEye onClick={()=>setShowPassword(true)}/>
        }
        </div>
        </div>
        <button className="signup-button"
          onClick={signupUser}
        >Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpComponent;

