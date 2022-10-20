import React, { Component } from "react";
import { renderMatches } from "react-router-dom";
import "./Upload.css";
// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

class Upload extends Component {

    // navigate=useNavigate('');

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const image = this.getImage.value;
        localStorage.setItem('title', title);
        localStorage.setItem('message', message);
        localStorage.setItem('image', image);
        this.getTitle.value = '';
        this.getMessage.value = '';
        this.getImage.value = '';
        // navigate("/view");
    }
    render() {
        return (

            <div id="uploadmaindiv">

                <div id="uploadmainmid">

                    <div id="uploadmidhead">
                        <span>UPLOAD IMAGE</span>
                    </div>

                    <div id="uploadmidformdiv">

                        <form id="uploadmidform" onSubmit={this.handleSubmit}  >

                            <input className="uploadmidinp titleinp" type="text" placeholder="Enter Title for image" required ref={(input) => this.getTitle = input} />
                            <input className="uploadmidinp imginp" type="text" placeholder="Enter image url" required ref={(input) => this.getImage = input} />
                            <textarea className="uploadmidinp textareainp" type="text" placeholder="Enter comments" rows="5" cols="40" required ref={(input) => this.getMessage = input} />

                            <div id="uploadmidbuttons">
                                <button type="submit" className="uploadmidbutton" >Upload</button>
                                <Link to="/View">
                                    <button type="button" className="uploadmidbutton" >View Image</button>
                                </Link>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        );
    }

}

export default Upload;