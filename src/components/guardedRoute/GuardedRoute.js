import React from "react";
import {Route, Redirect} from "react-router-dom";

const GuardedRoute = ({component: Component, auth, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            auth === true ? ( //Check if there is token in LocalStorage
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        }
    />
);

export default GuardedRoute;
