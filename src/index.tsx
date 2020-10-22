import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/es';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

const init = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

export { App, init };
