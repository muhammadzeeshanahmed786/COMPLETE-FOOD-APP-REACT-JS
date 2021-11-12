import React from "react";
// import imag from "../image/howworkd3.svg"
import "./work.css"
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DiningSharpIcon from '@mui/icons-material/DiningSharp';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
// import Mission from "./mission/mission"
function WorkSection() {
    return (
        <div className="main-conatiner1">
            <div className="work-section">
                <h1>How It Works</h1>
            </div>
            <div style={{ padding: "50px", display: "inline-flex", alignItems: "space-between" }}>
                <div className="same">

                    <LocalShippingOutlinedIcon style={{ justifyContent: "space-between", color: "#8DE444", width: "140px", height: "127px" }} />
                    <p style={{ paddingLeft: "10px" }}>Pick Up/Delivery</p>
                    <p>Pick up your order from our <br/> grab and  go or have your meals delivered to 
                     your home in one of our insulated <br/> coolers with ice packs. Our 
                      contactless delivery ensures our  customers to never have to  wait 
                    around for a delivery to arrive.</p>
                </div>
                <div className="same hatm">

                    <DiningSharpIcon style={{ color: "#8DE444", width: "140px", height: "127px" }} />
                    <p style={{ paddingLeft: "18px" }}>Eat and Repeat</p>
                    <p style={{ paddingLeft: "20px" }}>transform life week by week with fresh healthy meals</p>

                </div>
                <div className="same">

                    <MenuBookTwoToneIcon style={{ color: "#8DE444", width: "140px", height: "127px" }} />
                    <p style={{ paddingLeft: "50px" }}>Menu</p>
                    <p style={{paddingLeft:"0px"}}>choose from 40+ chef prepared menu options – We offer a wide variety of meal types as well as ways to order so clean eating can work for everyone!</p>
                </div>
                <div className="same">

                    <FastfoodTwoToneIcon style={{ color: "#8DE444", width: "140px", height: "127px" }} />
                    <p style={{ paddingLeft: "40px" }}>Cook</p>
                        <p>Our chefs start with fresh, high quality ingredients and create meals that are flavorful, nutritious and perfectly balanced</p>
                </div>

            </div>
        {/* <div style={{paddingTop:"50%"}}> */}
            {/* <Mission/> */}
{/*  */}
        {/* </div> */}



        </div>
    )
}

export default WorkSection;