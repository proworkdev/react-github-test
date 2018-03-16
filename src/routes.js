import React from "react";
import {Route} from "react-router-dom";
import Home from './pages/home'
import Person from './pages/person'
const WebRoutes = () => (
  <div className="topbarnav" style={styles.route}>
    <Route exact path="/" component={Home} />
    <Route path="/person/:name" component={Person} />
  </div>
);

const styles={
  route:{
    paddingBottom:'10px'
  }
}
export default WebRoutes;
