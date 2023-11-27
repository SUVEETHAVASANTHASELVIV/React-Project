import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import '../assets/css/Homecss.css';
import { useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Dialog from '@mui/material/Dialog';
import Electricity from './Electricity'



export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigate2=useNavigate();
  const handlewa=()=> {
      navigate2('/Water');
  }
  const navigate3=useNavigate();
  const handlega=()=> {
      navigate3('/Gas');
  }
  const navigate4=useNavigate();
  const handletra=()=> {
      navigate4('/TransportBill');
  }
  const navigate5=useNavigate();
  const handleedu=()=> {
      navigate5('/Education');
  }
  const navigate6=useNavigate();
  const handlemore=()=> {
      navigate6('/Moreoption');
  }
  return (
    <>
      <div className='body'> 
      <br></br>
    <Box sx={{ flexGrow: 1 }} >
      <Marquee style={{justifyContent:'space-around', fontSize:'25px'}}>
        Welcome  to our BillSwift! 
        Makes our Billpay Ease.
      </Marquee>

      <div className='background'>
        <div>
          <br></br>
         <h3 style={{textAlign:'left' }}>SAVE TIME PAY YOUR BILLS ONLINE!</h3><br></br>
         <p style={{textAlign:'left',fontFamily:''}}>"Simplify your life with our online bill payment app –<br/>
          where convenience meets control, making bills a breeze!"</p><br></br>
          <p style={{textAlign:'left'}}>*Worry-Free Payment*</p>
        </div>
      </div>     
      <div className='cards1'>
      <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://5.imimg.com/data5/XX/HE/EK/SELLER-69283054/electricity-bill-payment-500x500.jpg"
          alt="green iguana"
          />
        <CardContent>
        <React.Fragment>
          <Typography gutterBottom variant="h5" component="div">
          <Button onClick={handleClickOpen} style={{color:'black'}}>Electricity</Button>
          <Dialog open={open} onClose={handleClose}>
            <Electricity/>
            </Dialog>
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Save electricity not just for the money for our earth which is suffering 
             from global warming.
          </Typography>
          </React.Fragment>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-M-iX8zqF7RNkJZK63dO2qPDhh5sAgl0IM5apzcSvZ-5o5EYAKZdinyGXTSIWOOh39Ks&usqp=CAU"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Button onClick={handlewa} style={{color:'black'}}>Water</Button>
          </Typography>
          <Typography variant="body2" color="text.secondary">
              A Drop of water,if it could write out its own history, would explain
              the universe to us.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/1401578198/photo/costs-for-heating-with-gas.jpg?s=612x612&w=0&k=20&c=GEkL_bXPN73WCNjQUmXtEDaHNJAW45hHDQdwn4KmlhQ="
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Button onClick={handlega} style={{color:'black'}}>Gas</Button>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bills paid, Food on the table.Paying bills on time is a sign of responsible adulthood.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='cards2'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/1409387561/photo/transport-and-logistic-concept-manager-and-engineer-checking-and-control-logistic-network.jpg?s=612x612&w=0&k=20&c=A8UsutrsjMElYparCpwmTjKnQp8pw3R8wpxQX1VgKfc="
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Button onClick={handletra} style={{color:'black'}}>TransportBill</Button>
          </Typography>
          <Typography variant="body2" color="text.secondary">
              if we drive down the cost of transportation in space,we can do great things.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Button onClick={handleedu} style={{color:'black'}}>Education</Button>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Every child should have the opportunity to receive a quality education.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://acropolium.com/img/articles/how-to-process-online-payments/img01.jpg"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Button onClick={handlemore} style={{color:'black'}}>More Option</Button>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Time is more valiable then others.Take payment on online save your time with safe,convenient.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </div> 
     <br></br>
    </Box>   
   </div>
   </>
  );
}
