import axios from 'axios';
import { URL } from "../data/server";

const defaultState = login();

function reducer(state = defaultState, { type, payload }) {
  switch(type) {
    case 'loginUser': {
       return login(payload.username, payload.password)
    }
    default:
      return state;
  };
};

async function login() {
  await axios.post(URL, {
    query: `
      query {
        allUsers {
          _id
          firstname
          lastname
          username
          password
          country
          profile_picture
          created_at
        }
      }
      `
    }
  )
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err.data)
  })

}

export default reducer;