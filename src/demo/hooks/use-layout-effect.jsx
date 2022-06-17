import { useState, useRef, useLayoutEffect, useEffect } from 'react';


const Text = () => {

  return (<h1>This is Text nah!</h1>)
};


const NewComponent = () => {
  const
    buttonRef = useRef(null),
    popupRef = useRef(null),
    [isVisible, setVisible] = useState(false);

  useEffect(() => { console.log(`useEffect1`); });

  useLayoutEffect(() => {
    console.log(`useLayoutEffect`);
    if (!isVisible) return;

    const
      clientRect = buttonRef.current.getBoundingClientRect(),
      { bottom } = clientRect;
    popupRef.current.style.top = `${bottom + 25}px`;

    console.log('clientRect: ', clientRect);

  }, [isVisible]);
  
  useEffect(() => { console.log(`useEffect2`); });


  const style = {
    background: `#000`,
    color: `white`,
    top: `50px`,
    position: `absolute`
  }

  return (
    <>
      <button ref={buttonRef} onClick={() => setVisible(s => !s)}>
        Show
      </button>
      {
        isVisible && (
          <div style={style} ref={popupRef}>
            <Text />
          </div>
        )
      }
    </>
  )
}

export const UseLayoutEffectDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: `300px`, margin: `50px auto 0 auto` }}>
      <div style={{ position: `relative`, display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
        <div>{count}</div>
        <button onClick={() => setCount(c => ++c)}>Click</button>
        <NewComponent />
      </div>
    </div>
  )
}