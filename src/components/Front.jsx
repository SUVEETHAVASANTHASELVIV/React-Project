import React ,{useEffect, useRef, useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getUserData } from '../services/Userapi';
import '../assets/css/Loginform.css'

const Front= () => {
  const [data,setdata]=useState([]);

  useEffect(()=>
  {
    const fetchData =async()=>
    {
       await getUserData ()
       .then((ress)=>setdata(ress.data))// inbuild data
       .catch((e)=>console.error(e));
    }
    fetchData();
  },[]);

    const nameRef=useRef();
  const passwordRef=useRef();

const navigate=useNavigate();
    const handleSubmitChangeSignIn=(event)=>{
        event.preventDefault();
        const name =nameRef.current.value;
        const password =passwordRef.current.value;
      const somedata=data.findIndex((props)=>props.email===name);
      console.log(somedata)
      if( somedata!==-1&& data[somedata].password===password) {
          navigate('/Home');
        
      }
 
      else 
      {
        alert("invalid password/emailid");
        navigate('/');
      }
       }
      
  return (
    <div className="App">
        <form className="login-form" onSubmit={(event)=>handleSubmitChangeSignIn(event)}>
            <div className="input_fields">
              <label>Username</label>
              <input
                type="text"
                placeholder="username"
                ref={nameRef}
              />
            </div>
            <div className="input_fields">
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                ref={passwordRef}
              />
            </div>
             
              <button type="submit" className="but">
                Login
              </button>
            <p className="text-center mt-2">
             <Link to={'/'}> Forgot password?</Link>
            </p>
        </form>
      </div>
 
  )
}


export default Front