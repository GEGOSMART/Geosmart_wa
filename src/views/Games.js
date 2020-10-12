import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect } from "react-redux";
import Mapimage from '../graphics/map.jpg'
import Flag from '../graphics/flag.png'
import Place from '../graphics/place.jpg'

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map_continent: "global",
      flag_continent: "global",
      place_continent: "global"
    };
  }
  componentDidMount() {}

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
              <Card style={{margin:'3em'}}>
                <CardActionArea style={{marginTop: '2em'}}>
                  <CardMedia
                    style={{height: 140, width: 140, margin: '0 auto'}}
                    image={Mapimage}
                    title="Contemplative Reptile"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Ubicar el país
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Ubica el país indicado en nuestro mapa interactivo
                    </Typography>
                    <InputLabel style={{marginTop: '2em'}}>Solo preguntas de: </InputLabel>
                      <Select
                        style={{width: '100%'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.map_continent}
                        onChange={(e)=>this.handle_map_continent(e)}
                      >
                        <MenuItem value={"global"}>Todo el mundo</MenuItem>
                        <MenuItem value={"America"}>America</MenuItem>
                        <MenuItem value={"Asia"}>Asia</MenuItem>
                        <MenuItem value={"Africa"}>África</MenuItem>
                        <MenuItem value={"Europa"}>Europa</MenuItem>
                        <MenuItem value={"Oceania"}>Oceanía</MenuItem>
                      </Select>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button size="small" color="primary" style={{color: 'white', backgroundColor: '#00bcd4', margin: '0.6em'}}
                          onClick={ ()=>this.props.history.push({pathname: "/play/maps",filter: this.state.map_continent, gametype: "maps"}) }
                          >
                    Jugar ahora
                  </Button>
                  <Button size="small" color="primary" style={{color: 'white', backgroundColor: '#4CAF50', margin: '0.6em'}}>
                    Jugar multijugador
                  </Button>
                </CardActions>
            </Card>

            <Card style={{margin:'3em'}}>
              <CardActionArea style={{marginTop: '2em'}}>
                <CardMedia
                  style={{height: 140, width: 140, margin: '0 auto'}}
                  image={Flag}
                  title="Contemplative Reptile"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Reconoce la bandera
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Reconoce a que país pertenece la bandera indicada
                  </Typography>
                  <InputLabel style={{marginTop: '2em'}}>Solo preguntas de: </InputLabel>
                    <Select
                      style={{width: '100%'}}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.flag_continent}
                      onChange={(e)=>this.handle_flag_continent(e)}
                    >
                      <MenuItem value={"global"}>Todo el mundo</MenuItem>
                      <MenuItem value={"America"}>America</MenuItem>
                      <MenuItem value={"Asia"}>Asia</MenuItem>
                      <MenuItem value={"Africa"}>África</MenuItem>
                      <MenuItem value={"Europa"}>Europa</MenuItem>
                      <MenuItem value={"Oceania"}>Oceanía</MenuItem>
                    </Select>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary" style={{color: 'white', backgroundColor: '#00bcd4', margin: '1em'}}
                        //onClick={()=>this.props.history.push("/play/flags")}
                        onClick={ ()=>this.props.history.push({pathname: "/play/flags",filter: this.state.flag_continent, gametype: "flags"}) }
                        >
                  Jugar ahora
                </Button>
                <Button size="small" color="primary"  style={{color: 'white', backgroundColor: '#4CAF50', margin: '1em'}}>
                  Jugar multijugador
                </Button>
              </CardActions>
          </Card>


          <Card style={{margin:'3em'}}>
            <CardActionArea style={{marginTop: '2em'}}>
              <CardMedia
                style={{height: 140, width: 140, margin: '0 auto', borderRadius: '50%'}}
                image={Place}
                title="Contemplative Reptile"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Reconoce el lugar representativo
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Reconoce a que país pertenece el lugar representativo indicado
                </Typography>
                <InputLabel style={{marginTop: '2em'}}>Solo preguntas de: </InputLabel>
                  <Select
                    style={{width: '100%'}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.place_continent}
                    onChange={(e)=>this.handle_place_continent(e)}
                  >
                    <MenuItem value={"global"}>Todo el mundo</MenuItem>
                    <MenuItem value={"America"}>America</MenuItem>
                    <MenuItem value={"Asia"}>Asia</MenuItem>
                    <MenuItem value={"Africa"}>África</MenuItem>
                    <MenuItem value={"Europa"}>Europa</MenuItem>
                    <MenuItem value={"Oceania"}>Oceanía</MenuItem>
                  </Select>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small" color="primary" style={{color: 'white', backgroundColor: '#00bcd4', margin: '1em'}}
                      onClick={ ()=>this.props.history.push({pathname: "/play/places",filter: this.state.place_continent, gametype: "places"}) }
                      >
                Jugar ahora
              </Button>
              <Button size="small" color="primary" style={{color: 'white', backgroundColor: '#4CAF50', margin: '1em'}}>
                Jugar multijugador
              </Button>
            </CardActions>
        </Card>
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
