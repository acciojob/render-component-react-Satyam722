import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for modern React 18+
import App from './App';
import './styles/index.css'; // Optional: for basic styling

// 1. Find the DOM element where the React component will be mounted.
const rootElement = document.getElementById('root');

// 2. Use ReactDOM.createRoot() for modern React mounting (required by the prompt).
const root = ReactDOM.createRoot(rootElement);

// 3. Render the App component inside the root element.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
