import Button from "../button/Button";

const linkParams = [ 
   {name: "Dashboard", link: "/dashboard"}, 
   {name: "Users", link: "/users"}, 
   {name: "Albums", link: "/albums"}
];

const Header = () => {

   return (
      
      <ul>
         {linkParams.map((item, index) => 
            <Button key={index} linkName={item.name} linkPath={item.link}/>
         )}
      </ul>
      
      
   )
}

export default Header;