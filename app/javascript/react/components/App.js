import React from 'react'
import {Route, Switch, BrowserRouter} from "react-router-dom"

// import UserIndex from "./UserIndex";
// import UserShow from "./UserShow";
// import AccoladeNew from "./AccoladeNew";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomesIndex}/>
      <Route exact path="/user/:id" component={UserShow}/>
    </Switch> 
  </BrowserRouter>
);

export default App
