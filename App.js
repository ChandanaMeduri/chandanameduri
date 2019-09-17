import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ImageComponent from "./src/components/imageComponent/imageComponent";

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <Route path="/" component={ImageComponent} />
         </BrowserRouter>
      );
   }
}
export default App;