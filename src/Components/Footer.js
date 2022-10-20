import React from "react";
import "./Footer.css";
import logo2 from "./../logos/myhealthtransp.png";
import l1 from "./../logos/twitter.png";
import l2 from "./../logos/instagram.png";
import l3 from "./../logos/facebook.png";
import l4 from "./../logos/linkedin.png";

const Footer = () => {

    return (

        <div id="footermain">

            <div id="footerleft" className="fdiv">

                <div id="footerimg2">
                    <img src={logo2} id="logopop" />
                </div>
                <div id="midline">

                </div>
                <h3 id="footerlogotext">
                    Chandigarh-Patiala National Highway NH-64 <br />
                    Punjab- 140 401, India
                </h3>

            </div>

            <div id="footermid" className="fdiv">

                <div id="footermidhead">
                    Our Locations
                </div>
                <div id="footermidtext">
                    <span>Chandigarh</span>
                    <span>Delhi</span>
                    <span>Mumbai</span>
                    <span>Gurgaon</span>
                    <span>Amritsar</span>
                    <span>Kashmir</span>
                    <span>Chennai</span>
                    <span>Kolkata</span>
                </div>


            </div>

            <div id="footerright" className="fdiv">

                <div id="footerinp">
                    <span>Send us an Email</span>
                    <input id="fmail" type="text" placeholder="Enter your email" />
                    <button id="fbutton">Subscribe</button>

                </div>

                <div id="flogos">

                    <img src={l1} className="flogoimg"></img>
                    <img src={l2} className="flogoimg"></img>
                    <img src={l3} className="flogoimg"></img>
                    <img src={l4} className="flogoimg"></img>

                </div>

            </div>

        </div>

    );

}

export default Footer;