import React, {Component} from "react";
import WebRoutes from './routes'
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{padding:'0px'}}>
        <Router>
            <WebRoutes/>
        </Router>
      </div>
    );
  }
}

export default App;
