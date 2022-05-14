import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../../utils/types';
import logoImg from '../../../assets/logo_s.png';
import pt from 'prop-types';

const wrap = (component, style) => {
  if (style) return <div className={style}>{component}</div>
  else return component
};


const Logo = ({ styles }) => {
  const
    navigate = useNavigate(),
    handleLogoClick = () => navigate(Path.MAIN),
    logo     = <img src={logoImg} alt="logo" className={styles.logo} onClick={handleLogoClick} />,
    logoBox  = wrap(logo, styles.wrap);
  
  return (
    <>
      {
        logoBox
      }
    </>
  )
};


Logo.propTypes = {
  styles: pt.shape({
    logo : pt.string,
    wrap : pt.string
  }).isRequired
};

export default Logo;
