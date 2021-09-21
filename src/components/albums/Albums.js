import {fetchItems} from "../../fetch/fetchAPI";
import {Component} from "react";
import List from "../list/List";

const item = "albums";

class Albums extends Component {

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
            <h2>Albums</h2>
            {this.state.items ? <List items={this.state.items} /> : <div>Loading...</div>}
         </>
      )
   }
   
}

export default Albums;