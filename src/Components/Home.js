import React from "react";
import "./Home.css";
import logo2 from "./../logos/myhealthtransp.png"
import d1 from "./../logos/hosp6.jpg";
import d2 from "./../logos/hosp7.jpg";
import d3 from "./../logos/hosp8.jpg";
import d4 from "./../logos/hosp9.jpg";
import d5 from "./../logos/hosp10.jpg";
import { useNavigate } from "react-router-dom";
import opt1 from "./../logos/opt1.png";
import opt2 from "./../logos/opt2.png";
import opt3 from "./../logos/opt3.png";
import opt4 from "./../logos/opt4.png";
import opt5 from "./../logos/opt5.png";


const Home = () => {

    let navigate = useNavigate();

    return (

        <div id="homemain">

            <div id="logopopupmain">

                <div id="logopopup">
                    <img src={logo2} id="logopop" />
                    <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h3 class="animate-charcter">MyHealth Hospital</h3>
                                </div>
                            </div>
                        </div>
                    {/* <video src={logovid} id="logopop" /> */}
                </div>

            </div>
            <div id="introtext2">
                {/* <img id="logomid" src={logo2} /> */}
                {/* <h1>
                    Welcome to MyWorld
                </h1>
                <h3 className="midintrotext">
                    This website is my ST4 project and contains CRUD operations using json server.
                </h3> */}

                <div id="midimgsample">

                    <div id="samplerighttext">

                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h3 class="animate-charcter">Welcome<br />to<br /> MyHealth Hospital</h3>
                                </div>
                            </div>
                        </div>
                        <div id="righttextbuttons">

                            <button className="righttextbt" onClick={() => { navigate("/login"); }}>
                                LOGIN
                            </button>
                            <button className="righttextbt" onClick={() => { navigate("/contact"); }}>
                                CONTACT US
                            </button>

                        </div>

                    </div>

                </div>

                <div id="specialitydiv">

                    <span className="texttmidhead">OUR SPECIALITIES</span>
                    <div id="specialitydivblock">

                        <div className="carddspecial">
                            <div className="specialitydivopt">
                                <img className="specialityimg" src={opt1} />
                            </div>
                            <span className="cardtext2">Cardiology</span>
                        </div>

                        <div className="carddspecial">
                            <div className="specialitydivopt">
                                <img className="specialityimg" src={opt2} />
                            </div>
                            <span className="cardtext2">Kidney Transplant</span>
                        </div>

                        <div className="carddspecial">
                            <div className="specialitydivopt">
                                <img className="specialityimg" src={opt3} />
                            </div>
                            <span className="cardtext2">Liver Transplant</span>
                        </div>

                        <div className="carddspecial">
                            <div className="specialitydivopt">
                                <img className="specialityimg" src={opt4} />
                            </div>
                            <span className="cardtext2">X-Ray</span>
                        </div>

                        <div className="carddspecial">
                            <div className="specialitydivopt">
                                <img className="specialityimg" src={opt5} />
                            </div>
                            <span className="cardtext2">Bone Fracture</span>
                        </div>

                    </div>

                </div>

                <div id="introdata2">
                    <div className="cards2" id="cardshead">
                        <span className="texttmidhead">CLINICAL EXCELLENCE</span>
                    </div>
                    <div className="cards2" id="cardshead1">
                        <div className="leftlogoo2">
                            <img src={d1} className="midtextimg2" />
                        </div>
                        <div className="righttextt2 cardtextt2 cardtextt23">
                            <span className="headd23">Great Doctors</span>
                            <span className="texttt23">The job of a Doctor is to find out what the disease of
                                a person us to provide medicines and treatments accordingly. There are various kinds
                                of doctors. Some specialize in heart medication, while some specialize in children’s
                                diseases. </span>
                        </div>
                    </div>
                    <div className="cards2" id="cardshead2">
                        <div className="leftlogoo2 cardtextt2 cardtextt32">
                            <span className="headd32">Healthy Atmosphere</span>
                            <span className="texttt32">A safe hospital environment is considered to be an
                                environment in which the comfort and safety of both patients and medical staff
                                of a health facility is provided. Such an environment is created by events of
                                a certain nature: Infection safety mode. Ensuring patient hygiene. </span>
                        </div>
                        <div className="righttextt2" >
                            <img src={d2} className="midtextimg2" />
                        </div>
                    </div>
                    <div className="cards2" id="cardshead3">
                        <div className="leftlogoo2">
                            <img src={d3} className="midtextimg2" />
                        </div>
                        <div className="righttextt2 cardtextt2 cardtextt23">
                            <span className="headd23">Friendly Staff</span>
                            <span className="texttt23">There are many people who contribute to your care while
                                you are in hospital. Numerous people and services work together to provide you with
                                successful treatment in a hospital, from medical assessments and daily treatment
                                to medication and catering. </span>
                        </div>
                    </div>
                    <div className="cards2" id="cardshead4">
                        <div className="leftlogoo2 cardtextt2 cardtextt32">
                            <span className="headd32">Excellent Record</span>
                            <span className="texttt32">A good medical record serves the interest of the medical
                                practitioner as well as his patients. It is very important for the treating doctor
                                to properly document the management of the patient under his care. </span>
                        </div>
                        <div className="righttextt2">
                            <img src={d4} className="midtextimg2" />
                        </div>
                    </div>
                </div>

                <div id="testimonydiv">

                    <div id="testhead">
                        Our Patients Speak
                    </div>

                    <div id="testmain">

                        <div id="testimg">
                            <img src={d5} id="testimg1" />
                        </div>
                        <div id="testrev">

                            <div className="testrevcard">
                                <span className="revcardhead">
                                    Mr Arun Kumar
                                </span>
                                <span className="revcardadd">
                                    Businessman,Mumbai
                                </span>
                                <span className="revcardtext">
                                    I was suffering from skin cancer.I contacted many doctors but they refused to
                                    treat me as my condition was not so well.then i approached MyHealth Hospital and
                                    now it's been 2 years since i've recovered from cancer.
                                </span>
                            </div>

                            <div className="testrevcard">
                                <span className="revcardhead">
                                    Mrs Rashmi Kapoor
                                </span>
                                <span className="revcardadd">
                                    Influencer,Hyderabad
                                </span>
                                <span className="revcardtext">
                                    I was suffering from skin cancer.I contacted many doctors but they refused to
                                    treat me as my condition was not so well.then i approached MyHealth Hospital and
                                    now it's been 2 years since i've recovered from cancer.
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    );

}

export default Home;