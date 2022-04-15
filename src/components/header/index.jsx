import Container from '../container';
import logo from '../../assets/logo_s.png';
import s from './index.module.css';


const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.header}>
        <Container className={s.headerWrap}>
          <img src={logo} alt="logo" className={s.logo} />
          <ul className={s.nav}>
            {
              MENU.map(item => <li key={item}><a href="#">{item}</a></li>)
            }
          </ul>
        </Container>
      </div>
    </header>
  )
};

export default Header;
