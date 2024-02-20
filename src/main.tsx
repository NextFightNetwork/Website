import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/css/global.css'
import { BrowserRouter } from 'react-router-dom';
import './assets/css/3D-card.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)

const script = document.createElement('script');
script.src = '/src/assets/scripts/hover-3D.js';
document.body.appendChild(script);