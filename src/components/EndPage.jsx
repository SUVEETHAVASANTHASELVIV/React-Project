import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const EndPage = () => {
  const navigate=useNavigate();
  const handlereturn=()=> {
      navigate('/Home');
  }
  return (
    <div style={{textAlign:'center'}}>
        <img src="https://t3.ftcdn.net/jpg/01/57/86/44/360_F_157864480_TFm1nQsUI1o8VLKg6SK6yV9P6tsK4TXN.jpg" alt="Successfull"/>
        <br></br>
        <b style={{color:'green',fontSize:'40px'}}>Payment Successful</b>
        <br></br>
        <br></br>
        <br></br>
        <Button variant="contained">Print</Button><br></br><br></br>
        <Button variant="contained" onClick={handlereturn}>Close</Button>
    </div>
  )
}

export default EndPage