import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import Container from '../container';
import logo from '../../assets/logo_s.png';
import { Path } from '../../utils/types';
import s from './index.module.scss';


const MENU = [
  { label: "Main",       link: Path.MAIN },
  { label: "Characters", link: Path.CHARACTERS },
  { label: "About game", link: Path.ABOUT_GAME },
  { label: "Contacts",   link: Path.CONTACTS }
];


const Header = () => {
  const
    [small, setSmall] = useState(false),
    navigate = useNavigate();

  useEffect(() => {
    const scrollFunc = () => window.pageYOffset >= 60 ? setSmall(true) : setSmall(false);
    window.addEventListener(`scroll`, scrollFunc);

    return (() => window.removeEventListener(window, scrollFunc));
  }, []);

  const handleLogoClick = () => navigate(Path.MAIN)
  return (
    <header className={s.root}>
      <div className={cn(s.header, {[s.small]: small})}>
        <Container className={s.headerWrap}>
          <img src={logo} alt="logo" className={s.logo} onClick={handleLogoClick} />
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
          </ul>
        </Container>
      </div>
    </header>
  )
};

export default Header;
