export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE AFTER finish developing..
  token:
    "BQAMIuzdqnzUNS_3hIuQCBKxJFn6EH2AOP0G60Bw8CbKdNqVFmq4KA1PYTi0OHl3A2enw4WeBhiezLZUzj_3dK4rn72UKX9tu4yK8lrcoO2NVfwDrCpKSqguTgMlmJJxHolsVoMVYxVVnsAPJkQBQnJaj2RT3pnQS9RJBMonk2AZv6Mt5lzB",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        user: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
