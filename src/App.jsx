import { Routes, Route } from 'react-router-dom';
// Components
import Layout from './components/layout';
// Pages
import { Biography, Main, AboutGame, Contacts } from './pages';
// Consts & Styles
import { Path } from './utils/types';


function App() {

  return (
    <Routes>
      <Route path={Path.MAIN} element={<Layout />}>
        <Route index                  element={<Main />} />
        <Route path={Path.BIO}        element={<Biography />} />
        <Route path={Path.BIO_ID}     element={<Biography />} />
        <Route path={Path.ABOUT_GAME} element={<AboutGame />} />
        <Route path={Path.CONTACTS}   element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default App;
// git checkout -b homework-5 && 
// git add . && git commit - m "homework-5" && git push - u origin homework - 5
