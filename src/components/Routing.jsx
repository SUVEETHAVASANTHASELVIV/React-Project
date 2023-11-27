import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home.jsx'
import Water from './Water.jsx'
import Gas from './Gas.jsx'
import TransportBill from './TransportBill.jsx'
import Education from './Education.jsx'
import Moreoption from './Moreoption.jsx'
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SignUp from './Signup.jsx';
import Searchicon from './Searchicon.jsx';
import DropdownMenu from './Dropdown.jsx';
import Front from './Front.jsx';
import Footer from './Footer.jsx'
import Page from './Page.jsx'
import EndPage from './EndPage.jsx';
import About from './About.jsx';
import { AuthContext } from "./useContextFiles/Admin";
import { useContext } from 'react';

const Routing = () => {
 const { auth } = useContext(AuthContext);
  const navigate=useNavigate();
  const navigate7=useNavigate();
  const handlesignup=()=>{
      navigate7('/Signup');
  }
  const handlehome=()=>{
    navigate('/home')
  }
  

  const navigatea=useNavigate();
  const handleabt=()=>{
      navigatea('/About');
  };
  return(
    <>
    <AppBar style={{backgroundColor:"#2979FF", position: "sticky", width:'100vw',}}fixed="top">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="ink blue" 
            aria-label="menu"
            sx={{ mr: 2 }}  >
            <DropdownMenu/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 5 }} display={'flex'}>
              <ul><Button color="inherit" onClick={handlehome} style={{fontSize:'18px'}}>Home</Button></ul>
             <ul> 
          <Button color="inherit" onClick={handleabt} style={{fontSize:'18px'}}>About</Button>
</ul>
              <ul><Button color="inherit" style={{fontSize:'18px'}}>Contacts</Button></ul>
          </Typography>
          <Searchicon/>
         <div style={{borderRadius:'8px'}}> <Button color="inherit" style={{fontSize:'15px'}}onClick={handlehome}>Login</Button></div>
         <div style={{borderRadius:'8px'}}> <Button color="inherit" style={{fontSize:'15px'}} onClick={handlesignup}>SignUp</Button></div>
        </Toolbar>
      </AppBar>
    <Routes>
     <Route exact path='/' element={<Front/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
     {auth.user && (
      <>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Page' element={<Page/>}/>
        <Route path='/EndPage' element={<EndPage/>}/>
        <Route path='/Water' element={<Water/>}/>
        <Route path='/Gas' element={<Gas/>}/>
        <Route path='/TransportBill' element={<TransportBill/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Moreoption' element={<Moreoption/>}/>
        <Route path='/About' element={<About/>}/>
      </>
      )}
      <Route path='*' element={<Front/>}/>
     </Routes>
      <Footer/>    
   </>
  )
}
export default Routing
