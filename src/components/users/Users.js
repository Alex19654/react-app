import {fetchItems} from "../../fetch/fetchAPI";
import {Component} from "react";
import List from "../list/List";

const item = "users";

class Users extends Component {

   constructor(props) {
      super(props);
      this.state = {
         items: null
      }
   }

   componentDidMount() {
      fetchItems(item)
         .then(data => this.setState({items: data}));
   }

   render() {
      return (
         <>
            <h2>Users</h2>
            {this.state.items ? <List items={this.state.items} /> : <div>Loading...</div>}
         </>
      )
   }
   
}

export default Users;