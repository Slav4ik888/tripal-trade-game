import { useState } from 'react';
// Components
import Container from './components/container';
import Header from './components/header';
import Slider from './components/slider';
import Footer from './components/footer';
import Heading from './components/heading';
import ChapterCard from './components/chapter-card';
// Functions
import { updateArrWithItemByField } from './utils/update-arr-with-item-by-field';
import { getItemFromArrByField } from './utils/get-item-from-arr-by-field';
// Consts & Styles
import { CHARACTERS } from './assets/characters.js';
import s from './App.module.scss';



function App() {

  const [characters, setCharacters] = useState(CHARACTERS);

  const handleLike = (id) => {
    setCharacters(prev => {
      const item = getItemFromArrByField(prev, `id`, id);
      return updateArrWithItemByField(prev, `id`, { id, isLike: !item.isLike }, `update`)
    });
  };

  return (
    <div className="App">
      <Header />
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
                <ChapterCard
                  id          = {item.id}
                  name        = {item.name}
                  src         = {item.thumbnail.path}
                  description = {item.description}
                  humanName   = {item.humanName}
                  isLike      = {item.isLike}
                  onLike      = {handleLike}
                />
              </div>)
            }       
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;
// git add . && git commit -m "3 lesson" && git push -u origin lesson-3-1
