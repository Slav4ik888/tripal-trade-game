import { Routes, Route } from 'react-router-dom';
// Components
import Layout from './components/layout';
// Pages
import { Biography, Main, AboutGame, Contacts, Characters } from './pages';
import NotFound from './pages/not-found';
// Consts & Styles
import { Path } from './utils/types';


function App() {

  return (
    <Routes>
      <Route path={Path.MAIN} element={<Layout />}>
        <Route index                     element={<Main />} />
        <Route path={Path.CHARACTERS}    element={<Characters />} />
        <Route path={Path.CHARACTERS_ID} element={<Biography />} />
        <Route path={Path.ABOUT_GAME}    element={<AboutGame />} />
        <Route path={Path.CONTACTS}      element={<Contacts />} />
        <Route path="*"                  element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App;
// git checkout -b homework-6 && 
// git add . && git commit -m "end homework-6" && git push -u origin homework-6
