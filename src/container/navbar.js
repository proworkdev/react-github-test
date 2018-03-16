import React from "react";
import {Navbar} from 'reactstrap';
import {Link} from "react-router-dom";
const Header = (props) => {
    const {match} = props.route;
    return (
        <Navbar
            color="faded"
            dark
            expand="md"
            style={styles.navBar}>
            {match.path !== '/'?<Link to="/">Back</Link>:null}
            <h3
                style={styles.title}>Home</h3>
        </Navbar>
    );
}

const styles={
  navBar:{
    backgroundColor: 'black'
  },
  title:{
      color: '#fff',
      textAlign: 'center',
      width:'100%'
        }
}

export default Header;
