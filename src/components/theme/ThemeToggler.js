import {ThemeContext} from './ThemeStyles';

function ToggleThemeButton() {
   return (
      <ThemeContext.Consumer>
         {({themeToggler}) => (
            <div className="logo switch-wrapper">
               <label className="switch"  onClick={themeToggler}>
                  <input type="checkbox" />
                  <span className="slider round" onClick={themeToggler}></span>
               </label>
            </div>
         )}  
      </ThemeContext.Consumer>
   )
}

export default ToggleThemeButton;