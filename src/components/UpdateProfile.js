/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Card, Alert, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../redux/actions/authenticate';

export default function UpdateProfile() {

    const formRef = useRef();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [currentUserInformation, setCurrentUserInformation] = useState();
    const currentUser = useSelector(state => state.current_main.currentUser);
    const dispatch = useDispatch();

    useEffect(async () => {
        const response = await db.collection('users').doc(currentUser.uid).get();
        setCurrentUserInformation(response.data());
    }, [])

    function hundleSubmit(e) {

        e.preventDefault();
        if (formRef.current['password'].value !== formRef.current['password-confirm'].value) {
            return setError("Password not Match");
        }

        setLoading(true)
        setError("");

        try {
            setError('');
            const userinfo = {
                user: currentUser,
                uid: currentUser.uid,
                email: formRef.current['email'].value,
                password: formRef.current['password'].value,
                firstname: formRef.current['firstname'].value,
                lastname: formRef.current['lastname'].value,
                company: formRef.current['company'].value,
                designation: formRef.current['designation'].value,
                address: formRef.current['address'].value
            }
            setLoading(true);

            dispatch(updateProfile(userinfo))

        } catch {
            setError("Faild to create an account");
        }
        setLoading(false);
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center'>Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={hundleSubmit} ref={formRef}>
                        <Form.Row>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" id="email" required defaultValue={currentUser.email} />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" id="firstname" required defaultValue={currentUserInformation && currentUserInformation.firstname} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" id="lastname" required defaultValue={currentUserInformation && currentUserInformation.lastname} />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control type="text" id="company" required defaultValue={currentUserInformation && currentUserInformation.company} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col xs={6}>

                                <Form.Group>
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control type="text" id="designation" required defaultValue={currentUserInformation && currentUserInformation.designation} />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>

                                <Form.Group>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" id="address" required defaultValue={currentUserInformation && currentUserInformation.address} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" id="password" placeholder="Leave the blank to keep the same" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group>
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" id="password-confirm" placeholder="Leave the blank to keep the same" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Button disabled={loading} type="submit" className="w-100">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to='/'>Cancel</Link>
            </div>
        </>
    )
}
