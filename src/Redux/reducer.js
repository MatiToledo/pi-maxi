const initialState = {
  videoGames: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videoGames: action.payLoad,
      };
    default:
      return state;
  }
}
