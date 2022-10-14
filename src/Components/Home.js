import React from "react";
import "./Home.css";
import logo2 from "./../logos/MyWorld-logos_white.png"
import d1 from "./../logos/dummy1.legacy";
import d2 from "./../logos/dummy2.jpg";

const Home = () => {

    return (

        <div id="homemain">

            <div id="logopopupmain">

                <div id="logopopup">
                    <img src={logo2} id="logopop" />
                </div>

            </div>
            <div id="introtext">
                <img id="logomid" src={logo2} />
                <h1>
                    Welcome to MyWorld
                </h1>
                <h3 className="midintrotext">
                    This website is my ST4 project and contains CRUD operations using json server.
                </h3>
                <div id="introdata">
                    <div className="cards">
                        <div className="leftlogoo">
                            <img src={d1} className="midtextimg" />
                        </div>
                        <div className="righttextt cardtext">
                            <span className="texttt">Falcon Heavy is the most powerful operational rocket in the world by a factor
                                of two. With the ability to lift into orbit nearly 64 metric tons 141,000 lb Falcon Heavy can lift more
                                than twice the payload of the next closest operational vehicle, the Delta IV Heavy. </span>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="leftlogoo cardtext">
                            <span className="texttt">SpaceX's Starship spacecraft and Super Heavy rocket collectively referred to as Starship
                             represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit,
                              the Moon, Mars and beyond. </span>
                        </div>
                        <div className="righttextt">
                            <img src={d2} className="midtextimg" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="leftlogoo">
                            <img src={d1} className="midtextimg" />
                        </div>
                        <div className="righttextt cardtext">
                            <span className="texttt">Falcon Heavy is the most powerful operational rocket in the world by a factor
                                of two. With the ability to lift into orbit nearly 64 metric tons 141,000 lb Falcon Heavy can lift more
                                than twice the payload of the next closest operational vehicle, the Delta IV Heavy. </span>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="leftlogoo cardtext">
                            <span className="texttt">SpaceX's Starship spacecraft and Super Heavy rocket collectively referred to as Starship
                             represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit,
                              the Moon, Mars and beyond. </span>
                        </div>
                        <div className="righttextt">
                            <img src={d2} className="midtextimg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Home;