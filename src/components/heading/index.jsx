import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './index.module.scss';


const Heading = ({ id, onClick, level, className, black, backLine, children }) => {

  const el = `h${level}`;

  return React.createElement(el, {
    id,
    onClick,
    className: cn(
      s.root,
      className,
      s[`level${level}`],
      { [s.colorBlack]: black },
      { [s.backLine]: backLine }
    )
  }, children);
};

Heading.defaultProps = {
  level: 1,
  backLine: false
};

Heading.propTypes = {
  id        : PropTypes.string,
  level     : PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className : PropTypes.string,
  black     : PropTypes.bool,
  backLine  : PropTypes.bool,
  onClick   : PropTypes.func,
  children  : PropTypes.node
};

export default Heading;
