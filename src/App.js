
import React from "react";
import CarouselImage from "./components/carousel";
import ButtonAppBar from "./components/navbar"
// import SignInSide from "./components/sign-in"
import WorkSection from "./components/workSection";
import ReactRoutes from "./routes/routes"
import CircularProgress from '@mui/material/CircularProgress';
import ContextProvide from "../src/context/context"

function App(){
    return(

      <>
      {/* {
        setTimeout(()=>{
          
          <CircularProgress color="success" />
        },5000)
      } */}
      <ContextProvide>
      <ReactRoutes/>

      </ContextProvide>
      
      </>
    )
}

export default App;