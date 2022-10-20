import React from "react";
import "./About.css";
import logo2 from "./../logos/MyWorld-logos_white.png"
import d1 from "./../logos/hosp5.jpg";
import d2 from "./../logos/hosp6.jpg";
import d3 from "./../logos/hosp7.jpg";
import d4 from "./../logos/hosp8.jpg";

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

        <div id="aboutmaindiv">

            <div id="abouthead2">
                <span>About Us</span>
            </div>

            <div id="aboutbackk">

                <div className="aboutuscard">

                    <div className="aboutuscardleft">
                        <img src={d1} className="aboutuscardimg" />
                    </div>
                    <div className="aboutuscardright aboutuscardtextdiv">
                        <span className="aboutuscardhead">Our Doctors</span>
                        <span className="aboutuscardtext">We have a team of highly qualified doctors who have great
                            experience and have great record history.One of the essential qualities of the clinician is
                            interest in humanity, for the secret of the care of the patient is in caring for the patient</span>
                    </div>


                </div>

                <div className="aboutuscard">

                    <div className="aboutuscardleft aboutuscardtextdiv">
                        <span className="aboutuscardhead">Experienced Staff</span>
                        <span className="aboutuscardtext">There are many people who contribute to your care while
                         you are in hospital. Numerous people and services work together to provide you with 
                         successful treatment in a hospital, from medical assessments and daily treatment to 
                         medication and catering.</span>
                    </div>
                    <div className="aboutuscardright">
                        <img src={d2} className="aboutuscardimg" />
                    </div>


                </div>

                <div className="aboutuscard">

                    <div className="aboutuscardleft">
                        <img src={d3} className="aboutuscardimg" />
                    </div>
                    <div className="aboutuscardright aboutuscardtextdiv">
                        <span className="aboutuscardhead">Patient's Experiences</span>
                        <span className="aboutuscardtext">Patient experience encompasses the range of interactions
                         that patients have with the healthcare system, including their care from health plans, and
                          from doctors, nurses, and staff in hospitals, physician practices, and other healthcare 
                          facilities.</span>
                    </div>


                </div>

                <div className="aboutuscard">

                    <div className="aboutuscardleft aboutuscardtextdiv">
                        <span className="aboutuscardhead">Patient-Friendly Atmosphere</span>
                        <span className="aboutuscardtext">patients identified having a need for personal space,
                         a homely welcoming atmosphere, a supportive environment, good physical design, access
                          to external areas and provision of facilities for recreation and leisure.</span>
                    </div>
                    <div className="aboutuscardright">
                        <img src={d4} className="aboutuscardimg" />
                    </div>


                </div>

            </div>

        </div>

    );

}

export default About;