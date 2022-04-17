import { useState } from 'react';
import Heading from '../heading';
import Container from '../container';
import logoPng from '../../assets/logo.png';
import s from './index.module.scss';

const bgStyle = {
  background: `url(${logoPng}) center no-repeat`,
};
  

const Slider = () => {

  const [slide, setSlide] = useState(0);

  const handleClick = () => {
    setSlide(prev => ++prev);
  };

  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          <Heading>
            Это заголовок!
          </Heading>

          <Heading level={2} black>
            Wow.Wow.Wow
          </Heading>

          <div className={s.image} style={bgStyle}>
            
          </div>
          <div className={s.call}>
            <button className={s.button} onClick={handleClick}>Wow {slide}</button>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Slider;

// Это чтобы не забыть...
// import { ReactComponent as Logo } from '../../assets/logo.svg';
// <img src={logoPng} alt="logo" />
// <Logo /> 
