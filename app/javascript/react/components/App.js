import React from 'react'
import {Route, Switch, BrowserRouter} from "react-router-dom"

// import UserIndex from "./UserIndex";
import UserShow from "./UserShow";
import AccoladeForm from "./AccoladeForm";
import LandingContainer from "./LandingContainer"


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingContainer}/>
      <Route exact path="/form" component={AccoladeForm}/>
      <Route exact path="/users/:id" component={UserShow}/>
    </Switch> 
  </BrowserRouter>
);

export default App