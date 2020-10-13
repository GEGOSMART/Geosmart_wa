import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import Trofeo from '../assets/img/trofeo.jpg'

const question_points = 100;

class Questions extends React.Component {
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
          statement: "¿A que lugar pertenece esta bandera?",
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
          opcionA: "Colombia",
          opcionB: "Brasil",
          opcionC: "Ecuador",
          opcionD: "Perú",
          ans: "Brasil",
          category: "flags",
          continent: "America",
          created_at: "somedate",
          Updated_at: "otherdate"
        },
        {
          _id: "someid",
          statement: "¿A que lugar pertenece esta bandera?",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29.svg",
          opcionA: "Colombia",
          opcionB: "Brasil",
          opcionC: "Ecuador",
          opcionD: "Perú",
          ans: "Perú",
          category: "flags",
          continent: "America",
          created_at: "somedate",
          Updated_at: "otherdate"
        },
        {
        _id: "someid",
        statement: "¿A que lugar pertenece esta bandera?",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
        opcionA: "Colombia",
        opcionB: "Brasil",
        opcionC: "Japón",
        opcionD: "Perú",
        ans: "Japón",
        category: "flags",
        continent: "America",
        created_at: "somedate",
        Updated_at: "otherdate"
        }
      ]
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(props) {}

  componentWillUnmount() {}

  chooseAnswer(question, answer) {
    let points = 0;
    let acertado = false;
    if(question.ans === answer){
       points = question_points;
       acertado = true;
    }

    return this.setState({score: this.state.score + points, mostrar_boton_next: true, correct_selected: acertado});
  }

  reiniciar(){
    return this.setState({score:0, current_question:0})
  }

  nextQuestion(){
    return this.setState({current_question: this.state.current_question + 1, mostrar_boton_next: false, correct_selected: false})
  }

  render() {
    const question = this.state.questions[this.state.current_question];
    const opbtn = {color: 'white', backgroundColor: '#00bcd4', margin: '1em'}
    const comp_style_flags = { backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)',
                               width: '100%', minHeight: '50em', fontFamily: 'system-ui'}

    const comp_style_places = { backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)',
                                width: '100%', minHeight: '50em', fontFamily: 'system-ui'}

    return (
      <div style={this.props.location.gametype === "flags" ? comp_style_flags : comp_style_places}>
       <div style={{display: 'flex', textAlign: 'center', flexDirection: 'column'}}>

          {
            this.props.location.gametype === "flags" ?
              <h2 style={{color: 'white', marginTop: '1.5em', fontWeight: 600, fontSize: '3em'}}>Identify which country the flag belongs to</h2>
            :
              <h2 style={{color: 'white', marginTop: '1.5em', fontWeight: 600, fontSize: '3em'}}>Identify which country the place belongs to</h2>
          }

          <h3 style={{color: '#9C27B0', fontWeight: 600, fontSize: '2em', borderRadius: '12px',marginLeft: 'auto', marginRight: 'auto',
                      background: '#ff5722', padding: '0.7em', boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)'}}>
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
           question ?
              <Card style={{margin:'0 auto'}} elevation={10}>
                <CardActionArea style={{marginTop: '2em', minWidth: '45em'}}>
                  <CardMedia
                    style={{height: 140, width: 140, margin: '0 auto'}}
                    image={question.image}
                    title="Contemplative Reptile"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Question {this.state.current_question}
                    </Typography>
                    {
                      this.state.mostrar_boton_next === true ?
                      <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: '18px'}}>
                        {
                          this.state.correct_selected === true ?
                           <span style={{color: '#07d607', fontWeight: 600}}>Correct! + {question_points}</span>
                          :
                           <span style={{color: 'red', fontWeight: 600}}>Incorrect!</span>
                        }
                      </Typography>
                      :
                      <Typography variant="body2" color="textSecondary" component="p">
                        {question.statement}
                      </Typography>
                    }

                  </CardContent>
                </CardActionArea>

                <CardActions>
                {
                  this.state.mostrar_boton_next === true ?
                  <div  style={{textAlign: 'center', margin: '0 auto'}}>
                   <Button size="small" color="primary" style={opbtn} onClick={()=>this.nextQuestion()}>
                     Next question
                   </Button>
                  </div>

                  :
                  <div  style={{textAlign: 'center', margin: '0 auto'}}>
                   <Button size="small" color="primary"  style={opbtn} onClick={()=>this.chooseAnswer(question, question.opcionA)}>
                     {question.opcionA}
                   </Button>
                   <Button size="small" color="primary"  style={opbtn} onClick={()=>this.chooseAnswer(question, question.opcionB)}>
                     {question.opcionB}
                   </Button>
                   <Button size="small" color="primary"  style={opbtn} onClick={()=>this.chooseAnswer(question, question.opcionC)}>
                     {question.opcionC}
                   </Button>
                   <Button size="small" color="primary"  style={opbtn}  onClick={()=>this.chooseAnswer(question, question.opcionD)}>
                     {question.opcionD}
                   </Button>
                  </div>
                }

                </CardActions>
            </Card>

            : null
          }

          {
            this.props.location.filter && this.props.location.filter !== 'global' ?
            <h3 style={{color: 'white', fontWeight: 600, fontSize: '2em'}}>Only questions from: {this.props.location.filter}</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
