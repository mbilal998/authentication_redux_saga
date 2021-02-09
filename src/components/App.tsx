import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "./ForgetPassword";
import UpdateProfile from "./UpdateProfile";

import { history } from "../redux/store";
import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <ConnectedRouter history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/forget-password">
                <ForgetPassword />
              </Route>
            </Switch>
          </ConnectedRouter>
        </div>
      </Container>
    </>
  );
}

export default App;
