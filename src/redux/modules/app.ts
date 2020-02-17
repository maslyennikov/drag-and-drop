import { AnyAction } from "redux";

import initialStore from '../initialStore';
import { Layout } from 'react-grid-layout';

/** Actions */
export const SET_ACTIVE_CONFIGURATION_LAYOUT = "app/SET_ACTIVE_CONFIGURATION_LAYOUT";

/** Action Creators */
export const setActiveConfigurationLayout = (activeConfigurationLayout: Layout[]): AnyAction => ({
    type: SET_ACTIVE_CONFIGURATION_LAYOUT,
    payload: activeConfigurationLayout
});

/** Reducer */
const app = (state: any = initialStore.app, action: AnyAction) => {
    switch (action.type) {
        case SET_ACTIVE_CONFIGURATION_LAYOUT:
            return {
                ...state,
                activeConfigurationLayout: action.payload
            };
        default:
            return state;
    }
};

export default app;
