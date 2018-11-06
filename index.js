import React from 'react'
import { AppRegistry } from 'react-native';
import {Provider } from 'react-redux'
import App from './App';
import config from './src/ReduxStore/Store/storeConfiguration'

const store = config();
const MyRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('FullRedux', () => MyRedux);
