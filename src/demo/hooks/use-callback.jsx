import { useState, useMemo, useEffect, useCallback } from 'react';

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log(`Update Items`);
  }, [getItems]);

  return (
    <>
      {
        items.map(item => (<div key={item}>{item}</div>))
      }
    </>
  )
}


export const UseCallbackDemo = () => {
  const
    [number, setNumber] = useState(0),
    [dark, setDark] = useState(false),

    getItems = useCallback(() => {
      return [number, number + 1, number + 2];
    }, [number]),

    themeDark = useMemo(() => ({
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      backgroundColor: dark ? `black` : `white`,
      color: dark ? `white` : `black`,
      borderColor: dark ? `white` : `black`,
      borderWidth: `1px`,
      borderStyle: `solid`,
      marginTop: `24px`,
      width: `100%`,
      height: `50px`
    }), [dark]);
  

  useEffect(() => {
    console.log(`Change theme`);
  }, [themeDark]);
  

  return (
    <div style={{ width: `300px`, margin: `50px auto 0 auto` }}>
      <div style={{ position: `relative`, display: `flex`, flexDirection: `column`, alignItems: `center` }}>
        <input
          type="number"
          value={number}
          style={{ width: `100%`, marginBottom: `10px` }}
          onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button style={{ width: `100%` }} onClick={() => setDark(s => !s)}>Change theme</button>
      </div>

      <div style={themeDark}>
        <List getItems={getItems} />
      </div>
    </div>
  )
};
