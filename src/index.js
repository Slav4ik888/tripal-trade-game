 import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { CharactersProvider } from './components/characters/context';
import './index.css';
import App from './App';
// import { AppDemoContext } from './demo/hooks';
import { AuthProvider } from './components/auth/context';
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          {/* <CharactersProvider> */}
            <App />
          {/* </CharactersProvider> */}
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// json-server --watch db.json --port 4000
// git add . && git commit -m "redux-toolkit-query" && git push -u origin master
