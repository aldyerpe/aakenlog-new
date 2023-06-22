import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const rootElement = document.getElementById('aakenlog');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
