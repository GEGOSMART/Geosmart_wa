import axios from 'axios';
import { URL } from "../data/server";
import {type as loginUserType} from "../actions/loginUser"

const defaultState = null;

function reducer(state = defaultState, action) {
  switch(action.type) {
    case loginUserType: {
      console.log(action)
      //return state = login(action.payload.username, action.payload.password)
      return state = action.payload.user_object; //se establece en el estado el objeto del user ya logeado
    }
    default:
      return state;
  };
};

export default reducer;
