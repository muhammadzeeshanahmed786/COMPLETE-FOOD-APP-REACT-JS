import React from "react";
import "./mission.css";
import section9 from "./section9.jpg";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
function Mission() {
    return (
        <div
            className="col-sm-8 col-xs-12"
            style={{ marginLeft: "450px" ,boxSizing:"border-box"}}
        >
            <div
                className="half-content-custom"
                style={{
                    borderRadius: "7px",
                    marginTop: "100px",
                    // paddingRight: "-60%",
                    width: "750px",
                    height: "350px",
                    background: "white",
                    boxShadow: "0px 0px 20px rgb(0 0 0/10%)",
                    top: "50%",
                    left: "30%",
                }}
            >
                <h1 className="head" style={{ paddingLeft: "50px", paddingTop: "50px", fontSize: "50px", color: "#030403", lineHeight: "50px", fontFamily: "avenirRegular, sans-serif" }}>Get Started<br />
                    With a Healthier You</h1>
                <p style={{ paddingLeft: "50px", paddingTop: "20px", fontSize: "20px", color: "#030403", fontFamily: "avenirRegular, sans-serif" }}>The convenience of a well prepared, healthy, flavorful meal with no <br /> shopping, preparing, or clean up is a total game changer for your lifestyle!</p>
                <span style={{ paddingLeft: "50px" }}>
                    <Button style={{ width: "15rem", backgroundColor: "#8ED444", marginBottom: "100px", color: "#fff", fontSize: "1.5rem", fontFamily: "avenirRegular,sens-serif" }}>
                        <Link to='/Sign-Up' style={{textDecoration:"none",color:"white"}}>Sign Up Now</Link>
                    </Button>

                </span>
                <img 
                        className="img"

                    style={{
                        width: "95%",
                        // borderRadius:"10px",
                        height: "500px",
                        backgroundSize: "100%",
                        marginLeft: "-90%",
                        position: "relative",
                        marginTop: "-45%",
                        zIndex: "-1",
                    }}
                    src={section9}
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
