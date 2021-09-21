import {Link} from "react-router-dom";

const Button = ({linkName, linkPath, index}) => {

   return (
      <li key={index}>
         <Link className="buttonLink" to={linkPath}>{linkName}</Link>
      </li>
   )
}

export default Button;