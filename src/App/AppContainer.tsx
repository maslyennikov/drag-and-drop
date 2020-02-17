import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import store from '../redux/configureStore';

const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default AppContainer;
