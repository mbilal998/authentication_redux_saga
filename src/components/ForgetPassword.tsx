import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { resetPassword } from "../redux/actions/authenticate";
import { useDispatch } from "react-redux";

export default function ForgetPassword() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const dispatch = useDispatch();

  async function hundleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      if (emailRef.current) {
        const userinfo = {
          email: emailRef.current.value,
        };
        setLoading(true);
        dispatch(resetPassword(userinfo));
      }
      setMessage("check your inbox for further instruction");
    } catch {
      setError("Faild to reset password");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success ">{message}</Alert>}
          <Form onSubmit={hundleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/Signup">Sign Up</Link>
      </div>
    </>
  );
}
