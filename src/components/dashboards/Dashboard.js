import Button from "../button/Button";

const linkParams = [ 
   {name: "Users", link: "/users"}, 
   {name: "Albums", link: "/albums"}
];

const Dashboard = () => {

   return (
      <div>
         <h2>Dashboard</h2>
         <ul>
            {linkParams.map((item, index) => 
               <Button key={index} linkName={item.name} linkPath={item.link}/>
            )}
         </ul>
      </div>
      
      
   )
}

export default Dashboard;