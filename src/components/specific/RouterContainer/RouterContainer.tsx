import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ConfigurationView from '../../../views/ConfigurationView';
import LayoutView from '../../../views/LayoutView';
import { routes } from '../../../config';

const RouterContainer = () => (
    <BrowserRouter>
        <Switch>
            <Route
                path={routes.configuration}
                render={ConfigurationView}
            />
            <Route
                path={routes.layout}
                render={LayoutView}
            />
        </Switch>
    </BrowserRouter>
);

export default RouterContainer;
