import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/authenticate";

export default function Signup() {
  const formref = useRef<HTMLFormElement>(null);

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  async function hundleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formref.current) {
      if (
        formref.current["password"].value !==
        formref.current["password-confirm"].value
      ) {
        return setError("Password not Match");
      }
      try {
        setError("");
        const userinfo = {
          email: formref.current["email"].value,
          password: formref.current["password"].value,
          firstname: formref.current["firstname"].value,
          lastname: formref.current["lastname"].value,
          company: formref.current["company"].value,
          designation: formref.current["designation"].value,
          address: formref.current["address"].value,
        };
        setLoading(true);

        dispatch(signUp(userinfo));
      } catch {
        setError("Faild to create an account");
      }
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={hundleSubmit} ref={formref}>
            <Form.Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" id="email" required />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" id="firstname" required />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" id="lastname" required />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" id="company" required />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Designation</Form.Label>
                  <Form.Control type="text" id="designation" required />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" id="address" required />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" id="password" required />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    id="password-confirm"
                    required
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Button disabled={loading} type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/Login">Log In</Link>
      </div>
    </>
  );
}
