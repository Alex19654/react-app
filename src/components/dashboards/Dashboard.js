import Button from "../button/Button";
import { ThemeContext } from "../theme/ThemeStyles";
import DashboardList from "./DashboardList";
import { useRouteMatch } from "react-router-dom";
import { UlStyle } from "./DashboardStyles.modal";

const Dashboard = () => {

   let { url } = useRouteMatch();

   const linkParams = [ 
      {name: "Users", link: "/users"}, 
      {name: "Albums", link: "/albums"},
      {name: "Modal", link: `${url}/modal`, clickAction: true}
   ];



   return (
      <ThemeContext.Consumer>
         {({theme}) => (
            <div className={theme}>
               <h2>Dashboard</h2>
               <UlStyle>
                  {linkParams.map((item, index) => 
                     <Button key={index} linkName={item.name} linkPath={item.link} />
                  )}
               </UlStyle>
               <DashboardList/>
            </div>
         )} 
      </ThemeContext.Consumer>
   )
}

export default Dashboard;