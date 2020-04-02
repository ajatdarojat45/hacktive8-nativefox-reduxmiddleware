export const getUsers = () => {
  return async dispatch => {
    const res = await fetch("https://reqres.in/api/users");
    const users = await res.json();
    dispatch({
      type: "GET_USERS",
      payload: {
        users: users.data
      }
    });
  };
};

export const getUser = userId => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://reqres.in/api/users/${userId}`);
    const user = await res.json();
    dispatch({
      type: "GET_USER",
      payload: {
        user: user.data
      }
    });
  };
};
