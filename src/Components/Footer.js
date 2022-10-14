import React from "react";
import "./Footer.css";
import logo2 from "./../logos/MyWorld-logos_white.png";
import l1 from "./../logos/twitter.png";
import l2 from "./../logos/instagram.png";
import l3 from "./../logos/facebook.png";
import l4 from "./../logos/linkedin.png";

const Footer = () => {

    return (

        <div id="footermain">

            <div id="footerleft" className="fdiv">

                <img src={logo2} id="logopop" />
                <div id="midline">

                </div>
                <h3 id="footerlogotext">
                    Chandigarh-Patiala National Highway NH-64 <br />
                    Punjab- 140 401, India
                </h3>

            </div>

            <div id="footermid" className="fdiv">

                <h3>
                    Site map
                </h3>
                <h4>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Manage users</li>
                        <li>Login</li>
                        <li>Signup</li>
                    </ul>
                </h4>

            </div>

            <div id="footerright" className="fdiv">

                <input id="fmail" type="text" placeholder="Enter your email">
                </input>

                <button id="fbutton">Subscribe</button>

                <dic id="flogos">

                    <img src={l1} className="flogoimg"></img>
                    <img src={l2} className="flogoimg"></img>
                    <img src={l3} className="flogoimg"></img>
                    <img src={l4} className="flogoimg"></img>

                </dic>

            </div>

        </div>

    );

}

export default Footer;