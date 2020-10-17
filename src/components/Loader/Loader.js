import React from 'react';
import { connect } from "react-redux";
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';


class Loader extends React.Component {
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
      <div style={{width: '100%',backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)', minHeight: '50em'}}>
       <div style={{textAlign: 'center'}}>
            <CircularProgress
            variant="indeterminate"
            style={{marginTop: '15em', color: '#9c27b0'}}
            size={200}
            thickness={10}
            value={100}
            />
          <h2 style={{fontFamily: 'system-ui', color: 'white'}}>Loading game...</h2>
        </div>
      </div>
    );
  }
}



export default Loader;
