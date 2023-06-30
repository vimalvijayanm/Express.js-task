import React, {useState} from 'react'
import "./App.css"
import axios from "axios";


const Register = () => {
   const[name,setName]=useState('')
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const[confirmpassword,setcnfrmpass]=useState('')
   const[registeredUser,setRegisteredUser]=useState('')


   function handleSubmit(e){
      e.preventDefault()
         axios.post("http://localhost:5000/register",{
                 name : name,
                 email : email,
                 password : password,
                 cnfrmpass : confirmpassword
         }).then((res) => setRegisteredUser(res.data))
         .catch((err) => console.log(err,err.res))
         
        
  }



return (
  <div className='registerform'>
    <h2>Registration form</h2>
      <form className='container' onSubmit={handleSubmit}>
        <label>
            Name:
            <input
              type='text'
              value={name}
              placeholder='Enter your name'
              onChange={(e)=> setName(e.target.value)}
              />
        </label>
         <br/>
         <label>
            Email:
            <input
              type='email'
              value={email}
              placeholder='Enter your Email'
              onChange={(e)=> setEmail(e.target.value)}
              />
        </label>
         <br/>
         <label>
            password:
            <input
              type='password'
              value={password}
              placeholder='Enter your password'
              onChange={(e)=> setPassword(e.target.value)}
              />
        </label>
         <br/>
         <label>
            confirmpassword:
            <input
              type='confirmpassword'
              value={confirmpassword}
              placeholder='Enter confirmpassword'
              onChange={(e)=> setcnfrmpass(e.target.value)}
              />
        </label>
         <br/>
         <button className='btn' type='submit'>Register</button>
      </form>
     <div >
      <h2>Registered user details</h2>
        <p> Name : {registeredUser.name}</p>
        <p> Email: {registeredUser.email}</p>
        <p> Password : {registeredUser.password}</p>
     </div>
</div>

  )
}

export default Register
