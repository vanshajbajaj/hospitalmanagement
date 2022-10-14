import React, { useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function validateForm() {

        return email.length > 0 && password.length > 0;

    }
    function handleSubmit(event) {

        event.preventDefault();

    }

    return (

        <div id="loginmain">

            <div id="loginmid">

                <div id="logintext">
                    <h1 id="loginhead">Login</h1>
                </div>

                <div id="loginform">
                    {/* <form>
                        <table id="logintable">
                            <tr>
                                <td>
                                    Enter your Email:
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Enter your password:
                                </td>
                                <td>
                                    <input type="password" />
                                </td>
                            </tr>
                        </table>
                    </form> */}
                    <Form onSubmit={handleSubmit} id="formm">
                        <table>
                            <tr>
                                <Form.Group className="mb-3" controlId="email">

                                <td>
                                    <Form.Label className="fl">Email:</Form.Label>
                                </td>
                                <td><Form.Control className="fc"

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
                                <td><Form.Label className="fl">Password:</Form.Label></td>
                                <td><Form.Control className="fc"

                                    placeholder="Enter password"

                                    type="password"

                                    value={password}

                                    onChange={(e) => setPassword(e.target.value)}

                                /></td>




                                </Form.Group>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <Button id="fb" block className="mb-3" type="submit" disabled={!validateForm()}>

                                        Login

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

export default Login;