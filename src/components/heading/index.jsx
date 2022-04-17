import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './index.module.scss';


const Heading = ({ level, className, black, backLine, children }) => {

  const el = `h${level}`;

  return React.createElement(el, {
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
  level     : PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className : PropTypes.string,
  black     : PropTypes.bool,
  backLine  : PropTypes.bool,
  children  : PropTypes.node
};

export default Heading;
