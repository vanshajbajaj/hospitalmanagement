import React from "react";
import "./View.css";

const View = () => {

    return (

        <div id="viewmaindiv">

            <div id="viewmiddiv">

                <div id="viewmidleft" className="viewmidimg">
                    <img src={ localStorage.getItem('image') } alt={'C - language'} id="viewimg" />
                </div>

                <div id="viewmidright" className="viewmidimg">

                    <span id="viewtitle">{localStorage.getItem('title')}</span>
                    <span id="viewcomment">{localStorage.getItem('message')}</span>

                </div>

            </div>

        </div>

    );

}

export default View;