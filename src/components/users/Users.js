import {fetchItems} from "../../fetch/fetchAPI";
import {Component} from "react";
import List from "../list/List";
import { ThemeContext } from "../theme/ThemeStyles";

const item = "users";

class Users extends Component {

   constructor(props) {
      super(props);
      this.state = {
         items: null
      }
   }

   static contextType = ThemeContext; 

   componentDidMount() {
      fetchItems(item)
         .then(data => this.setState({items: data}));
   }

   render() {

      const context = this.context;

      return (
         <div className={context.theme}>
            <h2>Users</h2>
            {this.state.items ? <List items={this.state.items} /> : <div>Loading...</div>}
         </div>
      )
   }
   
}

export default Users;