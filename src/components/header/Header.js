import Button from "../button/Button";
import ToggleThemeButton from "../theme/ThemeToggler";
import { ThemeContext } from "../theme/ThemeStyles";
import { UlStyle } from "../dashboards/DashboardStyles.modal";
import { Menu } from 'antd';
import {Link} from "react-router-dom";

const HeaderComponent = () => {

   const linkParams = [ 
      {name: "Dashboard", link: "/dashboard"}, 
      {name: "Users", link: "/users"}, 
      {name: "Albums", link: "/albums"}
   ];
   

   return (
            <>
               <ToggleThemeButton/>
               <Menu theme="dark" mode="horizontal">
                  {linkParams.map((item, index) => 
                        <Menu.Item key={index}>
                           <Link className="buttonLink" to={item.link}>{item.name}</Link>
                        </Menu.Item>
                  )}
               </Menu>
            </>
   )
}

export default HeaderComponent;