import React from "react";
import "./About.css";
import logo2 from "./../logos/MyWorld-logos_white.png"
import d1 from "./../logos/r12.png";
import d3 from "./../logos/j12.png";
import d2 from "./../logos/r11.jpg";

const About = () => {

    // if (window.performance) {
    //     if (performance.navigation.type == 1) {
    //     //   alert( "This page is reloaded" );
    //     document.getElementById("logopopupmain").style.display="flex";
    //     } else {
    //       alert( "This page is not reloaded");
    //     }
    //   }

    return (

        <div id="homemain">

            {/* <div id="logopopupmain">

                <div id="logopopup">
                    <img src={logo2} id="logopop" />
                </div>

            </div> */}
            <div id="introtext1">
                {/* <img id="logomid" src={logo2} /> */}
                <h1>
                    About us
                </h1>
                {/* <h3 className="midintrotext">
                    This website is my ST4 project and contains CRUD operations using json server.
                </h3> */}
                <div id="introdata">
                    <div className="cards">
                        <div className="leftlogoo cardtext">
                            {/* <img src={d1} className="midtextimg" /> */}
                            <span className="texttt">This website is St4 project for students of chitkara university.
                            it contains sample data and some images. we can switch between pages using routing.
                            Routing is done by using useNavigate feature. </span>
                        </div>
                        <div className="righttextt cardtext">
                            <span className="texttt">This website is made using react and contains CRUD features.
                            We are using json server to create, read, update and delete data from our json file.
                            axios is using Post and Get from api to access data. </span>
                        </div>
                    </div>
                    <div className="cards">
                        {/* <div className="leftlogoo cardtext">
                            <span className="texttt">SpaceX's Starship spacecraft and Super Heavy rocket collectively referred to as Starship
                             represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit,
                              the Moon, Mars and beyond. </span>
                        </div> */}
                        <div className="righttextt" style={{margin:'auto'}}>
                            <img src={d2} className="midtextimg" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="leftlogoo">
                            <img src={d1} className="midtextimg" />
                        </div>
                        <div className="righttextt cardtext">
                            <span className="texttt">React is a JavaScript library for building user interfaces.
                            React is used to build single-page applications.
                            React allows us to create reusable UI components. </span>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="leftlogoo cardtext">
                            <span className="texttt">The JSON format is syntactically similar to the code for creating 
                            JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.
                            Since the format is text only, JSON data can easily be sent between computers
                            , and used by any programming language.</span>
                        </div>
                        <div className="righttextt">
                            <img src={d3} className="midtextimg" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default About;