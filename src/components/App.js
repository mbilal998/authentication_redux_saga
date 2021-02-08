import React from 'react';
import { Container } from 'react-bootstrap';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgetPassword from './ForgetPassword';
import UpdateProfile from './UpdateProfile';

import configureStore, { history } from '../redux/store';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <div className='w-100' style={{ maxWidth: '400px' }}>
            <ConnectedRouter history={history}>
              <Switch>
                <PrivateRoute history={history} exact path="/" component={Dashboard} />
                <PrivateRoute history={history} path="/update-profile" component={UpdateProfile} />
                <Route path='/signup'><Signup name="signup" /></Route>
                <Route path='/login'><Login name="login" /></Route>
                <Route path='/forget-password'><ForgetPassword name="forgetpassword" /></Route>
              </Switch>
            </ConnectedRouter>
          </div>
        </Container>
      </Provider>
    </>
  );
}

export default App;
