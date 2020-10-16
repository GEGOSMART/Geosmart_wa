import axios from 'axios';
import { URL } from "../data/server";
import {type as createscoreType} from "../actions/createscore"

const defaultState = null;

function reducer(state = defaultState, action) {
  switch(action.type) {
    case createscoreType: {
      console.log(action)
       return state = insert_score(action.payload.id_user, action.payload.score, action.payload.date_played, action.payload.id_game)
    }
    default:
      return state;
  };
};

async function insert_score(id_user, score, date_played, id_game) {
  const r = await axios.post(URL, {
    query: `
    mutation{
        createScore(score:{
                   ID_User: "${id_user}",
                   Score: "${score}",
                   DatePlayed: "${date_played}",
                   ID_Game: "${id_game}"
        }){
             message
        }
      }
             
      `
    }
  ).catch(err => {
    console.error(err)
  });

  return r.data;
}

export default reducer;