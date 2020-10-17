import axios from 'axios';
import { URL } from "../data/server";


export const type = 'loginUser';
const loginUser = (user_object) => {
  return {
    type,
    payload: {
      user_object
    },
  };
};

export default loginUser;
