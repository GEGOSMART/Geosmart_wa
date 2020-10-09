export const type = 'loginUser';

export const loginUser = (username, password) => {
  return {
    type,
    payload: {
      username,
      password
    }, 
  };
};
