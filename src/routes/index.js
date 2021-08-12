import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Countdown from '../pages/contador';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Dashboard} path="/" exact />
            <Route component={Countdown} path="/countdown" />
        </BrowserRouter>
    )
}

export default Routes;