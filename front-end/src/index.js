import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ForumContextProvider } from './Context/ForumContext';
import { AuthContextProvider } from './Context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ForumContextProvider>
        <App/>
      </ForumContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


