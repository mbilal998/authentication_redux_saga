import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { logIn } from '../redux/actions/authenticate';

export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    async function hundleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            const loginuser = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }

            // TODO:: map dispatch to props
            // TODO:: map state to props

            // TODO:: Redux sauce

            dispatch(logIn(loginuser))

            setTimeout(() => {
                history.push('/');
            }, 2000)

        } catch {
            setError("Faild to log in");
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center'>Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={hundleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-3"><Link to="/forget-password">Forget Password</Link></div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/Signup'>Sign Up</Link>
            </div>
        </>
    )
}
