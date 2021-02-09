import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }: any) {
  const currentUser = useSelector(
    (state: any) => state.current_main.currentUser
  );
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser.uid ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
