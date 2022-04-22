import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';
import s from './index.module.scss';
import { btnType } from '../../utils/types';


const Button = ({ type, onClick }) => {
  const forward = type === btnType.forward;

  return (
    <div className={cn(s.root, { [s.black]: !forward, [s.white]: forward })}>
      <button
        className={cn(s.button, { [s.btnBlack]: !forward, [s.btnWhite]: forward })}
        onClick={onClick}
      >
        {type}
      </button>
    </div>
  )
};


Button.propTypes = {
  type    : pt.oneOf([btnType.forward, btnType.back]).isRequired,
  onClick : pt.func.isRequired
};

export default Button;
