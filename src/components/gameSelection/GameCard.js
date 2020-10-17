import React from 'react';
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

const GameCard = (gameConfiguration) => {
  return (
    <Card style={{margin:'3em', height: '100%', width: '100%', borderRadius: '25px',
                  boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)'}}>
      <CardActionArea style={{marginTop: '2em'}}>
        <CardMedia
          style={{height: 140, width: 140, margin: '0 auto', borderRadius: '50%'}}
          image={gameConfiguration.gameImage}
          title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { gameConfiguration.gameName }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { gameConfiguration.gameDescription }
          </Typography>
          {
            gameConfiguration.disableSelect ? null :
          <>
            <InputLabel style={{marginTop: '2em'}}>Only questions from: </InputLabel>
              <Select
                style={{width: '100%'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gameConfiguration.gameValue}
                onChange={gameConfiguration.handleFunctionContinent}
              >
                <MenuItem value={"Global"}>All the world</MenuItem>
                <MenuItem value={"America"}>America</MenuItem>
                <MenuItem value={"Asia"}>Asia</MenuItem>
                <MenuItem value={"Africa"}>África</MenuItem>
                <MenuItem value={"Europa"}>Europe</MenuItem>
                <MenuItem value={"Oceania"}>Oceania</MenuItem>
              </Select>
            </>
            }
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary" style={{color: 'white', backgroundColor: '#00bcd4', margin: '1em'}}
                onClick={gameConfiguration.onClickConfiguration}
                >
          Play now
        </Button>
        <Button size="small" color="primary"  style={{color: 'white', backgroundColor: '#4CAF50', margin: '1em'}}>
          Play multiplayer
        </Button>
      </CardActions>
    </Card>
  )
}

export default GameCard;
