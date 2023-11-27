
import React,{ useState}from 'react'
import { useNavigate } from 'react-router-dom';
import { UserData } from '../services/Userapi';
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
            <div className="input_fields">
              <label>Username</label>
              <input
                type="text"
                placeholder="e.g Jane Doe"
                onChange={(e)=> setdata({...data,name:e.target.value})}
              
              />
            </div>
            <div className="input_fields">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e)=> setdata({...data,email:e.target.value})}
              
              />
            </div>
              <div className="input_fields">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e)=> setdata({...data,password:e.target.value})}
                
                />
              </div>
        
              <button type="submit" className="but">
                Submit
              </button>
      </form>    
  </div>
    
  )
}

export default SignUp