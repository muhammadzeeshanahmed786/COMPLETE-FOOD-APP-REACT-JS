import React from "react"
import Button from '@mui/material/Button';
import "./work.css"
function SliderText(){
    return(
        <div  className="parent-container" style={{padding:"0 6%"}}>

        <div  className="main-container" style={{ width:"55rem",
        height:"18rem",backgroundColor:"#ffffff8c",color:"black"}}>
        <h1 className="main-heading" style={{fontSize:"3.5rem",fontFamily:"poppin,sans-serif",paddingTop:"1rem"}}>Get Started
        <br/>
        With a Healthier You
        </h1>
        <span className="text" style={{fontSize:"1.3rem"}}>We make eating healthy convenient and delicious so you can have more time to do the things you love.</span><br/>

<span className="btn" style={{paddingRight:"2.5rem"}}>
<Button  style={{width:"15rem",backgroundColor:"#8ED444" , color:"#fff",fontSize:"1.5rem",fontFamily:"avenirRegular,sens-serif"}}>Get Started</Button>

</span>
        </div>
        </div>
    )
}
export default SliderText;
