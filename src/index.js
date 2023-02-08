import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {App2 as Abc2} from './App';
import Abc from './App'
import reportWebVitals from './reportWebVitals';
import { Car } from './Car';
import { Car2 } from './Car2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
