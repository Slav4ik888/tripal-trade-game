import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './index.module.css';


const Heading = ({ level, className, black, children }) => {

  const el = `h${level}`;

  return React.createElement(el, {
    className: cn(s.root, className, s[`level${level}`], { [s.colorBlack]: black })
  }, children);
};

Heading.defaultProps = {
  level: 1
};

Heading.propTypes = {
  level     : PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className : PropTypes.string,
  black     : PropTypes.bool,
  children  : PropTypes.node
};

export default Heading;
