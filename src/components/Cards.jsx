import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useNavigate } from 'react-router-dom';


export default function CustomizedDialogs() {
  const navigate=useNavigate();
  const handleend=()=> {
      navigate('/EndPage');
  }
  return (
    <React.Fragment>
        <DialogContent dividers>
        <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        marginTop: '30px',
        maxWidth: '50%',
        mx: 'auto',
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card number</FormLabel>
          <Input endDecorator={<CreditCardIcon />}/>
        </FormControl>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <Input endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input type='password' endDecorator={<InfoOutlined />} />
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card holder name</FormLabel>
          <Input placeholder="Enter cardholder's full name" />
        </FormControl>
        <CardActions sx={{ gridColumn: '1/-1' }}>
        </CardActions>
      </CardContent>
    </Card>
        </DialogContent>
        <DialogActions>
        <Button variant="contained" onClick={handleend} style={{color:'black'}}>Pay</Button>
        </DialogActions>
    </React.Fragment>
  );
}