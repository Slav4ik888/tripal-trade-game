import s from './index.module.css';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.header}>
        <div className={s.container}>
          <div className={s.logo}></div>
          <ul className={s.nav}>
            {
              MENU.map(item => <li key={item}><a href="#">{item}</a></li>)
            }
          </ul>
        </div>
      </div>
    </header>
  )
};

export default Header;
