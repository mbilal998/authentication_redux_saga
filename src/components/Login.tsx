import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logIn } from "../redux/actions/authenticate";

function Login() {
  const formref = useRef<HTMLFormElement>(null);

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  function hundleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      if (formref.current) {
        const loginuser = {
          email: formref.current["email"].value,
          password: formref.current["password"].value,
        };
        dispatch(logIn(loginuser));
      }
    } catch {
      setError("Faild to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={hundleSubmit} ref={formref}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" id="email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id="password" required />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forget-password">Forget Password</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/Signup">Sign Up</Link>
      </div>
    </>
  );
}
export default Login;
