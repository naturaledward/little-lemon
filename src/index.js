// src/index.js
// ====================================================
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// install react router from project folder % npm i react-router-dom@6
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
// wrap <App /> JSX element inside <BrowserRouter>
root.render(<BrowserRouter><App /></BrowserRouter>);