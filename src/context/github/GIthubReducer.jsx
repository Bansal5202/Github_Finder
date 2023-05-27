const GithubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        person: action.payload,
      };
      case "GET_REPO":
        return {
          ...state,
          repos: action.payload,
        };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default GithubReducer;
