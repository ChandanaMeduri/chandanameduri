import React, { Component } from 'react';
import ImageComponent from "./src/components/imageComponent";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selectedPosition: "top",
      }
      this.getPosition = this.getPosition.bind(this);
   }
   getPosition(e) {
      this.setState({
         selectedPosition: e.target.value
      })
   }
   render() {
      return (
         <React.Fragment>
            <select onChange={this.getPosition}>
               <option value="top">Top</option>
               <option value="bottom">Bottom</option>
               <option value="right">Right</option>
               <option value="left">Left</option>
            </select>
            <ImageComponent position={this.state.selectedPosition} />
         </React.Fragment>
      );
   }
}
export default App;