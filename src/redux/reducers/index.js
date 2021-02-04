import { combineReducers } from 'redux';
import signup_reducer from './signup';
import login_reducer from './login';
import currentUser_reducer from './currentUser';
import reset_reducer from './resetPassword';
import updateprofile_reducer from './updateProfile';

const rootReducers = combineReducers({
    signup_main: signup_reducer,
    login_main: login_reducer,
    current_main: currentUser_reducer,
    reset_main: reset_reducer,
    updateprofile_main: updateprofile_reducer
});

export default rootReducers;
