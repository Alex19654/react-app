import {Link} from "react-router-dom";
import { LiStyle } from "../dashboards/DashboardStyles.modal";

const Button = ({linkName, linkPath, index}) => {

   return (
      <LiStyle key={index}>
         <Link className="buttonLink" to={linkPath}>{linkName}</Link>
      </LiStyle>
   )
}

export default Button;