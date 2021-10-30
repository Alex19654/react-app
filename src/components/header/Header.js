import Button from "../button/Button";
import ToggleThemeButton from "../theme/ThemeToggler";
import { ThemeContext } from "../theme/ThemeStyles";


const Header = () => {

   const linkParams = [ 
      {name: "Dashboard", link: "/dashboard"}, 
      {name: "Users", link: "/users"}, 
      {name: "Albums", link: "/albums"}
   ];
   

   return (
      <ThemeContext.Consumer>
         {({theme}) => (
            <>
               <ToggleThemeButton/>
               <ul className={theme}>
                  {linkParams.map((item, index) => 
                     <Button key={index} linkName={item.name} linkPath={item.link}/>
                  )}
               </ul>
            </>
         )} 
      </ThemeContext.Consumer>
   )
}

export default Header;