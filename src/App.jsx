import { Routes, Route } from 'react-router-dom';
// Components
import Layout from './components/layout';
// Pages
import { Biography, Main } from './pages';
// Consts & Styles
import { Path } from './utils/types';


function App() {

  return (
    <Routes>
      <Route path={Path.MAIN} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={Path.BIO_ID}  element={<Biography id={1011334} />} />
      </Route>
      {/* <Route path="/contacts" element={} /> */}
    </Routes>
  )
  
}

export default App;
// git checkout -b homework-5 && git add . && git commit -m "start homework-5" && git push -u origin homework-5
