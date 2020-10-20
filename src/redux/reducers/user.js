import {type as loginUserType} from '../actions/loginUser';
import {type as updateUserType} from '../actions/updateUser';

const defaultState = null;

function reducer(state = defaultState, action) {
  switch(action.type) {
    case loginUserType: {
      console.log(action);
      //return state = login(action.payload.username, action.payload.password)
      return state = action.payload.user_object; //se establece en el estado el objeto del user ya logeado
    }
    case updateUserType: {
      console.log(action);
      const token = state.user.token;
      state = action.payload.user_object;
      state.user.token = token;
      return state;
    }
    default:
      return state;
  };
};

export default reducer;
