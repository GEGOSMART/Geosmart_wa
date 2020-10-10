export const type = 'loginUser';

const loginUser = (username, password) => {
  return {
    type,
    payload: {
      username,
      password
    }, 
  };
};

export default loginUser;
