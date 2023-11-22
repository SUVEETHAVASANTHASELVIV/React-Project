import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Snackbar } from '@mui/joy';
import { TextField } from '@mui/material';

export default function EducationalPayment() {
    const [open, setOpen] = React.useState(false);
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '50%',
        mx: 'auto',
        overflow: 'auto',
        marginTop: '50px',
        resize: 'horizontal',
      }}
    >
        <form>
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
       Educational Payment
      </Typography>
      <h6>Please fill all <span style={{color:'red'}}>*</span> fields</h6>
      <hr></hr>
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Register Number<span style={{color:'red'}}>*</span></FormLabel>
          <Input placeholder="Register Number" required/>
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Course<span style={{color:'red'}}>*</span></FormLabel>
          <Input placeholder="Course" required/>
          <FormLabel>Department<span style={{color:'red'}}>*</span></FormLabel>
          <Input placeholder="Dept" required/>
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card number<span style={{color:'red'}}>*</span></FormLabel>
          <Input endDecorator={<CreditCardIcon />} inputProps={{maxLength:16}} required/>
        </FormControl>
        <FormControl>
          <FormLabel>Expiry date<span style={{color:'red'}}>*</span></FormLabel>
          <TextField endDecorator={<CreditCardIcon />} inputProps={{maxLength:5}} placeholder='MM/YY'size='small' required/>
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV<span style={{color:'red'}}>*</span></FormLabel>
          <TextField type='password' inputProps={{maxLength:3}} size='small'required/>
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card holder name<span style={{color:'red'}}>*</span></FormLabel>
          <TextField type='text' placeholder="Enter cardholder's full name" inputProps={{ maxLength: 12 }} size='small' variant='outlined' required/>
        </FormControl>
        <CardActions sx={{ gridColumn: '1/-1' }}>
        <Button variant="outlined" color="primary" style={{backgroundColor:"green", color:"black"}} onClick={() => setOpen(true)}>
        PAY
        </Button>
        <Snackbar
            variant="soft"
            color="green"
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            endDecorator={
            <Button
                onClick={() => setOpen(false)}
                size="sm"
                variant="soft"
                color="success"> Dismiss </Button>}>
            Payment Successful!
        </Snackbar>
        </CardActions>
      </CardContent>
        </form>
    </Card>
  );
}