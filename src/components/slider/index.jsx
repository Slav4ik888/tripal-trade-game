import { useState } from 'react';
// Components
import Heading from '../heading';
import Container from '../container';
import Button from '../btns/button';
// Styles & Consts & Types
import logoPng from '../../assets/logo.png';
import s from './index.module.scss';
import { btnType } from '../../utils/types';


const bgStyle = {
  background: `url(${logoPng}) center no-repeat`,
};
  

const Slider = () => {


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
          <Button type={btnType.forward} onClick={() => {}} />
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
