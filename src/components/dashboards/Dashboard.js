import Button from "../button/Button";
import { ThemeContext } from "../theme/ThemeStyles";
import FormComponent from "../form/FormComponent";
import DashboardList from "./DashboardList";

const linkParams = [ 
   {name: "Users", link: "/users"}, 
   {name: "Albums", link: "/albums"}
];

const Dashboard = () => {
   return (
      <ThemeContext.Consumer>
         {({theme}) => (
            <div className={theme}>
               <h2>Dashboard</h2>
               <ul>
                  {linkParams.map((item, index) => 
                     <Button key={index} linkName={item.name} linkPath={item.link}/>
                  )}
               </ul>
               <DashboardList/>
            </div>
         )} 
      </ThemeContext.Consumer>
   )
}

export default Dashboard;