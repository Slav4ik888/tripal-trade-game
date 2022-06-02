import React, { useImperativeHandle, useRef, useState, useContext } from 'react';
import { getThemeStyle } from '../styles/get-theme-style';

const ThemeContext = React.createContext(null);


const Input = React.forwardRef((props, ref) => {
  const [type, setType] = useState(`text`);
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    changeType: (t) => {
      console.log(`###: start`);
      setType(t);
    },
    handleFocus: () => inputRef.current.focus()
  }));

  return (
    <input
      type={type}
      ref={inputRef}
      style={{ width: `100px`, marginLeft: `10px` }}
      onChange={e => console.log(e.target.value)}
    />
  )
});

const Card = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={getThemeStyle(theme)}>
      <button onClick={() => setTheme()}>Change theme</button>

    </div>
  )
};

const About = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <div style={getThemeStyle(theme)}>

      <Card theme={theme} />
    </div>
  )
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(`dark`);


  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme: () => setTheme(s => s === `dark` ? `light` : `dark`)
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ForwardRefDemo = () => {
  const ref = useRef(null);
    
  const handleChangeType = () => {
    console.log(ref.current);
    ref.current.changeType(`password`);
  };

  const handleFocus = () => {
    console.log(ref.current);
    ref.current.handleFocus();
  };

  const { theme, setTheme } = useContext(ThemeContext);


  return (
    <div style={{ width: `300px`, margin: `50px auto 0 auto` }}>
      <button onClick={() => setTheme(s => s === `dark` ? `light` : `dark`)}>Change theme</button>
      
      <About theme={theme} />
      
      <div style={{ position: `relative`, display: `flex`, ...getThemeStyle(theme) }}>
        <button onClick={handleChangeType}>
          Change type
        </button>
        <button onClick={handleFocus}>
          On Focus
        </button>
        <Input ref={ref} />
      </div>
    </div>
  )
};

export const AppDemoContext = () => {
  return (
    <ThemeProvider>
      <ForwardRefDemo />
    </ThemeProvider>
  )
}
