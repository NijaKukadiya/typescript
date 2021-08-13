import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute: React.FC<{
    component: React.ComponentType<any>;
    path: string;
    exact: boolean;
}> = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)