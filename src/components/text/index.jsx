import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './index.module.scss';


const Text = ({ element, className, strong, disabled, italic, children }) => {

  return React.createElement(element, {
    className: cn(
      s.root,
      className,
      { [s.strong]   : strong },
      { [s.italic]   : italic },
      { [s.disabled] : disabled }
    )
  }, children);
};

Text.defaultProps = {
  element: "div"
};

Text.propTypes = {
  element   : PropTypes.oneOf(["div", "p", "span"]),
  className : PropTypes.string,
  disabled  : PropTypes.bool,
  strong    : PropTypes.bool,
  italic    : PropTypes.bool,
  children  : PropTypes.node
};

export default Text;
