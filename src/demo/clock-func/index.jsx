import React, { useEffect, useState } from 'react';
import pt from 'prop-types';
import cn from 'classnames';
import s from './index.module.scss';


const Clock = ({ className }) => {
  console.log(`render`);
  const tick = () => new Date().toLocaleTimeString();

  const [clock, setClock] = useState({ date: tick(), isShow: true });

  useEffect(() => {
    console.log(`componentDidMount`);
    let timerId;

    if (clock.isShow) {
      timerId = setInterval(() => setClock(prev => ({ ...prev, date: tick() })), 1000);
    }
    
    return () => {
      console.log('componentWillUnmount');
      clearInterval(timerId);
    }
  }, [clock.isShow]);

  const togglePause = () => {
    console.log(`pause`);
    setClock(prev => ({ ...prev, isShow: !prev.isShow }))
  };


  return (
    <div className={cn(s.root, className)}>
      Сейчас: {clock.date}
      <br />
      <button onClick={togglePause}>Pause</button>
    </div>
  )
};

Clock.defaultProps = {
};

Clock.propTypes = {
  className : pt.string,
};

export default Clock;
