import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// Components
import Layout from './components/layout';
// Pages
import { LoginPage, NotFoundPage, BiographyPage, MainPage, AboutGamePage, ContactsPage, CharactersPage } from './pages';
// Consts & Styles
import { Path } from './utils/types';


function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let anchorId = document.getElementById(location.hash.slice(1));
  
      window.addEventListener(`load`, () => {
        if (anchorId) {
          anchorId.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // , center, end или nearest.
          });
        }
      }, {
        once: true
      });
    }
    else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  


  return (
    <Routes>
      <Route path={Path.MAIN} element={<Layout />}>
        <Route index                     element={<MainPage />} />
        <Route path={Path.LOGIN}         element={<LoginPage />} />
        <Route path={Path.CHARACTERS}    element={<CharactersPage />} />
        <Route path={Path.CHARACTERS_ID} element={<BiographyPage />} />
        <Route path={Path.ABOUT_GAME}    element={<AboutGamePage />} />
        <Route path={Path.CONTACTS}      element={<ContactsPage />} />
        <Route path="*"                  element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App;
// git checkout -b homework-6 && 
// git add . && git commit -m "end work-shop" && git push -u origin work-shop
