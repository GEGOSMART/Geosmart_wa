import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    //console.log("Usuario "+JSON.stringify(this.props.user))

  }

  componentWillReceiveProps(props) {}

  componentWillUnmount() {}


  render() {

    return (
      <div style={{width: '100%', backgroundColor: '#192023', minHeight: '5em', fontFamily: 'system-ui'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Link className="navbtn" to="/games">Games</Link>
          <Link className="navbtn" to="/profile">Profile</Link>
          <Link className="navbtn" to="/chat">Chat</Link>
        </div>
      </div>
    );
  }
}



export default Navbar;
