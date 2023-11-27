import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import BillDialog from './BillDialog';


export default function CreditCardForm() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

    const [loca, setloca]= React.useState('');
    const handleChange = (event) => {
      setloca(event.target.value);
    };
    
  return (
    <Card >
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
        <FormControl  sx={{gridColumn: '1/-1'}}>
        <FormLabel>Location</FormLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={loca}
          onChange={handleChange}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Madurai</MenuItem>
          <MenuItem value={20}>Coimabatore</MenuItem>
          <MenuItem value={30}>Chennai</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleClickOpen} style={{color:'black'}}>Bill</Button>
          <Dialog open={open}>
            <BillDialog/>
            </Dialog>
      </CardContent>
    </Card>
  );
}