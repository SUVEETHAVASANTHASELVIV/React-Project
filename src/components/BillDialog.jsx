import { Card } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';


const BillDialog = () => {
  const navigate=useNavigate();
  const handlepage=()=> {
      navigate('/Page');
  }
  return (
    <div>
     <Card>
      <form> 
      <h3>Bill</h3>
      <p>Name : Suveetha</p>
      <p>Address : 2/124,ARUR,NAMAKKAL DT</p>
      <p>Unit : 200kWh</p>
      <p>Amount : ₹360.00</p>
      <p>Due : 31.11.2023</p>
      <Typography gutterBottom variant="h5" component="div">
      <Button variant="contained" onClick={handlepage} style={{color:'black'}}>Pay</Button>
          </Typography>
      </form>
     </Card>
    </div>
  )
}

export default BillDialog