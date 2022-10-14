import React from "react";
import "./Contact.css";
import p1 from "./../logos/phone1.png";
import a1 from "./../logos/address.png";
import e1 from "./../logos/email.png";

const Contact = () => {

    return (

        <div id="contactmain">

            <div id="contactmid">

                <div id="midleft">

                    <div className="google-map-code">
                        <iframe src="https://maps.google.com/maps?q=chitkara%20university&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>

                </div>
                <div id="midright">

                    <div id="contacttext">
                        <span className="contacthead">
                            Meet us
                        </span>
                        <span className="contactdesc">
                            <img className="contacticon" src={p1} />  8427539799
                        </span>
                        <span className="contactdesc">
                            <img className="contacticon" src={e1} />  admissions@chitkara.edu.in
                        </span>
                        <span className="contactdesc">
                            <img className="contacticon" src={a1} />  Chandigarh-Patiala National Highway NH-64 <br />
                            Punjab- 140 401, India
                        </span>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default Contact;