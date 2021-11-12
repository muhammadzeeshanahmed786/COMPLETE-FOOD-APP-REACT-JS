import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


export default function ButtonAppBar() {
  return (
    <>

      <Box sx={{ flexGrow: 1 }} >

        <AppBar position="fixed" color=""  >
          <Toolbar >

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Food Panda
            </Typography>

            <Button style={{ backgroundColor: "#8ED444", color: "#fff" }}>
              <Link style={{ textDecoration: "none", color: "black" }} to='/Order'>Order</Link>
            </Button>



            <span>


              <Button style={{ fontFamily: " (stack):poppins, sans-serif", padding: "10px" }} color="inherit">
                <Link style={{ textDecoration: "none", color: "black" }} to="/Sign-Up">Sign Up</Link>
              </Button>
              <Button style={{ fontFamily: " (stack):poppins, sans-serif", padding: "10px", fontBeingRender: "Helvetica" }} color="inherit">
                <Link style={{ textDecoration: "none", color: "black" }} to="/Sign-In">Sign In</Link>
              </Button>

            </span>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <CarouselImage/>
    <WorkSection/> */}
    </>
  );
}
