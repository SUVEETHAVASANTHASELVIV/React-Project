import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import './../assets/css/Image.css';


const Footer=()=> {
  return (
    
    <Box 
    height="150px"
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        width:'93.76vw' ,fixed:"bottom"
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={0.5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2/124,Kuniyamuthur,Coimbatore.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: Billing@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
            <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
            <Twitter />
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Help And Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <Link color="inherit" href="#top">
              FAQ
            </Link>{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <Link color="inherit" href="#top">
              Sitemap
            </Link>{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <Link color="inherit" href="#top">
              Accessibility
            </Link>{" "}
            </Typography>
          </Grid>
          </Grid>
          <br></br>
          <br></br>
          <Grid container spacing={2}>
          <Typography variant="body2" color="text.secondary"  sx={{ marginLeft: '25%' }}>
            {"Copyright © All Rights Reserved "}
            <Link color="inherit" href="#top">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>          
          <br></br>
              <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '69%' }}>
              <Link color="inherit" href="#top">
              Terms of Services 
              </Link>{" "}
              <Link color="inherit" href="#top">
              Privacy Policy
              </Link>{" "}
              <Link color="inherit" href="#top">
                DSMInfo
              </Link>{" "}
              </Typography>
            </Grid>          
      </Container>
    </Box>
 );
}
export default Footer;