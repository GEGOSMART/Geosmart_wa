import {type as loginUserType} from '../actions/loginUser';
import {type as updateUserType} from '../actions/updateUser';

const defaultState = JSON.parse(localStorage.getItem('user'));

function reducer(state = defaultState, action) {
  switch(action.type) {
    case loginUserType: {
      console.log(action.payload.user_object);
      localStorage.setItem('user', JSON.stringify(action.payload.user_object));
      return state = action.payload.user_object; //se establece en el estado el objeto del user ya logeado
    }
    case updateUserType: {
      console.log(action);
      localStorage.setItem('user', JSON.stringify(action.payload.user_object));
      return state = action.payload.user_object;;
    }
    default:
      return state;
  };
};

export default reducer;
