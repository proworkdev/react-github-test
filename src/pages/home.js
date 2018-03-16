import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";
import Header from '../container/navbar'
class Home extends Component {
    state = {
        topFive : ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]
    }
    render() {
        return (
            <div className="topbarnav-bar">
                <Header route={this.props}/>
                <div className="row" style={styles.homepage}>
                <h2>Top 5 Github Users</h2>
                <p>Tap the username to see more information</p>
                {this.state.topFive.map((name,key)=>{
                    return (
                      <Link to={'/person/'+name} key={key}><Button color="primary" style={{marginLeft:1}}>{name}</Button></Link>
                    )
                })}
                </div>
            </div>
        );
    }
}

const styles={
  homepage:{
    paddingTop:10,display:'inline-table',width:'100%',textAlign:'center'
  }
}

export default Home;
