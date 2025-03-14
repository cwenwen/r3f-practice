import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import Overlay from './components/Overlay.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Overlay />
  </StrictMode>
);
