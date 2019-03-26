import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Admin from './admin'

ReactDOM.render(<Admin />, document.getElementById('root'));
serviceWorker.unregister();
