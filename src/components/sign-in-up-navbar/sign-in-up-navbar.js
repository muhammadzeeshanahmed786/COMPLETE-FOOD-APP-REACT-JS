import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function ButtonAppBar({prop}) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{ backgroundColor: "#8ED444", color: "#fff", boxShadow:"2px 1px #8ED444" }}>
        <Toolbar>
         
            <Link to="/" style={{textDecoration:"none", color:"white"}}>
          <ArrowBackIcon style={{width:"60px"}}></ArrowBackIcon>
                 
                 </Link>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{textDecoration:"none", color:"white"}}> Go To Home</Link>
          </Typography>
          <Button color="inherit"><Link to={prop} style={{textDecoration:"none",color:"#fff"}}>{prop}</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
