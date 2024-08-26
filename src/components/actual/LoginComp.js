// LoginComp.js

import React from 'react';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import styles from '../../css/myfile.module.css'; // Adjust the path to your CSS module
const LoginComp = () => {
    return (
        <div className={`${styles.loginContainer}`}>
            <Row className="d-flex align-items-center justify-content-between">
                {/* Left side */}
                <Col md={5} className={`${styles.leftContent}`}>
                    <h4 className="mb-4">Welcome to PSL PlayBook!Please Login</h4>
                    <div>
                    New member? <a href="/signup">Register</a> here
                    </div>
                </Col>
            </Row>
            <Row style={{backgroundColor:"#E8F1F4",padding:"35px"}}>
                
                    <Col md={6} className={`${styles.centeredcontent}`}>
                        
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold p-2">Phone or Email*</Form.Label>
                            <Form.Control type="text" placeholder="Enter your phone or email" className={`${styles.inputField}`} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="font-weight-bold p-2">Password*</Form.Label>
                            <Form.Control type="password" placeholder="Password" className={`${styles.inputField}`} />
                        </Form.Group>
                        <div className={`${styles.socialButtons}`}>
                            <button  type="submit" className={`${styles.loginButton}`}>
                                Login
                            </button>

                            
                        </div>
                        </Form>
                       
                        
                    
                </Col>
               
            </Row>
        </div>
    );
};

export default LoginComp;
