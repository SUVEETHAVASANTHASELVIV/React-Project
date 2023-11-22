import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Loginform from './Loginform.jsx'
import Home from './Home.jsx'
import Electricity from './Electricity.jsx'
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
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import DropdownMenu from './Dropdown.jsx';

const Routing = () => {
  const navigate=useNavigate();
  const handleNavigate=()=> {
      navigate('/Loginform');
  }
  const navigate7=useNavigate();
  const handlesignup=()=>{
      navigate7('/Signup');
  }
  const handlehome=()=>{
    navigate('/')
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return(
    <>
    <AppBar style={{backgroundColor:"bluetopaz", position: "sticky"}} variant="dark" fixed="top">
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
    
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={100}>
            <Paper style={{color:'blue'}}>
              <Typography sx={{ p: 2 }}>
                <ul>Company Overview</ul>
                <ul>History</ul>
                <ul>Team Members</ul>
                <ul>Security and Compliance</ul>
                <ul>Community Involvement and Values</ul>
                <ul>Contents for about session</ul>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
          <Button color="inherit" onClick={handleClick('bottom')} style={{fontSize:'18px'}}>About</Button>
</ul>
              <ul><Button color="inherit" style={{fontSize:'18px'}}>Contacts</Button></ul>
          </Typography>
          <Searchicon/>
         <div style={{borderRadius:'8px'}}> <Button color="inherit" style={{fontSize:'15px'}}onClick={handleNavigate}>Login</Button></div>
         <div style={{borderRadius:'8px'}}> <Button color="inherit" style={{fontSize:'15px'}} onClick={handlesignup}>SignUp</Button></div>
        </Toolbar>
      </AppBar>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/Loginform' element={<Loginform/>}/>
    <Route path='/Electricity' element={<Electricity/>}/>
    <Route path='/Water' element={<Water/>}/>
    <Route path='/Gas' element={<Gas/>}/>
    <Route path='/TransportBill' element={<TransportBill/>}/>
    <Route path='/Education' element={<Education/>}/>
    <Route path='/Moreoption' element={<Moreoption/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
   </Routes>
   </>
  )
}
export default Routing