import React from 'react';
import pt from 'prop-types';


const Stack = ({ children, spacing, direction, wrap }) => {
  const style = {
    display       : `flex`,
    flexDirection : direction,
    flexWrap      : wrap ? `wrap` : `no-wrap`,
    gap           : `${spacing * 0.25}rem`,
    
  };

  return (
    <div style={style}>
      {children}
    </div>
  )
};


Stack.defaultProps = {
  spacing   : 2,
  direction : `row`,
  wrap      : false
};

Stack.propTypes = {
  children  : pt.node,
  spacing   : pt.number,
  direction : pt.oneOf(["row", "column"]),
  wrap      : pt.bool,
};

export default Stack;
