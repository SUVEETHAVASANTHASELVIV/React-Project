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
import { useNavigate } from 'react-router-dom';
import './../assets/css/Signup.css'


const SignUp = () => {
  const navigate = useNavigate();
    const [Username,setUsername]=useState("");
    const [email,setemail]=useState("");
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
    const handleChangeEvent=(event)=>
    {
        setemail(event.target.value);
    }
    
    const handleSubmit=(event)=>
    {
       event.preventDefault();
       console.log(showPassword,Username,email);
       navigate('/');
    }
    return (
        <>
          <div className="App">

            <form  onSubmit={handleSubmit} className="login-form">
                <h2 style={{fontFamily:'Times New Roman'}}>Sign Up</h2>
                <div className="input__fields">
                <TextField type="text" id="outlined-basic" label="Username" placeholder="Username" onChange={handleUsername}required minLength={20} maxLength={50} />
                <br></br>
                 <br></br>
                </div>
                
                <div className="input__fields">
                <TextField type="email" id="outlined-basic" label="Email" placeholder="Email" onChange={handleChangeEvent}required />
                <br></br>
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
            label="Password"
          />
        </FormControl>
        <br></br>
        <br></br>
                </div>
                <Button className='but'onClick={handleClick}variant="contained"type="submit">Register</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Registered Successfully"
        action={action}
      />
            </form> 
          </div>
        </>
    )
}

export default SignUp;