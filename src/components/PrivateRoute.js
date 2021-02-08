import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from 'react-redux'

export default function PrivateRoute({ history, component: Component, ...rest }) {

    console.log("I am Here ", history);

    const currentUser = useSelector(state => state.current_main.currentUser);
    // TODO:: Connected React Router
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser.uid ? <Component {...props} /> : <Redirect to="/login" />
            }}
        ></Route>
    )
}
