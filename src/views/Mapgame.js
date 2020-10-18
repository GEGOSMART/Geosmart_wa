import React from 'react';
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer,
  Marker
} from "react-google-maps";
import Trofeo from '../assets/img/trofeo.jpg'

const mapStyles = {
    featureType: "administrative.country",
    elementType: "labels",
    stylers: [
        { visibility: "off" }
    ]
}

const st = {
    "featureType": "all",
    "stylers": [
      { "color": "#aad80e" }
    ]
  }

const GoogleMapComp = withGoogleMap(props => (
     <GoogleMap
       defaultCenter={props.center}
       defaultZoom={2}
       defaultOptions={{
            zoomControl: false, styles: [mapStyles, st]
        }}
     >

     {/*
     {styles: {
            featureType: "administrative.country",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }}

      */}

     <Marker
       icon= {{url: "https://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png"}}
       title={"option A"}
       name={"option A"}
       position={{lat: props.optionA.lat, lng: props.optionA.lng }}
       draggable={false}
       onClick={(e) => {
              props.choose(props.optionA)
              }}
      />

      <Marker
        icon= {{url: "https://www.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png"}}
        title={"option B"}
        name={"option B"}
        position={{lat: props.optionB.lat, lng: props.optionB.lng }}
        draggable={false}
        onClick={(e) => {
               props.choose(props.optionB)
               }}
       />

       <Marker
         icon= {{url: "https://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png"}}
         title={"option C"}
         name={"option C"}
         position={{lat: props.optionC.lat, lng: props.optionC.lng }}
         draggable={false}
         onClick={(e) => {
                props.choose(props.optionC)
                }}
        />

        <Marker
          icon= {{url: "https://www.google.com/intl/en_us/mapfiles/ms/micons/purple-dot.png"}}
          title={"option D"}
          name={"option D"}
          position={{lat: props.optionD.lat, lng: props.optionD.lng }}
          draggable={false}
          onClick={(e) => {
                 props.choose(props.optionD)
                 }}
         />


         {props.showStart ?
           <Marker

             icon= {{url: "http://mt.google.com/vt/icon?psize=25&font=fonts/Roboto-Bold.ttf&color=ff135C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=50&text=%E2%80%A2"}}
             title={"test"}
             name={"ehehe"}
             //position={ {lat: 4.626820403668342, lng: -74.08089169311525}}
             position={{lat: props.startMarkerPos.lat, lng: props.startMarkerPos.lng }}
             draggable={true}
             onDragEnd={(e) => {
                   props.onStartMarkerChange(e)
                   //console.log(e.latLng.lat(), e.latLng.lng());
               }}
           /> :
           null
         }

         {props.showEnd ?
           <Marker

             //icon= {{url: "http://maps.google.com/mapfiles/ms/icons/orange.png"}}
             icon= {{url: "http://mt.google.com/vt/icon?psize=25&font=fonts/Roboto-Bold.ttf&color=ff135C13&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=50&text=%E2%80%A2"}}
             title={"test"}
             name={"eheheb"}
             //position={ {lat: 4.642561609861135 ,lng: -74.07883175659181}}
             position={{lat: props.endMarkerPos.lat, lng: props.endMarkerPos.lng }}
             draggable={true}
             onDragEnd={(e) => {
               props.onEndMarkerChange(e)
               }}
           /> :
           null
         }

     </GoogleMap>
   ));

const question_points = 100;

