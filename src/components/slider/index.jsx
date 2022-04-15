import Heading from '../heading';
import Container from '../container';

import logoPng from '../../assets/logo.png';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import s from './index.module.css';


const Slider = () => {

  const bgStyle = {
    background: `url(${logoPng}) center no-repeat`,
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
            {/* <img src={logoPng} alt="logo" /> */}
            {/* <Logo /> */}
          </div>
          <div className={s.call}>
            <button className={s.button}>Wow</button>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Slider;
