import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CharactersProvider } from './components/characters/context';
import './index.css';
import App from './App';
// import { AppDemoContext } from './demo/hooks';
import { AuthProvider } from './components/auth/context';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CharactersProvider>
          <App />
        </CharactersProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// git add . && git commit -m "ws" && git push -u origin master