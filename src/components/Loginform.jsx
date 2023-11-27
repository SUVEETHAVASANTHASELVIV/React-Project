import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import './../assets/css/Loginform.css'
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';



const Form = () => {
    const navigate=useNavigate();
    const navigate7=useNavigate();
    const handlesignup=()=>{
        navigate7('/Signup');
    }
    const [Username,setUsername]=useState("");
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button className='but' color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
 
    const handleUsername=(event)=>
    {
        setUsername(event.target.value);
    }
    
    const handleSubmit=(event)=>
    {
       event.preventDefault();
       console.log(showPassword,Username);
       navigate('/')
    }
    return (
        <>
          <div className="App">
            <form  onSubmit={handleSubmit} className="login-form">
                <h2 style={{fontFamily:'Times New Roman'}}>Login</h2>
                <div className="input__fields">
                <TextField id="outlined-basic" label="Username" placeholder="Username" onChange={handleUsername}required minLength={20} maxLength={50} />
                <br></br>
                </div>
                <div className="input__fields">
                <FormControl sx={{ m: 1, width: '26ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"/>
        </FormControl>
        <br></br>
           <Typography align="right"><a href='#top'>Forget password?</a></Typography>
        <br></br>
                </div>
                <Button className='but' onClick={handleClick}variant="contained"type="submit">Login</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Successfully LogedIn"
        action={action}
        />
      <br></br>
      <br></br>
      New User?
     <Button onClick={handlesignup}>Sign up</Button>
            </form> 
          </div>
        </>
    )
}

export default Form;