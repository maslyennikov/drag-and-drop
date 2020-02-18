import { createSelector } from "reselect";

import IStore, { App } from '../store';

export const getApp = (store: IStore) => store.app;

export const getActiveConfigurationLayout = createSelector(getApp, (app: App) =>
    app.activeConfigurationLayout
);

export const getConfigurationComponents = createSelector(getApp, (app: App) =>
    app.configurationComponents
);
