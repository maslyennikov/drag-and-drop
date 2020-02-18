import { AnyAction } from "redux";

import initialStore from '../initialStore';
import { Layout } from 'react-grid-layout';
import { App } from '../store';

/** Actions */
export const SET_ACTIVE_CONFIGURATION_LAYOUT = "app/SET_ACTIVE_CONFIGURATION_LAYOUT";
export const SET_CONFIGURATION_COMPONENTS = "app/SET_CONFIGURATION_COMPONENTS";

/** Action Creators */
export const setActiveConfigurationLayout = (activeConfigurationLayout: Layout[]): AnyAction => ({
    type: SET_ACTIVE_CONFIGURATION_LAYOUT,
    payload: activeConfigurationLayout
});

export const setConfigurationComponents = (configurationComponents: string[]): AnyAction => ({
    type: SET_CONFIGURATION_COMPONENTS,
    payload: configurationComponents
});

/** Reducer */
const app = (state: App = initialStore.app, action: AnyAction) => {
    switch (action.type) {
        case SET_ACTIVE_CONFIGURATION_LAYOUT:
            return {
                ...state,
                activeConfigurationLayout: action.payload
            };

        case SET_CONFIGURATION_COMPONENTS:
            return {
                ...state,
                configurationComponents: action.payload
            };

        default:
            return state;
    }
};

export default app;
