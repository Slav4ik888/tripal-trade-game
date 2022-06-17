import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';
import s from './index.module.scss';
import { btnType } from '../../../utils/types';



const Button = ({ typeBtn, type, fullWidth, children, onClick, styles }) => {

  const handleClick = () => onClick && onClick();

  return (
    <div className={cn(s.root, styles?.root, { [s.fullWidth]: fullWidth })}>
      <button
        className = {cn(s.button, {
          [s.btnWhite]     : typeBtn === btnType.white,
          [s.btnBlack]     : typeBtn === btnType.black,
          [s.btnRed]       : typeBtn === btnType.red,
          [s.btnRedToggle] : typeBtn === btnType.redToggle,
        })}
        type    = {type}
        onClick = {handleClick}
      >
        <span>{children}</span>
      </button>
    </div>
  )
};


Button.defaultProps = {
  fullWidth : false,
  type      : `button`
};


Button.propTypes = {
  type      : pt.oneOf(['button', 'submit', 'reset']),
  typeBtn   : pt.oneOf([btnType.white, btnType.black, btnType.red, btnType.redToggle]).isRequired,
  fullWidth : pt.bool,
  children  : pt.oneOfType([pt.node, pt.string]).isRequired,
  styles    : pt.shape({ root: pt.string, button: pt.string }),
  onClick   : pt.func
};

export default Button;