class Mapgame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostrar_boton_next: false,
      correct_selected: false,
      score: 0,
      current_question: 0,
      questions: [
        {
          _id: "someid",
          statement: "Locate Colombia on the map",
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
          optionA: { lat:  4.6097100, lng: -74.0817500 },
          optionB: { lat:  5.6097100, lng: -44.0817500 },
          optionC: { lat:  8.6097100, lng: -64.0817500 },
          optionD: { lat:  7.6097100, lng: -34.0817500 },
          ans: { lat:  4.6097100, lng: -74.0817500 },
          category: "flags",
          continent: "America",
          created_at: "somedate",
          Updated_at: "otherdate"
        },
        {
          _id: "someid",
          statement: "Locate Colombia on the map",
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
          optionA: { lat:  4.6097100, lng: -74.0817500 },
          optionB: { lat:  5.6097100, lng: -44.0817500 },
          optionC: { lat:  8.6097100, lng: -64.0817500 },
          optionD: { lat:  7.6097100, lng: -34.0817500 },
          ans: { lat:  4.6097100, lng: -74.0817500 },
          category: "flags",
          continent: "America",
          created_at: "somedate",
          Updated_at: "otherdate"
        },

      ]


    }
  }

  componentDidMount() {
    //console.log("Usuario "+JSON.stringify(this.props.user))

  }

  componentWillReceiveProps(props) {}

  componentWillUnmount() {}

  chooseAnswer(question, answer) {
    console.log(answer)
    let points = 0;
    let acertado = false;
    if(question.ans.lat === answer.lat && question.ans.lng === answer.lng ){
       points = question_points;
       acertado = true;
    }

    return this.setState({score: this.state.score + points, mostrar_boton_next: true, correct_selected: acertado});
  }

  nextQuestion(){
    return this.setState({current_question: this.state.current_question + 1, mostrar_boton_next: false, correct_selected: false})
  }

  reiniciar(){
    return this.setState({score:0, current_question:0})
  }

  render() {
    const question = this.state.questions[this.state.current_question];
    const opbtn = { color: 'white', backgroundColor: '#9C27B0', margin: '1em', padding: '0.7em',
                    boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)'
                  }
    return (
      <div className="map_container">
       <div className="map_flexcontainer" >
          <h2 style={{color: 'white', fontWeight: 600, fontSize: '3em', maxWidth: '25em', margin: '0 auto', marginTop: '1.5em'}}>
            Identify the location on the map by choosing the correct marker
          </h2>

          <h3 className="score">
              <span style={{color: 'white'}}>Current score: </span>
              {this.state.score}
          </h3>

          {
            this.state.current_question >= this.state.questions.length ?
              <Card style={{margin:'0 auto'}} elevation={10}>
                <CardActionArea style={{marginTop: '2em', minWidth: '45em'}}>
                  <CardMedia
                    style={{height: 140, width: 140, margin: '0 auto', borderRadius: '50%'}}
                    image={Trofeo}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      The game is over. your score is: {this.state.score}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                 <div  style={{textAlign: 'center', margin: '0 auto'}}>
                  <Button size="small" color="primary"  onClick={()=>this.props.history.push("/games")}>
                    Back to main menu
                  </Button>
                  <Button size="small" color="primary"  onClick={()=> this.reiniciar()}>
                    Play again
                  </Button>
                 </div>
                </CardActions>
            </Card>
            : null
          }

          {
             this.state.mostrar_boton_next ?
             <Card style={{margin: '0 auto', width: '20em', padding: '2em', borderRadius: '12px', marginTop: '8em',
                           boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)'
                          }}>
               <div  style={{textAlign: 'center', margin: '0 auto', display: 'flex', flexDirection: 'column'}}>
                 {
                   this.state.correct_selected === true ?
                    <span className="mapGameCorrect">
                        Correct! + {question_points}
                    </span>
                   :
                    <span className="mapGameIncorrect" >
                        Incorrect!
                    </span>
                 }
                <Button size="small" color="primary" style={opbtn} onClick={()=>this.nextQuestion()}>
                  Next question
                </Button>
               </div>
             </Card>
             :
              null
          }

          {
            question && this.state.mostrar_boton_next !== true ?
             <>
              <h2 style={{color: "#FFEB3B"}}>{question.statement}</h2>
              <GoogleMapComp
                   center = { { lat:  4.6097100, lng: -74.0817500 } }
                   containerElement={ <div style={{ height: '100%', width: '100%' , overflow: 'hidden', margin: '0 auto'}} /> }
                   mapElement={ <div className="map_element" /> }
                   optionA =  { question.optionA }
                   optionB =  { question.optionB }
                   optionC =  { question.optionC }
                   optionD =  { question.optionD }
                   choose ={(option)=>this.chooseAnswer(question, option)}
                   /*
                   showStart = {this.props.showStart}
                   showEnd = {this.props.showEnd}
                   startMarkerPos = {this.state.positionStart}
                   endMarkerPos = {this.state.positionEnd}
                   onStartMarkerChange={(e)=>this.handleStartMarkerChange(e)}
                   onEndMarkerChange={(e)=>this.handleEndMarkerChange(e)}
                   */
                 />
              </>
              : null
             }
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

export default connect(mapStateToProps, mapDispatchToProps)(Mapgame);
