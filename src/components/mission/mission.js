import React from "react";
import "./mission.css";
import section8 from "./section8.png";
import Button from '@mui/material/Button';

function Mission() {
  return (
    <div
      className="main"
      style={{ marginLeft: "250px", marginRight: "90px" }}
    >
      <div
        className="half-content-custom"
        style={{
          borderRadius: "7px",
          // paddingRight: "-60%",
          width: "750px",
          height:"500px",

          background: "white",
          boxShadow: "0px 0px 20px rgb(0 0 0/10%)",
          top: "50%",
          // paddingBottom:"-800px",
          left: "30%",
        }}
        >
        <h1 className="heading" style={{paddingLeft:"50px",paddingTop:"50px",fontSize:"50px",color:"#030403",lineHeight:"50px",fontFamily: "avenirRegular, sans-serif"}}>Our mission is to make  clean <br/> eating delicious and <br/> convenient  for everyone.</h1>
        <p className="para" style={{paddingLeft:"50px",paddingTop:"20px",fontSize:"20px",color:"#030403",fontFamily: "avenirRegular, sans-serif"}}>Our mission is to make clean eating simple and convenient. You should <br/> never have to sacrifice quality, flavor or nutrition when it comes to your, <br/> which is why we offer the highest quality ingredients in our meals. Every<br/> meal we prepare is created with passion and care by our incredible chef<br/> and culinary team. We are more passionate than ever that we can truly<br/> change people’s lives with clean eating!</p>
<span className="btn-span" style={{paddingLeft:"50px"}}>
<Button className="btn"  style={{width:"15rem",backgroundColor:"#8ED444" , color:"#fff",fontSize:"1.5rem",fontFamily:"avenirRegular,sens-serif"}}>Learn More</Button>
  
  </span>        
        <img
        className="image"
          style={{
            width: "58%",

            height: "300px",
            backgroundSize: "100%",
            marginLeft:"88.5%",
            position:"relative",
            marginTop:"-60%",
            zIndex:"-1"
            
            // backgroundPositionX: "left",
            // paddingLeft: "300px",
          }}
          src={section8}
          />
          </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default Mission;
