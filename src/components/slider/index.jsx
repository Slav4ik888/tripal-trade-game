// Redux
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectValue, incrementByAmount } from '../../store/counter';
// Components
import Heading from '../heading';
import Container from '../container';
import Button from '../btns/button';
// Types & Styles
import logoPng from '../../assets/logo.png';
import s from './index.module.scss';
import { btnType } from '../../utils/types';


const bgStyle = {
  background: `url(${logoPng}) center no-repeat`,
};
  

const Slider = () => {
  const
    dispatch     = useDispatch(),
    counterValue = useSelector(selectValue);
  
  const handlerMinus = () => dispatch(decrement());
  const handlerPlus = () => dispatch(increment());
  const handlerAdd = () => dispatch(incrementByAmount(10));

  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          <Heading>
            Это заголовок!
          </Heading>

          <Heading level={2} black>
            Wow.Wow.Wow - {counterValue}
          </Heading>

          <div className={s.image} style={bgStyle}>
            
          </div>
          <div className={s.buttons}>
            <Button typeBtn={btnType.white} onClick={handlerMinus}>
              -
            </Button>
            <Button typeBtn={btnType.white} onClick={() => {}}>
              Wow
            </Button>
            <Button typeBtn={btnType.white} onClick={handlerPlus}>
              +
            </Button>
            <Button typeBtn={btnType.white} onClick={handlerAdd}>
              +10
            </Button>
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
