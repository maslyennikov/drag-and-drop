import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ConfigurationView from '../../../views/ConfigurationView';
import LayoutView from '../../../views/LayoutView';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route
                path={'/configuration'}
                render={ConfigurationView}
            />
            <Route
                path={'/'}
                render={LayoutView}
            />
        </Switch>
    </BrowserRouter>
);

export default Router;
