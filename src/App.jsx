import { useState } from 'react';
// Components
import Container from './components/container';
import Header from './components/header';
import Slider from './components/slider';
import Footer from './components/footer';
import Heading from './components/heading';
import CharacterCard from './components/character-card';
import Biography from './pages/biography';
// Consts & Styles
import { CHARACTERS } from './assets/characters.js';
import s from './App.module.scss';



function App() {

  const [characters, setCharacters] = useState(CHARACTERS);


  const [bioId, setBioId] = useState(null);

  const handleRead = (id) => setBioId(id);
  const handleBack = () => setBioId(null);

  const handleLike = (id) => {
    setCharacters(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isLike: !item.isLike
        }
      }
      return item
    }));
  };

  let content;
  if (bioId) content = <Container>
    <Biography id={bioId} onBackClick={handleBack} />
  </Container>

  else content = <>
    <Slider />

      <section className={s.cardSection}>
        <Container>
          <div className={s.cardTitle}>
            <Heading backLine>
              Marvel Cards
            </Heading>
            <Heading level={2}>
              Collect your best five
            </Heading>
          </div>

          <div className={s.cardWrap}>
            {
              characters?.map(item => <div key={item.id}>
                <CharacterCard
                  id          = {item.id}
                  name        = {item.name}
                  src         = {item.thumbnail.path}
                  description = {item.description}
                  humanName   = {item.humanName}
                  isLike      = {item.isLike}
                  onLike      = {handleLike}
                  onRead      = {handleRead}
                />
              </div>)
            }       
          </div>
        </Container>
      </section>
      <Footer />
  </>

  return (
    <div className="App">
      <Header />
      {content}
    </div>
  );
}

export default App;
// git add . && git commit -m "start 4 lesson" && git push -u origin lesson-3-1
