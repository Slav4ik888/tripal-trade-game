import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Path } from '../../utils/types';
// Components
import Container from '../container';
import Logo from '../btns/logo';
// Styles
import cn from 'classnames';
import s from './index.module.scss';
import { useAuth } from '../auth/context';


const MENU = [
  { label: "Main",       link: Path.MAIN },
  { label: "Characters", link: Path.CHARACTERS },
  { label: "About game", link: Path.ABOUT_GAME },
  { label: "Contacts",   link: Path.CONTACTS }
];


const Header = () => {
  const [small, setSmall] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    const scrollFunc = () => setSmall(window.pageYOffset >= 60);
    window.addEventListener(`scroll`, scrollFunc);

    return (() => window.removeEventListener(window, scrollFunc));
  }, []);

  return (
    <header className={s.root}>
      <div className={cn(s.header, {[s.small]: small})}>
        <Container className={s.headerWrap}>
          <Logo styles={{ logo: s.logo }} />
          <ul className={s.nav}>
            {
              MENU.map(item => <li key={item.label}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) => isActive ? s.active : null}
                >
                  {item.label}
                </NavLink>
              </li>)
            }
            {
              auth.user && <li onClick={auth.logout}><span>Logout</span></li>
            }
          </ul>
        </Container>
      </div>
    </header>
  )
};

export default Header;
