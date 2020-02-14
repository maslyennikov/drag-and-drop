import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LayoutView from "../views/LayoutView";
import ConfigurationView from "../views/ConfigurationView";

const RouterConfig = () => (
    <Router>
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
    </Router>
);

export default RouterConfig;
