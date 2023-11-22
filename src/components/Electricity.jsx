import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Snackbar } from '@mui/joy';

export default function CreditCardForm() {
    const [open, setOpen] = React.useState(false);
  return (
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
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Electricity Bill
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Consumer number</FormLabel>
          <Input type="tel" placeholder="Consumer Number"/>
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card number</FormLabel>
          <Input endDecorator={<CreditCardIcon />} />
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
            Electricity Amount successfully paid!
        </Snackbar>
        </CardActions>
      </CardContent>
    </Card>
  );
}