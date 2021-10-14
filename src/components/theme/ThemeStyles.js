import React from 'react';

export const themes = {
   lightGreen: 'light-green',
   lightBlue: 'light-blue'
}
export const ThemeContext = React.createContext({
   theme: themes.lightGreen, 
   themeToggler: () => {}
}
);