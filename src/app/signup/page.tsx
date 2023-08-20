"use client";
// FrontEnd part
// Login Page
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
//import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'
import { deleteCookie, getCookie } from 'cookies-next'
import axios from 'axios'
import { Button, Card, Col, Container, Form, InputGroup, Row, } from 'react-bootstrap'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        username: "",
        password: "",
    //  this
    })
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)

    const getRedirect = () => {
        const redirect = getCookie('redirect')
        if (redirect) {
          deleteCookie('redirect')
          return redirect.toString()
        }
    
        return '/'
    }

    // const onSignup = async () => {}

    const register = async (e: SyntheticEvent) => {
        e.stopPropagation()
        e.preventDefault()
    
        setSubmitting(true)
    
        const res = await axios.post('api/mock/login')
        if (res.status === 200) {
          router.push(getRedirect())
        }
        setSubmitting(false)
    }

    return (
        // <div className="flex flex-col items-center justify-center min-h-screen py-2">
        //     <Container>
        //         JAI HO

        //     </Container>
        //     <h1 className=""> SignUp Page </h1>
        //     <hr/>
            
        //     <label htmlFor="username"> USERNAME: </label>
        //     <input className="p-2 border border-gray-300rounded-lg mb-6 focus:outline-none focus:border-gray-600" id="username" type="text" onChange={(e) => setUser({...user, username: e.target.value})} />
        //     <label htmlFor="password"> PASSWORD: </label>
        //     <input className="p-2 border border-gray-300rounded-lg mb-6 focus:outline-none focus:border-gray-600" id="password" type="password" onChange={(e) => setUser({...user, password: e.target.value})}/>
        //     <hr/>
        //     <button
        //         onClick={register} 
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"> 
        //         Signup 
        //     </button>
            
        //     <div className="p-4 border">
        //         <Link href="/login">Visit login</Link> <br/>
        //     </div>
        //     // bg-light min-vh-100 d-flex flex-row align-items-center
        // </div>

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card className="mb-4 rounded-5 border">
                            <Card.Body className="p-6">
                                <h1>Register</h1>
                                <p className="text-black-50">Create your account</p>

                                <form onSubmit={register}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text><FontAwesomeIcon icon={faUser} fixedWidth /></InputGroup.Text>
                                        <Form.Control
                                        name="username"
                                        required
                                        disabled={submitting}
                                        placeholder="Username"
                                        aria-label="Username"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                                        </InputGroup.Text>
                                        <Form.Control
                                        type="email"
                                        name="email"
                                        required
                                        disabled={submitting}
                                        placeholder="Email"
                                        aria-label="Email"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text><FontAwesomeIcon icon={faLock} fixedWidth /></InputGroup.Text>
                                        <Form.Control
                                        type="password"
                                        name="password"
                                        required
                                        disabled={submitting}
                                        placeholder="Password"
                                        aria-label="Password"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text><FontAwesomeIcon icon={faLock} fixedWidth /></InputGroup.Text>
                                        <Form.Control
                                        type="password"
                                        name="password_repeat"
                                        required
                                        disabled={submitting}
                                        placeholder="Repeat password"
                                        aria-label="Repeat password"
                                        />
                                    </InputGroup>

                                    <Button type="submit" className="p-1 border" disabled={submitting} variant="success">
                                        Create Account
                                    </Button>

                                    {/* Make a link to login here */}
                                    <div className="p-1">
                                        <Link className="p-1 border" href="/login">Login now</Link>
                                    </div>                                
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}