import React,{ useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../services/Userapi'

const SignUp = () => {
   const [data,setdata]=useState(
    {
    name:"",
    email:"",
    password:""
    }
   )
   const navigate=useNavigate();

    const handleSubmitChangeSignUp=(event)=>{
        event.preventDefault(); 
        UserData(data);   
        navigate('/Home')
       }

  return (
    <div className="App">
    <form className="login-form" onSubmit={(e)=>handleSubmitChangeSignUp(e)}>
      <h1>Sign Up</h1>
            <div className="input_fields">
              <label style={{fontSize:'150%', fontWeight:"inherit"}}>Username</label>
              <br></br>
              <input
                type="text"
                placeholder="e.g Jane Doe"
                onChange={(e)=> setdata({...data,name:e.target.value})}
                style={{padding:'2%', width:'80%'}}
                required
              />
            </div>
            <br></br>
            <div className="input_fields">
              <label style={{fontSize:'150%', fontWeight:"inherit"}}>Email</label>
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e)=> setdata({...data,email:e.target.value})}
                style={{padding:'2%', width:'80%'}}
                required
              />
            </div>
            <br></br>
              <div className="input_fields">
                <label style={{fontSize:'150%', fontWeight:"inherit"}}>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e)=> setdata({...data,password:e.target.value})}
                  style={{padding:'2%', width:'80%'}}
                required
                />
              </div>
              <br></br>
              <button type="submit" className="but">
                Submit
              </button>
              <p style={{justifyContent:'space-evenly'}}>
              Existing User?
              <Link to={'/'}>LogIn</Link>
            </p>
      </form>    
  </div>
    
  )
}

export default SignUp