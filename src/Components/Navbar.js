import React from "react";
import "./Navbar.css";
import logo1 from "./../logos/MyWorld-logos_white.png";
import { Outlet, Link, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import midlogo2 from "./../logos/myhealthtransp.png"

const Navbar = () => {

    let navigate = useNavigate();
    return (

        // <div id="navmain">

        //     <div id="logodiv">

        //         <div id="logoo" onClick={()=>{navigate("/");}}>
        //             <img src={logo1} id="logoimg" />
        //         </div>

        //     </div>

        //     <div id="optiondiv">

        //         <div class="options" onClick={()=>{navigate("/Home");}}>
        //             <span class="opttext" >
        //                 Home
        //             </span>
        //         </div>
        //         <div class="options" onClick={()=>{navigate("/About");}}>
        //             <span class="opttext">
        //                 About us
        //             </span>
        //         </div>
        //         <div class="options" onClick={()=>{navigate("/Contact");}}>
        //             <span class="opttext">
        //                 Contact us
        //             </span>
        //         </div>
        //         <div class="options" onClick={()=>{navigate("/all");}}>
        //             <span class="opttext">
        //                 Manage users
        //             </span>
        //         </div>
        //         <div class="options" onClick={()=>{navigate("/Login");}}>
        //             <span class="opttext">
        //                 Login
        //             </span>
        //         </div>
        //         <div class="options" onClick={()=>{navigate("/Signup");}}>
        //             <span class="opttext">
        //                 Sign up
        //             </span>
        //         </div>

        //     </div>
        // </div>
        <div id="outerrnavar">
        <div id="navbarmain2">

            <div id="navbarmainmid2">

                <div className="navbarmidopt2">
                    <span className="navbartext2" onClick={() => { navigate("/Home"); }}>HOME</span>
                </div>

                <div className="navbarmidopt2">
                    <span className="navbartext2" onClick={() => { navigate("/About"); }}>ABOUT US</span>
                </div>

                <div className="navbarmidopt2">
                    <span className="navbartext2" onClick={() => { navigate("/Contact"); }}>CONTACT US</span>
                </div>

                <div className="navbarmidopt2" id="navbarlogo2">
                    <img src={midlogo2} id="navbarlogoimg2" onClick={() => { navigate("/"); }} />
                </div>

                <div className="navbarmidopt2">
                    <span className="navbartext2" onClick={() => { navigate("/all"); }}>PATIENTS</span>
                </div>

                <div className="navbarmidopt2">
                    <span className="navbartext2" onClick={() => { navigate("/Login"); }}>LOGIN</span>
                </div>

                <div className="navbarmidopt2">
                    <span className="navbartext2" onClick={() => { navigate("/Signup"); }}>SIGN UP</span>
                </div>

            </div>
        </div>
        <marquee id="infoslider">Our emergency services are available 24/7. Contact us at 0172-2573141 for ambulance and 0172-
            4610343 for reception. For enquiries, mail us at MyHealth@gmail.com.
        </marquee>
        </div>

    );

}

export default Navbar;