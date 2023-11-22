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
import Footer from './Footer';
import Marquee from 'react-fast-marquee';

export default function ButtonAppBar() {
  const navigate1=useNavigate();
  const handleEle=()=> {
      navigate1('/Electricity');
  }
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
         <p style={{textAlign:'center' ,color:'white'}}>SAVE TIME PAY YOUR BILLS ONLINE!</p>
         <p style={{textAlign:'left',color:'white'}}>"Simplify your life with our online bill payment app –<br/>
          where convenience meets control, making bills a breeze!"
          <p style={{textAlign:'right',color:'white'}}>*Worry-Free Payment*</p></p>
        </div>
      </div>
      <div className='cards1'>
      <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2X_aAUNbVu2y2X7yxLVD1e8f2-KugHw3WhtxhXEC4f8yq2ypouqk7aut13YtgfWXepGU&usqp=CAU"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Button onClick={handleEle} style={{color:'black'}}>Electricity</Button>
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Save electricity not just for the money for our earth which is suffering 
             from global warming.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://onlinerechargedeal.com/css/img/water-bill-payment-offer.jpg"
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
          image="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/01/bill-payments.jpg?fit=1200%2C630&ssl=1"
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
      <div className='footer'>
        <Footer/>    
      </div>
    </Box>   
   </div>
   </>
  );
}
