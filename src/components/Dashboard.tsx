import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/actions/authenticate";

export default function Dashboard() {
  const [error, setError] = useState("");

  const currentUser = useSelector(
    (state: any) => state.current_main.currentUser
  );

  const history = useHistory();
  const dispatch = useDispatch();

  async function handleLogout() {
    setError("");
    try {
      dispatch(logOut(currentUser));
      history.push("/login");
    } catch {
      setError("Faild to Log out");
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
