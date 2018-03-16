import React, { Component } from 'react';
import Header from '../container/navbar'
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
class Person extends Component {
    state={
        person :{}
    }
    componentWillMount(){
        const {match} = this.props;
        if(match.params.name){
            axios.get("https://api.github.com/users/"+match.params.name).then((person)=>{
                this.setState({person:person.data})
            })
        }
    }
  render() {
      const {person} = this.state;
        return (
        <div className="App">
            <Header route={this.props}/>
            <div style={{paddingTop:10}}>
            {Object.keys(person).length > 0?
            <Card style={{textAlign:'center'}}>
            <CardImg top height="" style={styles.card} src={person.avatar_url} alt="Card image cap" />
            <CardBody>
            <CardTitle>{person.name}</CardTitle>
            <CardSubtitle>{person.company}</CardSubtitle>
            <CardText>{person.bio}</CardText>
            </CardBody>
        </Card>:null}
            </div>
        </div>
        );
  }
}

const styles={
  card:{
    width:'fit-content',margin:'0 auto'
  }
}

export default Person;
