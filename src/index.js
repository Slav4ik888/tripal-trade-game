import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CharactersProvider } from './components/context';
import './index.css';
import App from './App';
// import { AppDemoContext } from './demo/hooks';




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CharactersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CharactersProvider>
  </React.StrictMode>
);

// git add . && git commit -m ""