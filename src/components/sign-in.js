import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from '../components/sign-in-up-navbar/sign-in-up-navbar';
import { useState } from 'react';
import { auth, signInWithEmailAndPassword } from "./firebase/firebase"
import {useHistory} from "react-router-dom";

import { GlobalContext } from "./../context/context";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  
  let history=useHistory()
  let [errMsg, setErrMsg] = useState('')
  // let [userRole, setUserRole] = useState('Buyer')

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    let signIn = {
      email: data.get('email'),
      password: data.get('password'),
      userRole: data.get("userRole")
    };
    {localStorage.setItem("email",signIn.email)}
    // console.log(signIn)
    let { email, password } = signIn;
    try {
      let { user } = await signInWithEmailAndPassword(auth, email, password);
      if(signIn.userRole==="Buyer"){
        history.push("/Dash-Board")
      }
      else{
        history.push("/")
      }
    }
    catch (err) {
      setErrMsg(err.message);
      setTimeout(() => {
        setErrMsg('');
      }, 5000)
    }
  };

  return (
    <>
      <ButtonAppBar prop="Sign-Up" />

      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} style={{ backgroundColor: "#8ED444" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" >
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="userRole"
                  label="User Role"
                  type="userRole"
                  id="userRole"
                  autoComplete="current-User-Role"
                />

















                {/* <select style={{width:"250px",height:"50px"}} name="role" onChange={(e) => { setUserRole(e.target.value) }}>
                <option value='Seller'>Seller</option>
                <option value='Buyer'>Buyer</option>
            </select> */}
                <br />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  // variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: "#8ED444", border: "2px solid #Ed444", color: "black" }}
                >
                  Sign In
                </Button>

                {errMsg ? <p>{errMsg}</p> : null}

                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}