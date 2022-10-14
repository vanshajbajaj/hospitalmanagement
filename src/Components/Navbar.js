import React from "react";
import "./Navbar.css";
import logo1 from "./../logos/MyWorld-logos_white.png";
import { Outlet, Link, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {

    let navigate = useNavigate();
    return (
        
        <div id="navmain">

            <div id="logodiv">

                <div id="logoo" onClick={()=>{navigate("/");}}>
                    <img src={logo1} id="logoimg" />
                </div>

            </div>

            <div id="optiondiv">

                <div class="options" onClick={()=>{navigate("/Home");}}>
                    <span class="opttext" >
                        Home
                    </span>
                </div>
                <div class="options" onClick={()=>{navigate("/About");}}>
                    <span class="opttext">
                        About us
                    </span>
                </div>
                <div class="options" onClick={()=>{navigate("/Contact");}}>
                    <span class="opttext">
                        Contact us
                    </span>
                </div>
                <div class="options" onClick={()=>{navigate("/all");}}>
                    <span class="opttext">
                        Manage users
                    </span>
                </div>
                <div class="options" onClick={()=>{navigate("/Login");}}>
                    <span class="opttext">
                        Login
                    </span>
                </div>
                <div class="options" onClick={()=>{navigate("/Signup");}}>
                    <span class="opttext">
                        Sign up
                    </span>
                </div>

            </div>
        </div>

    );

}

export default Navbar;