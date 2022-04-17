import Container from '../container';
import s from './index.module.css';

const Footer = () => {

  return (
    <footer className={s.root}>
      <Container>
        <div className={s.footerWrap}>
          Coded with
          <span className={s.heart}></span>
          by You
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
