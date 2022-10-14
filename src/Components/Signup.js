import React,{useState} from "react";
import "./Signup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Signup = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [spassword, setSpassword] = useState("");
    function validateForm() {

        return email.length > 0 && password.length > 0;

    }
    function handleSubmit(event) {

        event.preventDefault();

    }

    return (

        <div id="signupmain">

            <div id="signupmid">

                <div id="signuptext">
                    <h1 id="signuphead">Sign Up</h1>
                </div>

                <div id="signupform">
                    
                    <Form onSubmit={handleSubmit} id="signupp">
                        <table>
                        <tr>
                                <Form.Group className="mb-3" controlId="name">

                                    <td>
                                        <Form.Label className="sl">Name:</Form.Label>
                                    </td>
                                    <td><Form.Control className="sc"

                                        placeholder="Enter your Name"

                                        autoFocus

                                        type="text"

                                        value={name}

                                        required

                                        onChange={(e) => setName(e.target.value)}

                                    /></td>


                                </Form.Group>
                            </tr>
                            <tr>
                                <Form.Group className="mb-3" controlId="age">

                                    <td>
                                        <Form.Label className="sl">Age:</Form.Label>
                                    </td>
                                    <td><Form.Control className="sc"

                                        placeholder="Enter your Age"

                                        autoFocus

                                        type="number"

                                        value={age}

                                        required

                                        onChange={(e) => setAge(e.target.value)}

                                    /></td>


                                </Form.Group>
                            </tr>
                            <tr>
                                <Form.Group className="mb-3" controlId="email">

                                    <td>
                                        <Form.Label className="sl">Email:</Form.Label>
                                    </td>
                                    <td><Form.Control className="sc"

                                        placeholder="Enter your email"

                                        autoFocus

                                        type="email"

                                        value={email}

                                        required

                                        onChange={(e) => setEmail(e.target.value)}

                                    /></td>


                                </Form.Group>
                            </tr>
                            <tr>
                                <Form.Group className="mb-3" controlId="password">
                                    <td><Form.Label className="sl">Password:</Form.Label></td>
                                    <td><Form.Control className="sc"

                                        placeholder="Enter password"

                                        type="password"

                                        value={password}

                                        onChange={(e) => setPassword(e.target.value)}

                                    /></td>




                                </Form.Group>
                            </tr>
                            <tr>
                                <Form.Group className="mb-3" controlId="spassword">
                                    <td><Form.Label className="sl">Confirm Password:</Form.Label></td>
                                    <td><Form.Control className="sc"

                                        placeholder="Enter password again"

                                        type="password"

                                        value={spassword}

                                        onChange={(e) => setSpassword(e.target.value)}

                                    /></td>




                                </Form.Group>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <Button id="sb" block className="mb-3" type="submit" disabled={!validateForm()}>

                                        SignUp

                                    </Button>
                                </td>
                            </tr>
                        </table>






                    </Form>
                </div>

            </div>

        </div >

    );

}

export default Signup;