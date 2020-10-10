import axios from 'axios';
import { URL } from "../data/server";
import {type as loginUserType} from "../actions/loginUser"

const defaultState = null;

function reducer(state = defaultState, action) {
  switch(action.type) {
    case loginUserType: {
      console.log(action)
       return state = login(action.payload.username, action.payload.password)
    }
    default:
      return state;
  };
};

async function login(username, password) {
  const r = await axios.post(URL, {
    query: `
      mutation {
        loginUser(user: {
          username: "${username}"
          password: "${password}"
        }) {
          _id
          firstname
          lastname
          username
          country
          profile_picture
          created_at
          token
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