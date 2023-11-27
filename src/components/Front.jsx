import React ,{useEffect, useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Loginform.css'
import { getUserData } from '../services/Userapi'
import { AuthContext } from "./useContextFiles/Admin";
import { useContext } from 'react';

const Front= () => {
  const [data,setdata]=useState([]);
  const [input,setInput] = useState({
    name:"",
    password:""
  })
  

  
  const navigate=useNavigate();
  const { setAuth } = useContext(AuthContext);

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


  if(data===null)
  {
    return(
      <div>Loading...</div>
    )
  }
  const handleChange = (event)=>{
    const{name,value} = event.target;
    setInput({
      ...input,
      [name] : value,
  })
  }
 let somedata=null;
  const handleSubmitChangeSignIn = (event)=>{
    event.preventDefault()
    for(let i=0;i<data.length;i++)
    {
      
      console.log(data[i].name,input.name,data[i].password,input.password)
      if(data[i].name===input.name && data[i].password===input.password)
      {
        somedata= data[i];
      }
    }
    console.log(somedata);
    if(somedata===null)
    {
      alert("Invalid User or Password")
    }
    else{
            setAuth({user :true});
          navigate('/Home');
    }
  }
 
  // const handleSubmitChangeSignIn=(event)=>{
  //   event.preventDefault();
  //   const name =nameRef.current.value;
  //   const password =passwordRef.current.value;
  //   var somedata=null;

    // for(let i=0;i<data.length;i++)
    // {
    //   console.log(data[i]);
    //   if(data[i].name===name && data[i].password===password)
    //   {
    //     somedata= data[i];
    //   }
    // }
    //   if(somedata===null)
    //   {
    //     return(
    //       <div>
    //         Loading..
    //       </div>
    //     )
    //   }
    //   console.log(data);

    //   if( somedata!==-1&& data[somedata].password===password) {
    //     setAuth({user :true});
    //       navigate('/Home');
        
    //   }
    //   else
    //   {
    //     alert("invalid password/emailid");
    //     navigate('/');
    //   }
    //    }
    
      
  return (
    <div className="App">
        <form className="login-form" onSubmit={(event)=>handleSubmitChangeSignIn(event)}>
            <h1>Login</h1>
            <div className="input_fields">
              <label style={{fontSize:'150%', fontWeight:"inherit"}}>Username</label>
              <br></br>
              <input
                type="text"
                placeholder="username"
               
                style={{padding:'2%', width:'80%'}}
                name ="name"
                onChange={(event)=>handleChange(event)}
                required
              />
            </div>
            <br></br>
            <div className="input_fields">
              <label style={{fontSize:'150%', fontWeight:"inherit"}}>Password</label>
              <br></br>
              <input
                type="password"
                placeholder="password"
                
                style={{padding:'2%', width:'80%'}}
                name ="password"
                onChange={(event)=>handleChange(event)}
                required
              />
            </div>
             <br></br>
              <button type="submit" className="but">
                Login
              </button>
              <p style={{ justifyContent: 'space-evenly' }}>
                <span>
                  <Link to={'/'}> Forgot password?</Link>
                </span>
                <span>
                  <Link to={'/signup'}>SignUp</Link>
                </span>
              </p>
        </form>
      </div>
 
  )
}


export default Front