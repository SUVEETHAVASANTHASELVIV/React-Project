import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Cards from './Cards'


export default function ControlledAccordions() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    const [Net, setNet] = React.useState('');
  
    const handleNet = (event) => {
      setNet(event.target.value);
    };
  

    

    return (
      <div style={{backgroundImage:'url("https://example.com/media.gettyimages.com/id/1444966373/video/flying-forward-over-circuit-boards-with-glowing-connection-lines-light-blue-loopable.jpg?s=640x640&k=20&c=ttXul0oAVqDlop71y0zM-U8YRBo1zutBB2vvO1A9hbI=")',
      backgroundSize:'cover'}}>
        <Card sx={{ minWidth: 275 }} style={{display:'flex'}}>
        <CardContent>
            <div>
          <Typography style={{textAlign:'left',fontSize:'40px'}}><b>Select a Payment Method</b></Typography>
        <br></br>
            </div>
        <>
    <div style={{width:'800px'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
           Credit or Debit Card
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div style={{display:'flex',fontSize:'10px',justifyContent:'space-evenly',height:'20px',textAlign:'right'}}>
                <br></br>
                <br></br>
            <img src="https://logos-world.net/wp-content/uploads/2020/06/Visa-Logo-2006.png" alt="Bank 1"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png" alt="Bank 2"/>
          <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/08/rupay-card-1566468196.jpg" alt="Bank 3"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/2560px-Maestro_logo.svg.png" alt="Bank 4"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthZX_NAITaPsbqIOf3aL90nxtWV3UdW_q3n2iqBg&s" alt="Bank 5"/>
          <img src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/5306d903-a749-42c7-9768-e695a90ad4f3/Personal/Pay/Cards/Credit%20Card/Credit%20Card%20Landing%20Page/Credit%20Cards/Commercial/Business%20Money%20Back/business_moneyback_banner1.png" alt="Bank 6"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSan8ZwRO2GKUHWZrxRaQn0j6vyklUE8sTdL2Gyg1E&s" alt="Bank 7"/>
            </div>
        <Typography>
          <br></br>
          <br></br>
          <Button onClick={handleClickOpen} style={{color:'black'}}>Enter</Button>
          <Dialog open={open} onClose={handleClose}>
            <Cards/>
            </Dialog>
        <b style={{fontSize:'10px',textAlign:'left'}}>
            BillSwift accepts all major credit & cards
          </b>
        </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>NetBanking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Box style={{width:'400px',textAlign:'center'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Net}
          label="text"
          onChange={handleNet}
        >
          <MenuItem value={10}>HDFC Bank</MenuItem>
          <MenuItem value={20}>ICICI Bank</MenuItem>
          <MenuItem value={30}>SBI Bank</MenuItem>
          <MenuItem value={40}>Kotak Bank</MenuItem>
          <MenuItem value={50}>Axis Bank</MenuItem>
          <MenuItem value={60}>TMB Bank</MenuItem>

        </Select>
        <br></br>
      </FormControl>
      <Button variant="contained" >Pay</Button>
    </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Other UPI Apps
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:'left'}}>
            Please Enter Your UPI ID
            <br></br>
            <br></br>
            <TextField
          id="outlined-multiline-flexible"
          label="Enter UPI ID"
          maxRows={4}
          required
          />
          <br></br>
          The UPI ID is in the format of name/phone number@bankname
        <br></br>
        <br></br>
        <Button variant="contained">Pay</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>EMI </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Box style={{width:'400px',textAlign:'center'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select EMI Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Net}
          label="text"
          onChange={handleNet}
        >
          <MenuItem value={100}>Add a New Card</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <br></br>
    </div>
</>

   <Typography style={{textAlign:'left',fontSize:'30px'}}>More Payment Options</Typography> 
   <hr></hr> 
   <br></br>
   <Typography style={{textAlign:'left'}}><b>Gift Cards, Vouchers & Promotional Codes</b></Typography>
   <br></br>
   <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel3bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
           Enter a Gift Cards, Vouchers & Promotional Codes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:'left'}}>
            
            <br></br>
            <TextField
          id="outlined-multiline-flexible"
          label="Enter Code"
          maxRows={4}
          required
          />
          <br></br>
        <br></br>
        <Button variant="contained">Apply</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </CardContent>
        <CardContent>
        </CardContent>
      </Card>
      </div>
    );
}