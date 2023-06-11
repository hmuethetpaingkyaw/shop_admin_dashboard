
import {createContext, useState} from 'react'

export const ThemeContext = createContext('light'); //default value

/* 
1. create context
2. provide context (note - components can only use context data only when they are under context provider)
3. useContext (context)
*/

export const ThemeContextProvider = ({children})=> {
    const [theme , setTheme] = useState('light');

    return (
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
}