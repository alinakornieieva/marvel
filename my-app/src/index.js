import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import MarvelService from './services/MarvelService';

// let service = new MarvelService()
// service.getCharacter(1011196).then((res) => console.log(res))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
