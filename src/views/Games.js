import React from 'react';
import { connect } from "react-redux";

import GameCard from '../components/gameSelection/GameCard';
import MapImage from '../assets/img/map.jpg'
import FlagImage from '../assets/img/flag.png'
import PlaceImage from '../assets/img/place.jpg'

class Games extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map_continent: "global",
      flag_continent: "global",
      place_continent: "global"
    };
  }

  componentDidMount() {
    //console.log("Usuario "+JSON.stringify(this.props.user))

  }

  componentWillReceiveProps(props) {}

  componentWillUnmount() {}

  handle_map_continent(e){
    const value = e.target.value;
    this.setState({map_continent: value})
  }

  handle_flag_continent(e){
    const value = e.target.value;
    this.setState({flag_continent: value})
  }

  handle_place_continent(e){
    const value = e.target.value;
    this.setState({place_continent: value})
  }

  render() {
    return (
      <div style={{width: '100%',backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)', minHeight: '50em'}}>
        <div style={{display: 'flex'}}>
          <GameCard
            gameName="Locate the country"
            gameDescription="Locate the indicated country on our interactive map"
            handleFunctionContinent={(e) => this.handle_map_continent(e)}
            gameImage={MapImage}
            gameValue={this.state.map_continent}
            onClickConfiguration={() => this.props.history.push({pathname: "/play/maps", filter: this.state.flag_continent, gametype: "flags"})}
            />

          <GameCard
            gameName="Recognize the flag"
            gameDescription="Recognize to which country the indicated flag belongs"
            handleFunctionContinent={(e) => this.handle_flag_continent(e)}
            gameImage={FlagImage}
            gameValue={this.state.flag_continent}
            onClickConfiguration={() => this.props.history.push({pathname: "/play/flags", filter: this.state.map_continent, gametype: "maps"})}
            />

          <GameCard
            gameName="Recognize the representative place"
            gameDescription="Recognize to which country the indicated representative place belongs"
            handleFunctionContinent={(e) => this.handle_place_continent(e)}
            gameImage={PlaceImage}
            gameValue={this.state.place_continent}
            onClickConfiguration={() => this.props.history.push({pathname: "/play/places", filter: this.state.place_continent, gametype: "places"})}
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { //get user in the store
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  //loginUser: (username, password) => dispatch(loginUser(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
