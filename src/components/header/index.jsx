import { useEffect, useState } from 'react';
import cn from 'classnames';
import Container from '../container';
import logo from '../../assets/logo_s.png';
import s from './index.module.scss';


const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];


const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const scrollFunc = () => window.pageYOffset >= 60 ? setSmall(true) : setSmall(false);
    window.addEventListener(`scroll`, scrollFunc);

    return (() => window.removeEventListener(window, scrollFunc));
  }, []);

  
  return (
    <header className={s.root}>
      <div className={cn(s.header, {[s.small]: small})}>
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
