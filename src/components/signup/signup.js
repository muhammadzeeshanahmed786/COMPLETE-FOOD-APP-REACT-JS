import  React ,{useState} from 'react';
// import React  from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from "../sign-in-up-navbar/sign-in-up-navbar"
import {auth,createUserWithEmailAndPassword, db, setDoc, doc} from "../firebase/firebase"
const theme = createTheme();

let SignUp =  () =>{
  let [errMsg,setErrMsg]=useState()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
   let obj= {
      email: data.get('email'),
      password: data.get('password'),
    };
    let {email,password}=obj
    try{
    let {user}=  await createUserWithEmailAndPassword(auth,email,password);
    let dataRef = doc(db, 'users', user.uid)
    await setDoc(dataRef, {
                email: user.email,
                uid: user.uid,
              }) ;
    }
   catch (err) {
    setErrMsg(err.message);
    setTimeout(() => {
        setErrMsg('');
    }, 5000)
    console.log(errMsg)
}
  };

  return (
      <>
      <ButtonAppBar prop="Sign-In"/>
      
   
    <ThemeProvider  theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} style={{ backgroundColor:"#8ED444"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
            //   variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:"#8ED444",border:"none" , color:"black"}}
              
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
             
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default SignUp;